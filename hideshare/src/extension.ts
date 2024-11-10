import * as vscode from 'vscode';
import * as vsls from 'vsls';

export async function activate(context: vscode.ExtensionContext) {

  let extensionMode = await vscode.window.showInformationMessage('Select a HideShare mode', 'real-time', 'line', 'block');
  console.log('extensionMode', extensionMode);

  const changeModeLine = vscode.commands.registerCommand('hideshare.enableLineMode', () => {
		vscode.window.showInformationMessage('Changed to Line Mode!');
    extensionMode = 'line';
    // TODO: send message to guest that mode was changed - need to figure out how to have extension running on both host and guest
	});
  context.subscriptions.push(changeModeLine);

  const changeModeBlock = vscode.commands.registerCommand('hideshare.enableBlockMode', () => {
    vscode.window.showInformationMessage('Changed to Block Mode!');
    extensionMode = 'block';
  });
  context.subscriptions.push(changeModeBlock);

  // Wait for Live Share API to be available
  const liveShare = await vsls.getApi();

  if (!liveShare) {
    return;
  }

  console.log('session', liveShare.session);
  if (liveShare) {
    // vscode.window.showInformationMessage(`Hello World from ${liveShare.session.role}!`);
    const sessionLink = await liveShare.share();
    if (sessionLink) {
      vscode.window.showInformationMessage(`Live Share link: ${sessionLink}`);
    }
  }

  // Create a decoration type to hide the line's text and display ellipsis (...)
  const hiddenLineDecorationType = vscode.window.createTextEditorDecorationType({
    color: 'transparent', // Make the text transparent (invisible)
    backgroundColor: 'transparent', // Transparent background
    textDecoration: 'none',
  });
  const slightlyTransparentDecorationType = vscode.window.createTextEditorDecorationType({
    color: 'rgba(0, 0, 0, 0.5)',
  });

  const ellipsisDecorationType = vscode.window.createTextEditorDecorationType({
    after: {
      contentText: '...', // Display ellipsis after the line of code
      color: 'gray',       // Gray color for the ellipsis
    },
  });

  // Track the last active line number -- loop over
  let lastActiveLine = -1;

  // Keep track of indentation levels
  const tabs: number[] = [];

  // Trigger the decoration update based on text changes or cursor position
  const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async (event) => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
    }

    let activeLine = editor.selection.active.line;

    // Beginning and end of line range to hide in block mode
    let early = 0;
    let later = 0;

    if (extensionMode === 'line') {
      if (liveShare!.session.role !== vsls.Role.Guest) {
        let peer = await liveShare!.getPeerForTextDocumentChangeEvent(event);
        if (peer.role !== vsls.Role.Host) {
          event.contentChanges.forEach(change => {
            let line = change.range.start.line;
            hideLine([line], editor, hiddenLineDecorationType);
            updateEllipsisDecoration(editor, line);
          });
        }
      } else {
        // TODO: if guest, turn text slightly transparent -- need to have guest running extension
        vscode.window.showInformationMessage('Guest mode');
        editor.setDecorations(slightlyTransparentDecorationType, [new vscode.Range(0, 0, editor.document.lineCount, 0)]);
      }

      // Remove decoration from the previous line when moving to a new line
      if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
        if (liveShare!.session.role !== vsls.Role.Guest) {
          removeLineDecoration(editor, hiddenLineDecorationType, ellipsisDecorationType);
        }
      }

      // Update last active line to the current line
      lastActiveLine = activeLine;

    } else if (extensionMode === 'block') {
      if (liveShare!.session.role !== vsls.Role.Guest) {
        let peer = await liveShare!.getPeerForTextDocumentChangeEvent(event);
        if (peer.role !== vsls.Role.Host) {

          // Record indentation levels for all editor lines
          countAllTabs(editor, tabs);
          event.contentChanges.forEach((change) => {
            // If new tab is added to the line, increment tab count
            // if (change.text.includes('    ')) {
            // 	console.log('tab added to', activeLine);
            // 	if (!tabs[activeLine]) tabs[activeLine] = 0
            // 	tabs[activeLine] += 1
            // }

            early = later = change.range.start.line;
            // console.log('active line number', activeLine)

            // Find start and end of line range based on same indentation level
            while (tabs[early] === tabs[change.range.start.line] || tabs[later] === tabs[change.range.start.line]) {
              if (tabs[early] === tabs[change.range.start.line]) {
                early--;
              }
              if (tabs[later] === tabs[change.range.start.line]) {
                later++;
              }
            }
            // When we exit the loop, early will be correct, later will be one greater than it should be
            later--;
            if (tabs[early] - tabs[change.range.start.line] > 1) {
              early++;
            }
            // console.log(early, later, tabs[early], tabs[later])
            updateEllipsisDecoration(editor, change.range.start.line); // can track changes on change line
          });

          // If the line is being typed, apply the ellipsis and hide the text
          // console.log(editor.document.lineAt(early).text, editor.document.lineAt(later).text)
          hideLine([early, later], editor, hiddenLineDecorationType);
          // applyHiddenLineAndEllipsis([early, later], editor, hiddenLineDecorationType, ellipsisDecorationType);
        }


      }
    }

  });
  context.subscriptions.push(onDidChangeTextDocument);
}

// Decoration type for the ellipsis effect
const ellipsisDecorationTypes = [
  vscode.window.createTextEditorDecorationType({
    after: {
      contentText: '.', // Single dot
      color: 'gray',
    },
  }),
  vscode.window.createTextEditorDecorationType({
    after: {
      contentText: '..', // Two dots
      color: 'gray',
    },
  }),
  vscode.window.createTextEditorDecorationType({
    after: {
      contentText: '...', // Three dots
      color: 'gray',
    },
  }),
];

// Change the ellipsis decoration based on character count
function updateEllipsisDecoration(editor: vscode.TextEditor, lineNumber: number) {

  // Using actual line value so accessing peer's cursor position implicitly
  const lineText = editor.document.lineAt(lineNumber).text;

  // Find the first non-whitespace
  const startPos = lineText.search(/\S/);
  // vscode.window.showInformationMessage(`lineText: ${lineText}, startPos: ${startPos.character}`);
  const modValue = lineText.length % 3;
  const lineRange = new vscode.Range(lineNumber, startPos, lineNumber, startPos);

  // Clear old decorations and set current ellipses style
  ellipsisDecorationTypes.forEach((decoration, index) => {
    if (index !== modValue) {
      editor.setDecorations(decoration, []);
    }
  });
  editor.setDecorations(ellipsisDecorationTypes[modValue], [lineRange]);
}


// Calculate how many indents are on a line
function countAllTabs(
  editor: vscode.TextEditor,
  tabs: number[],
) {
  for (let i = 0; i < editor.document.lineCount; i++) {
    const line = editor.document.lineAt(i);
    console.log('line', i, line.text);
    if (!line.isEmptyOrWhitespace) {
      // leetcode uses tab = 4 spaces
      tabs[i] = line.firstNonWhitespaceCharacterIndex / 4;
    } else if (line.text.includes('    ')) { // if line is composed only of tabs, give it the same indent level as the line below it
      tabs[i] = editor.document.lineAt(i + 1).firstNonWhitespaceCharacterIndex / 4;
    } else { // empty line
      tabs[i] = 0;
    }
  }
  console.log(tabs);
}

// Apply hide line text to the current line
function hideLine(
  lineNumber: number[],
  editor: vscode.TextEditor,
  hiddenDecorationType: vscode.TextEditorDecorationType,
) {
  let lineRange;
  if (lineNumber.length === 1) {
    lineRange = editor.document.lineAt(lineNumber[0]).range;
  } else {
    lineRange = new vscode.Range(editor.document.lineAt(lineNumber[0]).range.start, editor.document.lineAt(lineNumber[1]).range.end);
  }

  // Apply the hidden text decoration (make text transparent) to the line
  editor.setDecorations(hiddenDecorationType, [lineRange]);
}

// Remove the decoration from the file (used when moving to next line)
function removeLineDecoration(
  editor: vscode.TextEditor,
  hiddenDecorationType: vscode.TextEditorDecorationType,
  ellipsisDecorationType: vscode.TextEditorDecorationType
) {
  editor.setDecorations(hiddenDecorationType, []); // Clear hidden text decoration
  editor.setDecorations(ellipsisDecorationType, []); // Clear ellipsis decoration
}

export function deactivate() { }

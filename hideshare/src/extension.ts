import * as vscode from 'vscode';
import * as vsls from 'vsls';

// will be running guest-side
export async function activate(context: vscode.ExtensionContext) {

  // Wait for Live Share API to be available
  const liveShare = await vsls.getApi();

  if (!liveShare) {
    console.log('Live Share API not available');
    // return;
  }

  let extensionMode = await vscode.window.showInformationMessage('Select a HideShare mode', 'real-time', 'line', 'word');

  console.log('Guest mode activated');

  const slightlyTransparentDecorationType = vscode.window.createTextEditorDecorationType({
    opacity: '0.5',
    fontStyle: 'italic',
  });

  // Track the last active line number -- loop over
  let lastActiveLine = -1;

  // Keep track of indentation levels

  const changeModeLine = vscode.commands.registerCommand('hideshare.enableLineMode', () => {
    vscode.window.showInformationMessage('Changed to Line Mode!');
    extensionMode = 'line';
  });
  context.subscriptions.push(changeModeLine);
  const changeModeWord = vscode.commands.registerCommand('hideshare.enableWordMode', () => {
    vscode.window.showInformationMessage('Changed to Word Mode!');
    extensionMode = 'word';
  });
  context.subscriptions.push(changeModeWord);
  const changeModeRealTime = vscode.commands.registerCommand('hideshare.enableRealTimeMode', () => {
    vscode.window.showInformationMessage('Changed to Real-Time Mode!');
    extensionMode = 'real-time';
  });


  // Trigger the decoration update based on text changes or cursor position
  const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async (event) => {
    for (const editor of vscode.window.visibleTextEditors) {
      event.contentChanges.forEach(change => {
        let line = change.range.start.line;
        if (extensionMode === 'line') {
          hideLine(line, 'line', editor, slightlyTransparentDecorationType);
        } else if (extensionMode === 'word') {
          hideLine(line, 'word', editor, slightlyTransparentDecorationType);
        }
      });
    }
  });
  context.subscriptions.push(onDidChangeTextDocument);
}

// Apply hide line text to the current line
function hideLine(
  lineNumber: number,
  mode: string,
  editor: vscode.TextEditor,
  hiddenDecorationType: vscode.TextEditorDecorationType,
) {
  let lineRange;
  if (mode === 'line') {
    lineRange = editor.document.lineAt(lineNumber).range;
  } else {
    let startIndex = new vscode.Position(lineNumber, editor.document.lineAt(lineNumber).text.lastIndexOf(' '));
    lineRange = new vscode.Range(startIndex, editor.document.lineAt(lineNumber).range.end);
  }

  // Apply the hidden text decoration (make text transparent) to the line
  editor.setDecorations(hiddenDecorationType, [lineRange]);
}

export function deactivate() { }
import * as vscode from 'vscode';
import * as vsls from 'vsls';

// will be running host-side
export async function activate(context: vscode.ExtensionContext) {

  let extensionMode = await vscode.window.showInformationMessage('Select a HideShare mode', 'real-time', 'line', 'block', 'word');
  if (extensionMode === undefined) {
    return;
  }
  console.log('extensionMode', extensionMode);

  // Wait for Live Share API to be available
  const liveShareAPI = await vsls.getApi();

	if (!liveShareAPI) {
		return;
	}

  console.log('session', liveShareAPI.session);


  // vscode.window.showInformationMessage(`Hello World from ${liveShare.session.role}!`);
  const sessionLink = await liveShareAPI.share();
  if (sessionLink) {
    vscode.window.showInformationMessage(`Live Share link: ${sessionLink}`);
  }

  // check if session live
  if (liveShareAPI.session.role === vsls.Role.Host) {
    vscode.window.showInformationMessage('Host mode');
  } else {
    vscode.window.showInformationMessage('Guest mode');
  }

  let notificationService : null | vsls.SharedService = null;
  try {
    notificationService = await liveShareAPI.shareService('notificationService');
    if (notificationService === null) {
      vscode.window.showErrorMessage('Failed to setup notification service');
      return;
    }
  } catch (error) {
    vscode.window.showErrorMessage('Error sharing notification service:' + error);
    return;
  }
  function sendNotification(message: string) {
    if (notificationService && notificationService.isServiceAvailable) {
        notificationService.notify('showNotification', JSON.parse('{"message": "' + message + '"}'));
    } else {
        console.log('Notification service is not available');
    }
  }

  const changeModeLine = vscode.commands.registerCommand('hideshare.enableLineMode', () => {
    vscode.window.showInformationMessage('Changed to Line Mode!');
    extensionMode = 'line';
    // TODO: send message to guest that mode was changed - need to figure out how to have extension running on both host and guest
    sendNotification('Switched to Line Mode');
  });
  context.subscriptions.push(changeModeLine);

  const changeModeBlock = vscode.commands.registerCommand('hideshare.enableBlockMode', () => {
    vscode.window.showInformationMessage('Changed to Block Mode!');
    extensionMode = 'block';
    sendNotification('Switched to Block Mode');
  });
  context.subscriptions.push(changeModeBlock);
	const changeModeWord = vscode.commands.registerCommand('hideshare.enableWordMode', () => {
		vscode.window.showInformationMessage('Changed to Word Mode!');
		extensionMode = 'word';
		// TODO: send message to guest that mode was changed - need to figure out how to have extension running on both host and guest
	});
	context.subscriptions.push(changeModeWord);


	const changeModeRealTime = vscode.commands.registerCommand('hideshare.enableRealTimeMode', () => {
		vscode.window.showInformationMessage('Changed to Real-Time Mode!');
		extensionMode = 'real-time';
	});
	context.subscriptions.push(changeModeRealTime);

	// Wait for Live Share API to be available
	const liveShare = await vsls.getApi();

	if (!liveShareAPI) {
		return;
	}

	console.log('session', liveShareAPI.session);
	if (liveShareAPI) {
		// vscode.window.showInformationMessage(`Hello World from ${liveShare.session.role}!`);
		const sessionLink = await liveShareAPI.share();
		if (sessionLink) {
			vscode.window.showInformationMessage(`Live Share link: ${sessionLink}`);
		}
	}

  // Create a decoration type to hide the line's text and display ellipsis (...)
  // const hiddenLineDecorationType = vscode.window.createTextEditorDecorationType({
  //   color: 'transparent', // Make the text transparent (invisible)
  //   backgroundColor: 'transparent', // Transparent background
  //   textDecoration: 'none',
  // });
  const hiddenLineDecorationType = vscode.window.createTextEditorDecorationType({
    color: 'rgba(0, 0, 0, 0.5)',
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

	// Trigger the decoration update based on text changes or cursor position
	const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async (event) => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			return;
		}

		let activeLine = editor.selection.active.line;

		if (extensionMode === 'line') {
			if (liveShareAPI!.session.role !== vsls.Role.Guest) {
				let peer = await liveShareAPI!.getPeerForTextDocumentChangeEvent(event);
				if (peer.role !== vsls.Role.Host) {
					event.contentChanges.forEach(change => {
						let line = change.range.start.line;
						hideLine(line, 'line', editor, hiddenLineDecorationType);
						updateEllipsisDecoration(editor, line, 'line');
					});
				}
			} else {
				// TODO: if guest, turn text slightly transparent -- need to have guest running extension
				vscode.window.showInformationMessage('Guest mode');
				editor.setDecorations(slightlyTransparentDecorationType, [new vscode.Range(0, 0, editor.document.lineCount, 0)]);
			}

			// Remove decoration from the previous line when moving to a new line
			if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
				if (liveShareAPI!.session.role !== vsls.Role.Guest) {
					removeLineDecoration(editor, hiddenLineDecorationType, ellipsisDecorationType);
				}
			}

			// Update last active line to the current line
			lastActiveLine = activeLine;

		} else if (extensionMode === 'word') {
			if (liveShareAPI!.session.role !== vsls.Role.Guest) {
				let peer = await liveShareAPI!.getPeerForTextDocumentChangeEvent(event);
				if (peer.role !== vsls.Role.Host) {
					event.contentChanges.forEach(change => {
						let line = change.range.start.line;
						hideLine(line, 'word', editor, hiddenLineDecorationType);
						updateEllipsisDecoration(editor, line, 'word');
					});
				}
			} else {
				// TODO: if guest, turn text slightly transparent -- need to have guest running extension
				vscode.window.showInformationMessage('Guest mode');
				editor.setDecorations(slightlyTransparentDecorationType, [new vscode.Range(0, 0, editor.document.lineCount, 0)]);
			}
		}
	});
	context.subscriptions.push(onDidChangeTextDocument);
}

// Decoration type for the ellipsis effect
const ellipsisDecorationTypes = [
	vscode.window.createTextEditorDecorationType({
		after: {
			contentText: ' .', // Single dot
			color: 'gray',
		},
	}),
	vscode.window.createTextEditorDecorationType({
		after: {
			contentText: ' ..', // Two dots
			color: 'gray',
		},
	}),
	vscode.window.createTextEditorDecorationType({
		after: {
			contentText: ' ...', // Three dots
			color: 'gray',
		},
	}),
];

// Change the ellipsis decoration based on character count
function updateEllipsisDecoration(editor: vscode.TextEditor, lineNumber: number, mode: string) {

	// Using actual line value so accessing peer's cursor position implicitly
	const lineText = editor.document.lineAt(lineNumber).text;


	let lineRange;
	let startPos;
	let modValue;
	if (mode === 'line') {
		// Find the first non-whitespace
		startPos = lineText.search(/\S/);
		// vscode.window.showInformationMessage(`lineText: ${lineText}, startPos: ${startPos.character}`);
		modValue = lineText.length % 3;
		lineRange = new vscode.Range(lineNumber, startPos, lineNumber, startPos);
	} else {
		startPos = editor.document.lineAt(lineNumber).text.lastIndexOf(' ')
		lineRange = new vscode.Range(lineNumber, startPos, lineNumber, startPos);
		modValue = 2
	}


	// Clear old decorations and set current ellipses style
	ellipsisDecorationTypes.forEach((decoration, index) => {
		if (index !== modValue) {
			editor.setDecorations(decoration, []);
		}
	});
	editor.setDecorations(ellipsisDecorationTypes[modValue], [lineRange]);
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
		let startIndex = new vscode.Position(lineNumber, editor.document.lineAt(lineNumber).text.lastIndexOf(' '))
		lineRange = new vscode.Range(startIndex, editor.document.lineAt(lineNumber).range.end);
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

import * as vscode from 'vscode';
import * as vsls from 'vsls';

// will be running guest-side
export async function activate(context: vscode.ExtensionContext) {

  // need to check if in a live share session or not
  // if in a live share session - just show a message, else do rest of code

  // Wait for Live Share API to be available
  const liveShare = await vsls.getApi();

  if (!liveShare) {
    vscode.window.showInformationMessage('Live Share extension not installed');
    return;
  }
  let notificationServiceProxy: vsls.SharedServiceProxy | null = null;
  vscode.window.showInformationMessage('Live Share extension installed');

  try {
    notificationServiceProxy = await liveShare.getSharedService('notificationService');
  } catch (error) {
    vscode.window.showInformationMessage('Error getting notification service' + error);
  }
  if (notificationServiceProxy === null) {
    vscode.window.showInformationMessage('Notification service is not available');
    return;
  }

  function sendNotificationToHost(message: string) {
    if (notificationServiceProxy && notificationServiceProxy.isServiceAvailable) {
      notificationServiceProxy.notify('showNotification', JSON.parse('{"message": "' + message + '"}'));
    } else {
      console.log('Notification service is not available');
    }
  }

  context.subscriptions.push(
    vscode.commands.registerCommand('hideshare.requestBlock', () => {
      sendNotificationToHost(JSON.stringify('Please switch to block mode'));
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('hideshare.requestLine', () => {
      sendNotificationToHost(JSON.stringify('Please switch to line mode'));
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('hideshare.requestRealTime', () => {
      sendNotificationToHost(JSON.stringify('Please switch to real-time mode'));
    })
  );
  vscode.window.showInformationMessage('Guest mode activated');

  const slightlyTransparentDecorationType = vscode.window.createTextEditorDecorationType({
    color: 'rgba(0, 0, 0, 0.5)',
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

    let extensionMode = 'line';
    // TODO: Get the reveal method from the host - change with notification service
    // assume line level first

    let peer = await liveShare!.getPeerForTextDocumentChangeEvent(event);
    if (peer.role !== vsls.Role.Host) {
      event.contentChanges.forEach(change => {
        let line = change.range.start.line;
        // TODO: update to just edit line
        editor.setDecorations(slightlyTransparentDecorationType, [new vscode.Range(line, 0, line, editor.document.lineAt(line).range.end.character)]);
        vscode.window.showInformationMessage('Guest mode');
      });
    }

    // Remove decoration from the previous line when moving to a new line
    if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
      removeLineDecoration(editor, slightlyTransparentDecorationType, ellipsisDecorationTypes[0]);
    }

    // Update last active line to the current line
    lastActiveLine = activeLine;


    context.subscriptions.push(onDidChangeTextDocument);
  });

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

  // Remove the decoration from the file (used when moving to next line)
  function removeLineDecoration(
    editor: vscode.TextEditor,
    hiddenDecorationType: vscode.TextEditorDecorationType,
    ellipsisDecorationType: vscode.TextEditorDecorationType
  ) {
    editor.setDecorations(hiddenDecorationType, []); // Clear hidden text decoration
    editor.setDecorations(ellipsisDecorationType, []); // Clear ellipsis decoration
  }
}

  export function deactivate() { }

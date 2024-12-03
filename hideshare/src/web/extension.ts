import * as vscode from 'vscode';
import * as vsls from 'vsls';

// will be running guest-side
export async function activate(context: vscode.ExtensionContext) {

  // vscode.window.showInformationMessage('Starting HideShare (Before await vsls.getApi())');
  // need to check if in a live share session or not
  // if in a live share session - just show a message, else do rest of code

  // Wait for Live Share API to be available
  const liveShare = await vsls.getApi();

  if (!liveShare) {
    vscode.window.showInformationMessage('Live Share API not available');
    // return;
  }
  // let notificationServiceProxy: vsls.SharedServiceProxy | null = null;
  // vscode.window.showInformationMessage('Live Share extension available');

  // try {
  //   notificationServiceProxy = await liveShare.getSharedService('notificationService');
  // } catch (error) {
  //   vscode.window.showInformationMessage('Error getting notification service' + error);
  // }
  // if (notificationServiceProxy === null) {
  //   vscode.window.showInformationMessage('Notification service is not available');
  //   return;
  // }

  // function sendNotificationToHost(message: string) {
  //   if (notificationServiceProxy && notificationServiceProxy.isServiceAvailable) {
  //     notificationServiceProxy.notify('showNotification', JSON.parse('{"message": "' + message + '"}'));
  //   } else {
  //     console.log('Notification service is not available');
  //   }
  // }
  // TODO: Get the reveal method from the host - change with notification service
  // assume line level first
  let extensionMode = 'line';
  // context.subscriptions.push(
  //   vscode.commands.registerCommand('hideshare.requestBlock', () => {
  //     sendNotificationToHost(JSON.stringify('Please switch to block mode'));
  //   })
  // );

  // context.subscriptions.push(
  //   vscode.commands.registerCommand('hideshare.requestLine', () => {
  //     sendNotificationToHost(JSON.stringify('Please switch to line mode'));
  //   })
  // );

  // context.subscriptions.push(
  //   vscode.commands.registerCommand('hideshare.requestRealTime', () => {
  //     sendNotificationToHost(JSON.stringify('Please switch to real-time mode'));
  //   })
  // );
  vscode.window.showInformationMessage('Guest mode activated');

  const slightlyTransparentDecorationType = vscode.window.createTextEditorDecorationType({
    opacity: '0.5',
    fontStyle: 'italic',
  });

  // Track the last active line number -- loop over
  let lastActiveLine = -1;

  // Keep track of indentation levels
  const tabs: number[] = [];

  // Trigger the decoration update based on text changes or cursor position
  const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async (event) => {
    // java ls
    for (const editor of vscode.window.visibleTextEditors) {
      let activeLine = editor.selection.active.line;
      event.contentChanges.forEach(change => {
        let line = change.range.start.line;
        // TODO: update to just edit line
        editor.setDecorations(slightlyTransparentDecorationType, [new vscode.Range(line, 0, line, editor.document.lineAt(line).range.end.character)]);
      });

      // Remove decoration from the previous line when moving to a new line
      if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
        removeLineDecoration(editor, slightlyTransparentDecorationType);
      }

      // Update last active line to the current line
      lastActiveLine = activeLine;
    }
    context.subscriptions.push(onDidChangeTextDocument);
  });

  // Remove the decoration from the file (used when moving to next line)
  function removeLineDecoration(
    editor: vscode.TextEditor,
    hiddenDecorationType: vscode.TextEditorDecorationType,
  ) {
    editor.setDecorations(hiddenDecorationType, []); // Clear hidden text decoration (" If rangesOrOptions is empty, the existing decorations with the given decoration type will be removed.")
  }
}

export function deactivate() { }

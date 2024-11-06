"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const vsls = __importStar(require("vsls"));
async function activate(context) {
    const extensionMode = await vscode.window.showInformationMessage('Select a HideShare mode', 'real-time', 'line', 'block');
    console.log('extensionMode', extensionMode);
    // Wait for Live Share API to be available
    const liveShare = await vsls.getApi();
    if (!liveShare) {
        return;
    }
    console.log('session', liveShare.session);
    // Create a decoration type to hide the line's text and display ellipsis (...)
    const hiddenLineDecorationType = vscode.window.createTextEditorDecorationType({
        color: 'transparent', // Make the text transparent (invisible)
        backgroundColor: 'transparent', // Transparent background
        textDecoration: 'none',
    });
    const ellipsisDecorationType = vscode.window.createTextEditorDecorationType({
        after: {
            contentText: '...', // Display ellipsis after the line of code
            color: 'gray', // Gray color for the ellipsis
        },
    });
    // Track the last active line number -- loop over
    let lastActiveLine = -1;
    // Keep track of indentation levels
    const tabs = [];
    // Trigger the decoration update based on text changes or cursor position
    const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument((event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        let activeLine = editor.selection.active.line;
        // Beginning and end of line range to hide in block mode
        let early = 0;
        let later = 0;
        if (extensionMode === 'line') {
            // If the line is being typed, apply the ellipsis and hide the text
            const lineRange = editor.document.lineAt(activeLine).range;
            applyHiddenLineAndEllipsis(lineRange, editor, hiddenLineDecorationType, ellipsisDecorationType);
            // Remove decoration from the previous line and add to new line
            if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
                removeLineDecoration(editor, hiddenLineDecorationType, ellipsisDecorationType);
            }
            // Update last active line to the current line
            lastActiveLine = activeLine;
        }
        else if (extensionMode === 'block') {
            // Record indentation levels for all editor lines
            countAllTabs(editor, tabs);
            event.contentChanges.forEach((change) => {
                // If new tab is added to the line, increment tab count
                // if (change.text.includes('    ')) {
                // 	console.log('tab added to', activeLine);
                // 	if (!tabs[activeLine]) tabs[activeLine] = 0
                // 	tabs[activeLine] += 1
                // }
                early = later = activeLine;
                // console.log('active line number', activeLine)
                // Find start and end of line range based on same indentation level
                while (tabs[early] == tabs[activeLine] || tabs[later] == tabs[activeLine]) {
                    if (tabs[early] == tabs[activeLine]) {
                        early--;
                    }
                    if (tabs[later] == tabs[activeLine]) {
                        later++;
                    }
                }
                // When we exit the loop, early will be correct, later will be one greater than it should be
                later--;
                // console.log(early, later, tabs[early], tabs[later])
            });
            // If the line is being typed, apply the ellipsis and hide the text
            // console.log(editor.document.lineAt(early).text, editor.document.lineAt(later).text)
            const lineRange = new vscode.Range(editor.document.lineAt(early).range.start, editor.document.lineAt(later).range.end);
            applyHiddenLineAndEllipsis(lineRange, editor, hiddenLineDecorationType, ellipsisDecorationType);
        }
    });
    context.subscriptions.push(onDidChangeTextDocument);
}
// Calculate how many indents are on a line
function countAllTabs(editor, tabs) {
    for (let i = 0; i < editor.document.lineCount; i++) {
        const line = editor.document.lineAt(i);
        console.log('line', i, line.text);
        if (!line.isEmptyOrWhitespace) {
            // leetcode uses tab = 4 spaces
            tabs[i] = line.firstNonWhitespaceCharacterIndex / 4;
        }
        else if (line.text.includes('    ')) { // if line is composed only of tabs, give it the same indent level as the line below it
            tabs[i] = editor.document.lineAt(i + 1).firstNonWhitespaceCharacterIndex / 4;
        }
        else { // empty line
            tabs[i] = 0;
        }
    }
    console.log(tabs);
}
// Apply both the hidden line text and the ellipsis decoration to the current line
function applyHiddenLineAndEllipsis(lineRange, editor, hiddenDecorationType, ellipsisDecorationType) {
    // const activeLine = editor.selection.active.line;
    // const lineRange = editor.document.lineAt(activeLine).range;
    // Apply the hidden text decoration (make text transparent) to the line
    editor.setDecorations(hiddenDecorationType, [lineRange]);
    // Apply the ellipsis decoration to the line
    editor.setDecorations(ellipsisDecorationType, [lineRange]);
}
// Remove the decoration from the specified line
function removeLineDecoration(editor, hiddenDecorationType, ellipsisDecorationType) {
    editor.setDecorations(hiddenDecorationType, []); // Clear hidden text decoration
    editor.setDecorations(ellipsisDecorationType, []); // Clear ellipsis decoration
}
function deactivate() { }
//# sourceMappingURL=extension.js.map
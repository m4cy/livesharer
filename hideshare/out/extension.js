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
    // when code block is complete, remove line decorations
    // for bracketed languages, I can manually check for for, if, while, switch, and add the line to the active block set.
    // but with auto-complete, the closing bracket is probably automatically added, so it's just based on cursor position
    // between two brackets
    // or the number of tabs in I am.
    // so I can write a function to constantly keep track of all the open and closed brackets (and which line number they're on)
    // and if my cursor position is somewhere between an open and closed bracket, I make everything in the middle invisible
    // for python, I can write a function that keeps track of number of indentations there are on each line
    // based on the indentation level of the line of my cursor position, make invisible
    // pre-parse the document to fill up indicators
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        console.log('no active window yet');
        return;
    }
    const docType = vscode.window.activeTextEditor?.document.languageId;
    const tabs = [];
    // const brackets: number[][] = [];
    // const openBrackets = [];
    for (let i = 0; i < editor.document.lineCount; i++) {
        const line = editor.document.lineAt(i);
        console.log('line', i, line.text);
        // if (docType === 'python') {
        // tab closure
        if (!line.isEmptyOrWhitespace) {
            // leetcode uses tab = 4 spaces
            tabs[i] = line.firstNonWhitespaceCharacterIndex / 4;
        }
        else {
            tabs[i] = 0;
        }
        // } else if (docType === 'java' || docType === 'c' || docType === 'cpp' || docType === 'javascript') {
        // 	// bracket closure
        // 	// 2d array better,
        // 	// keep track of line of each opening and closing bracket
        // 	// for each cursor position, look for the most restrictive interval I could be contained in 
        // 	if (line.text.includes('{')) {
        // 		console.log('open bracket')
        // 		brackets.push([i])
        // 		// this will act as my stack
        // 		openBrackets.push(brackets.length - 1)
        // 	} else if (line.text.includes('}')) {
        // 		console.log('closed bracket', openBrackets)
        // 		let lastOpenBracket = openBrackets.pop()
        // 		if (!lastOpenBracket) return;
        // 		let openBracket = brackets[lastOpenBracket][0]
        // 		brackets[openBracket].push(i)
        // 	}
        // }
    }
    // console.log('sanity check', openBrackets)
    console.log('tabs', tabs);
    // console.log('brackets', brackets)
    // Trigger the decoration update based on text changes or cursor position
    const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument((event) => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const activeLine = editor.selection.active.line;
        if (extensionMode === 'line') {
            // If the line is being typed, apply the ellipsis and hide the text
            applyHiddenLineAndEllipsis(editor, hiddenLineDecorationType, ellipsisDecorationType);
            // Remove decoration from the previous line and add to new line
            if (lastActiveLine !== -1 && lastActiveLine !== activeLine) {
                removeLineDecoration(editor, hiddenLineDecorationType, ellipsisDecorationType);
            }
            // Update last active line to the current line
            lastActiveLine = activeLine;
        }
        else if (extensionMode === 'block') {
            event.contentChanges.forEach((change) => {
                // if (docType === 'python') {
                // tab closure
                if (change.text === '   ') {
                    console.log('tab added to', activeLine);
                    if (!tabs[activeLine])
                        tabs[activeLine] = 0;
                    tabs[activeLine] += 1;
                    console.log(tabs);
                    // }
                    // } else if (docType === 'java' || docType === 'c' || docType === 'cpp' || docType === 'javascript') {
                    // 	// bracket closure
                    // 	if (change.text === '{' || change.text === '}') {
                    // 		console.log(change.text, 'added to', activeLine);
                    // 		// brackets.push(activeLine)
                    // 	} else {
                    // 		console.log(change.text)
                    // 	}
                }
            });
        }
    });
    context.subscriptions.push(onDidChangeTextDocument);
}
// Apply both the hidden line text and the ellipsis decoration to the current line
function applyHiddenLineAndEllipsis(editor, hiddenDecorationType, ellipsisDecorationType) {
    const activeLine = editor.selection.active.line;
    const lineRange = editor.document.lineAt(activeLine).range;
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
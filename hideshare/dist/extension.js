"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/vsls/package.json
var require_package = __commonJS({
  "node_modules/vsls/package.json"(exports2, module2) {
    module2.exports = {
      name: "vsls",
      displayName: "VS Live Share extension API",
      description: "Enables VS Code extensions to access Live Share capabilities.",
      version: "1.0.4753",
      publisher: "ms-vsliveshare",
      main: "vscode.js",
      preview: true,
      license: "SEE LICENSE IN LICENSE.txt",
      homepage: "https://aka.ms/vsls",
      bugs: {
        url: "https://aka.ms/vsls-issues",
        email: "vsls-feedback@microsoft.com"
      },
      author: {
        name: "Microsoft"
      },
      keywords: [
        "Live Share"
      ],
      categories: [
        "Other"
      ],
      repository: {
        url: "https://github.com/MicrosoftDocs/live-share"
      },
      dependencies: {
        "@microsoft/servicehub-framework": "^2.6.74"
      }
    };
  }
});

// node_modules/vsls/vscode.js
var require_vscode = __commonJS({
  "node_modules/vsls/vscode.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var vscode2 = require("vscode");
    var liveShareApiVersion = require_package().version;
    exports2.extensionId = "ms-vsliveshare.vsliveshare";
    async function getApi2(callingExtensionId) {
      const liveshareExtension = vscode2.extensions.getExtension(exports2.extensionId);
      if (!liveshareExtension) {
        return null;
      }
      const extensionApi = liveshareExtension.isActive ? liveshareExtension.exports : await liveshareExtension.activate();
      if (!extensionApi) {
        return null;
      }
      if (!extensionApi.getApi)
        return extensionApi.getApiAsync(liveShareApiVersion);
      return extensionApi.getApi(liveShareApiVersion, callingExtensionId);
    }
    exports2.getApi = getApi2;
    function getApiAsync() {
      return getApi2();
    }
    exports2.getApiAsync = getApiAsync;
    var PolicySetting;
    (function(PolicySetting2) {
      PolicySetting2["AllowGuestDebugControl"] = "allowGuestDebugControl";
      PolicySetting2["AllowGuestTaskControl"] = "allowGuestTaskControl";
      PolicySetting2["AutoShareServers"] = "autoShareServers";
      PolicySetting2["AnonymousGuestApproval"] = "anonymousGuestApproval";
      PolicySetting2["ConnectionMode"] = "connectionMode";
      PolicySetting2["AllowedDomains"] = "allowedDomains";
      PolicySetting2["AllowReadWriteTerminals"] = "allowReadWriteTerminals";
    })(PolicySetting = exports2.PolicySetting || (exports2.PolicySetting = {}));
    var Role;
    (function(Role2) {
      Role2[Role2["None"] = 0] = "None";
      Role2[Role2["Host"] = 1] = "Host";
      Role2[Role2["Guest"] = 2] = "Guest";
    })(Role = exports2.Role || (exports2.Role = {}));
    var Access;
    (function(Access2) {
      Access2[Access2["None"] = 0] = "None";
      Access2[Access2["ReadOnly"] = 1] = "ReadOnly";
      Access2[Access2["ReadWrite"] = 3] = "ReadWrite";
      Access2[Access2["Owner"] = 255] = "Owner";
    })(Access = exports2.Access || (exports2.Access = {}));
    var View;
    (function(View2) {
      View2["Session"] = "liveshare.session";
      View2["ExplorerSession"] = "liveshare.session.explorer";
      View2["PlannedSessions"] = "liveshare.plannedSessions";
      View2["Contacts"] = "liveshare.contacts";
      View2["Help"] = "liveshare.help";
    })(View = exports2.View || (exports2.View = {}));
    var ViewItem;
    (function(ViewItem2) {
      ViewItem2["Participants"] = "participants";
      ViewItem2["Servers"] = "servers";
      ViewItem2["Terminals"] = "terminals";
      ViewItem2["Comments"] = "comments";
      ViewItem2["Chat"] = "chat";
      ViewItem2["CurrentUser"] = "participants.currentuser";
      ViewItem2["Guest"] = "participants.guest";
      ViewItem2["FollowedGuest"] = "participants.guest.followed";
      ViewItem2["Participant"] = "participants.participant";
      ViewItem2["FollowedParticipant"] = "participants.participant.followed";
      ViewItem2["GuestAnonymous"] = "participants.guest.anonymous";
      ViewItem2["FollowedGuestAnonymous"] = "participants.guest.followed.anonymous";
      ViewItem2["GuestElevated"] = "participants.guest.elevated";
      ViewItem2["FollowedGuestElevated"] = "participants.guest.followed.elevated";
      ViewItem2["GuestElevatedAnonymous"] = "participants.guest.elevated.anonymous";
      ViewItem2["FollowedGuestElevatedAnonymous"] = "participants.guest.followed.elevated.anonymous";
      ViewItem2["LocalServer"] = "servers.local";
      ViewItem2["RemoteServer"] = "servers.remote";
      ViewItem2["LocalTerminalReadOnly"] = "terminals.local.readonly";
      ViewItem2["LocalTerminalReadWrite"] = "terminals.local.readwrite";
      ViewItem2["RemoteTerminal"] = "terminals.remote";
      ViewItem2["SuggestedContacts"] = "contacts.suggested";
      ViewItem2["AvailableContacts"] = "contacts.available";
      ViewItem2["ContactsProvider"] = "contacts.provider";
      ViewItem2["SelfContact"] = "contacts.selfContact";
      ViewItem2["Contact"] = "contacts.contact";
      ViewItem2["ContactInvited"] = "contacts.contact.invited";
      ViewItem2["ContactOffline"] = "contacts.contact.offline";
      ViewItem2["RecentContact"] = "contacts.recentContact";
      ViewItem2["RecentContactOffline"] = "contacts.recentContact.offline";
      ViewItem2["RecentContactInvited"] = "contacts.recentContact.invited";
      ViewItem2["NoContact"] = "contacts.noContact";
      ViewItem2["RecentContacts"] = "contacts.RecentContacts";
      ViewItem2["NoSuggestedContacts"] = "contacts.NoSuggestedUsers";
      ViewItem2["NoRecentContacts"] = "contacts.NoRecentContacts";
      ViewItem2["InvitedContact"] = "contacts.invited";
      ViewItem2["SessionFeedbackQuestion"] = "help.sessionFeedback";
      ViewItem2["ReportAProblem"] = "help.reportAProblem";
      ViewItem2["TweetUsYourFeedback"] = "help.tweetUsYourFeedback";
      ViewItem2["Survey"] = "help.survey";
      ViewItem2["GoodFeedback"] = "help.goodFeedback";
      ViewItem2["BadFeedback"] = "help.badFeedback";
      ViewItem2["DontAskAgain"] = "help.dontAskAgain";
      ViewItem2["Thankyou"] = "help.thankyou";
      ViewItem2["MoreInfo"] = "help.moreinfo";
      ViewItem2["ConfigureSettings"] = "help.configureSettings";
      ViewItem2["Loading"] = "loading";
      ViewItem2["Other"] = "other";
    })(ViewItem = exports2.ViewItem || (exports2.ViewItem = {}));
    var ActivityType = class {
    };
    exports2.ActivityType = ActivityType;
    ActivityType.session = "session";
    ActivityType.workspace = "workspace";
    ActivityType.debug = "debug";
    ActivityType.terminal = "terminal";
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var vsls = __toESM(require_vscode());
async function activate(context) {
  const liveShare = await vsls.getApi();
  if (!liveShare) {
    console.log("Live Share API not available");
  }
  let extensionMode = await vscode.window.showInformationMessage("Select a HideShare mode", "real-time", "line", "word");
  console.log("Guest mode activated");
  const slightlyTransparentDecorationType = vscode.window.createTextEditorDecorationType({
    opacity: "0.5",
    fontStyle: "italic"
  });
  let lastActiveLine = -1;
  const changeModeLine = vscode.commands.registerCommand("hideshare.enableLineMode", () => {
    vscode.window.showInformationMessage("Changed to Line Mode!");
    extensionMode = "line";
  });
  context.subscriptions.push(changeModeLine);
  const changeModeWord = vscode.commands.registerCommand("hideshare.enableWordMode", () => {
    vscode.window.showInformationMessage("Changed to Word Mode!");
    extensionMode = "word";
  });
  context.subscriptions.push(changeModeWord);
  const changeModeRealTime = vscode.commands.registerCommand("hideshare.enableRealTimeMode", () => {
    vscode.window.showInformationMessage("Changed to Real-Time Mode!");
    extensionMode = "real-time";
  });
  const onDidChangeTextDocument = vscode.workspace.onDidChangeTextDocument(async (event) => {
    for (const editor of vscode.window.visibleTextEditors) {
      event.contentChanges.forEach((change) => {
        let line = change.range.start.line;
        if (extensionMode === "line") {
          hideLine(line, "line", editor, slightlyTransparentDecorationType);
        } else if (extensionMode === "word") {
          hideLine(line, "word", editor, slightlyTransparentDecorationType);
        }
      });
    }
  });
  context.subscriptions.push(onDidChangeTextDocument);
}
function hideLine(lineNumber, mode, editor, hiddenDecorationType) {
  let lineRange;
  if (mode === "line") {
    lineRange = editor.document.lineAt(lineNumber).range;
  } else {
    let startIndex = new vscode.Position(lineNumber, editor.document.lineAt(lineNumber).text.lastIndexOf(" "));
    lineRange = new vscode.Range(startIndex, editor.document.lineAt(lineNumber).range.end);
  }
  editor.setDecorations(hiddenDecorationType, [lineRange]);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map

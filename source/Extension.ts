import { IExtension } from "./interfaces/IExtension";
import { WindowOptions } from "./window/WindowOptions";
import { ChildWindow } from "./window/ChildWindow";
const electron = require("electron");
const remote = require("electron").remote;
const ipcRenderer = require("electron").ipcRenderer;
const clipboard = require("electron").clipboard;
const _uuid = require("uuid/v4");
const BrowserWindow = remote.BrowserWindow;

export class Extension {
    public openNewWindow(options: WindowOptions, fileUrl: string, messageEvent: any): ChildWindow {
        let top = remote.getCurrentWindow();
        let windowOptions = <any>{
            title: options.title, parent: top, modal: false,
            show: false, hasShadow: options.hasShadow, resizable: options.resizable, width: options.width, height: options.height,
            minimizable: options.minimizable,
        };
        let child = new BrowserWindow(windowOptions);
        let idx = _uuid();
        ipcRenderer.on(idx, function (event, msg) {
            messageEvent(msg);
        });

        fileUrl = fileUrl + "?id=" + idx;
        child.loadURL(fileUrl);
        let _window = <any>window;
        if (options.disableMainWindow) {
            _window.disable();
        }

        child.once("closed", () => {
            _window.enable();
            child = null;
        });
        if (options.showDevTools) {
            child.openDevTools();
        }
        let returnObject = new ChildWindow();
        returnObject.child = child;
        returnObject.id = idx;
        return returnObject;
    }

    public sendMessage(child, messageId, message) {
        child.webContents.send(messageId, message);
    }

    public showAlert(message: string) {
        alert(message);
    }

    public openURL(url: string) {
        electron.shell.openExternal(url);
    }

    public openNewTab(value: string) {
        let _window = <any>window;
        _window.activeDatabaseExplorer.createNewTab(null, false);
        if (value) {
            _window.activeEditor.setValue(value);
        }
    }

    public copyToClipboard(value: string) {
        clipboard.writeText(value);
    }
}

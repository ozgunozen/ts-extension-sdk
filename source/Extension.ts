import { IExtension } from "./interfaces/IExtension";
import { WindowOptions } from "./window/WindowOptions";
const electron = require("electron");
const remote = require("electron").remote;
const ipcRenderer = require("electron").ipcRenderer;
const _uuid = require("uuid/v4");
const BrowserWindow = remote.BrowserWindow;

export class Extension {
    public openNewWindow(options: WindowOptions, fileUrl: string, messageEvent: any, showDevTools: boolean) {
        let top = remote.getCurrentWindow();
        let windowOptions = <any>{
            title: options.title, parent: top, modal: false,
            show: false, hasShadow: true, resizable: true, width: options.width, height: options.height, minimizable: false,
        };
        let child = new BrowserWindow(windowOptions);
        let idx = _uuid();
        ipcRenderer.on("message-" + idx, function (event, msg) {
            messageEvent(msg);
        });

        fileUrl = fileUrl + "?id=" + idx;
        child.loadURL(fileUrl);
        let _window = <any>window;
        _window.disable();

        child.once("closed", () => {
            _window.enable();
            child = null;
        });
        if (showDevTools) {
            child.openDevTools();
        }

    }

    public showAlert(message: string) {
        alert(message);
    }

    public openURL(url: string) {
        electron.shell.openExternal(url);
    }
}

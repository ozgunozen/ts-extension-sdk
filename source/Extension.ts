import { IExtension } from "./interfaces/IExtension";
const electron = require("electron");
const remote = require("electron").remote;
const BrowserWindow = remote.BrowserWindow;

export class Extension implements IExtension {
    public openNewWindow(options, fileUrl, closedCallback, readyToShowCallback) {
        let top = remote.getCurrentWindow();
        let windowOptions = <any>{
            title: options.title, parent: top, modal: false,
            show: false, hasShadow: true, resizable: true, width: 800, height: 600, minimizable: false,
        };
        let child = new BrowserWindow(windowOptions);
        child.loadURL(fileUrl);
        let _window = <any>window;
        _window.disable();

        child.once("closed", () => {
            _window.enable();
            child = null;
            closedCallback();
        });

        child.once("ready-to-show", () => {
            child.show();
            readyToShowCallback();
        });
    }

    public showAlert(message: string) {
        alert(message);
    }

    public openURL(url: string) {
        electron.shell.openExternal(url);
    }
}

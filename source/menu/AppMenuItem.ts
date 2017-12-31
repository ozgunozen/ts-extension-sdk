import { IAppMenuItemAction } from "../interfaces/menu/IAppMenuItemAction";

export class AppMenuItem {
    public label: string;
    public submenu: Array<AppMenuItem>;
    public click: IAppMenuItemAction;

    constructor(label: string, submenu: Array<AppMenuItem>, click: IAppMenuItemAction) {
        this.label = label;
        this.submenu = submenu;
        this.click = click;
    }
}

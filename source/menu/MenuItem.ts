import { IMenuItemAction } from "../interfaces/menu/IMenuItemAction";

export class MenuItem {
    public label: string;
    public submenu: Array<MenuItem>;
    public click: IMenuItemAction;

    constructor(label: string, submenu: Array<MenuItem>, click: IMenuItemAction) {
        this.label = label;
        this.submenu = submenu;
        this.click = click;
    }
}

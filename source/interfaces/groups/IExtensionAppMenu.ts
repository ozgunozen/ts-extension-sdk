import { IExtension } from "../IExtension";
import { AppMenuItem } from "../../menu/AppMenuItem";

export interface IExtensionAppMenu extends IExtension {
    getMenu(): Array<AppMenuItem>;
}

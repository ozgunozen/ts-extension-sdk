import { IExtension } from "../IExtension";
import { MenuItem } from "../../menu/MenuItem";

export interface IExtensionContextMenu extends IExtension {
    getMenu(): Array<MenuItem>;
}

import { IExtension } from "../IExtension";
import { Theme } from "../../theme/Theme";

export interface IExtensionTheme extends IExtension {
    getTheme(): Theme;
}

import { IExtension } from "../IExtension";
import { Snippet } from "../../snippet/Snippet";

export interface IExtensionSnippet extends IExtension {
    getSnippets(databaseName: string, schemaName: string): Array<Snippet>;
}

import { IDatabaseElementProperties } from "./IDatabaseElementProperties";
import {
    IDatabaseElementAction,
    IDatabaseElementActionOptions,
    IDatabaseElementMenuItem,
} from "./IDatabaseElementActions";

export interface IDatabaseElement {
    id: string;
    parentId: string;
    childElementIds: Array<string>;
    name: string;
    connectionId: string;   // Target connection ID
    originalConnectionId: string;   // Target connection ID
    properties: IDatabaseElementProperties;
    connectionPath: Array<string>;
    adapterItem: any;
    type: string;
    connectionType: string;
    state: string;
    events: { [state: string]: { [event: string]: Array<IDatabaseElementAction> }};
    contextmenu: { [state: string]: Array<IDatabaseElementMenuItem> };
    subItems: Array<IDatabaseElement>;
    appearEventEnabledForSubItems: boolean;
    constructor(parentId: string, name: string, type: string);
}

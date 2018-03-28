import {IDatabaseElementProperties} from "./IDatabaseElementProperties";
import { IDatabaseElementAction,
         IDatabaseElementActionOptions,
         IDatabaseElementMenuItem } from "./IDatabaseElementActions";

export interface IDatabaseElement {
    id: string;
    name: string;
    connectionId: string;   // Target connection ID
    originalConnectionId: string;   // Target connection ID
    properties: IDatabaseElementProperties;
    path: Array<string>;
    adapterItem: any;
    type: string;
    connectionType: string;
    state: string;
    events: {[state: string]: {[event: string]: Array<IDatabaseElementAction>}};
    subItems: Array<IDatabaseElement>;
}

import {IDatabaseElement} from "./IDatabaseElement";

export interface IDatabaseElementNodeContainer {
    treeNode: any;
    databaseElement: IDatabaseElement;
    subNodes: Array<IDatabaseElementNodeContainer>;
}

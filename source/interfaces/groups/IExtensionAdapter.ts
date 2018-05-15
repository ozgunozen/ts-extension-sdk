import { IExtension } from "../IExtension";
import { IDatabaseResponse } from "../drivers/IDatabaseResponse";
import * as ts from "@teamsqlio/ts-data-layer-core";
import { IDatabaseElement } from "../drivers/IDatabaseElement";
import { IDatabaseElementAction } from "../drivers/IDatabaseElementActions";

export interface IExtensionAdapter extends IExtension {
    connectionInitiated: boolean;
    Init(config: ts.IConnectionConfig): void;
    Connect(element: IDatabaseElement, callback: (response: IDatabaseResponse) => void): void;
    Disconnect(element: IDatabaseElement, callback: (response: IDatabaseResponse) => void): void;
    ExecuteAction(actionEntity: IDatabaseElementAction, sourceObject: IDatabaseElement,
        callback: (response: IDatabaseResponse) => void): void;
    // Execute(query: string, statementCallback: (dataTable: Array<ts.IDataSet>) => void,
    //     completedCallback: (completed: boolean) => void, multistatemenSupport?: boolean): void;
    // ExecuteWithTransaction?(query: string,
    //     statementCallback: (dataTable: Array<ts.IDataSet>) => void,
    //     completedCallback: (completed: boolean) => void, multistatemenSupport?: boolean): void;
    Kill?(callback: (success: boolean) => void): void;
    Validate?(callback: (err: ts.IConnectionError) => void): void;
}

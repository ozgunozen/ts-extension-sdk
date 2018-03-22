import { IExtension } from "../IExtension";
import { IConnectionConfig } from "../datalayer/IConnectionConfig";
import { IConnectionError } from "../datalayer/IConnectionError";

export interface IExtensionAdapter extends IExtension {
    Init(config: IConnectionConfig): void;
    Connect(callback: (err: IConnectionError) => void): void;
    Disconnect(callback: (err: IConnectionError) => void): void;
    Execute(query: string, statementCallback: (dataTable: Array<any>) => void,
        completedCallback: (completed: boolean) => void, multistatemenSupport?: boolean): void;
    ExecuteWithTransaction?(query: string,
        statementCallback: (dataTable: Array<any>) => void,
        completedCallback: (completed: boolean) => void, multistatemenSupport?: boolean): void;
    Kill?(callback: (success: boolean) => void): void;
    Validate?(callback: (err: IConnectionError) => void): void;
}

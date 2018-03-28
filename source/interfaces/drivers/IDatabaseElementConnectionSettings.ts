import {IDatabaseElementConnectionParameters} from "./IDatabaseElementConnectionParameters";
import {IDatabaseElementConnectionCredentials} from "./IDatabaseElementConnectionCredentials";

export interface IDatabaseElementConnectionSettings {
    isProductionServer: boolean;
    sshSettings: any;
    parameters: IDatabaseElementConnectionParameters;
    credentials: IDatabaseElementConnectionCredentials;
}

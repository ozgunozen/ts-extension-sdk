import {IDatabaseElementConnectionSettings} from "./IDatabaseElementConnectionSettings";

export interface IDatabaseElementProperties {
    connectable: boolean;
    connectionSettings: IDatabaseElementConnectionSettings;
}

import { IConnectionSSLConfig } from "./IConnectionSSLConfig";

export interface IConnectionConfig {
    Host: string;
    Username?: string;
    Password: string;
    Port: number;
    Database: string | number;
    ConnectTimeout?: number;
    RequestTimeout?: number;
    Additional: any;
    SSLConfiguration: IConnectionSSLConfig;
    MultipStatementSupport: boolean;
}

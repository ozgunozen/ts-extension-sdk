import { IDatabaseResponseAction } from "./IDatabaseResponseAction";

export interface IDatabaseResponse {
    response: any;
    error: any;
    responseActions: Array<IDatabaseResponseAction>;
}

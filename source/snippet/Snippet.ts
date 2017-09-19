import { DatabaseType } from "../enums/DatabaseType";
export class Snippet {
    public label: string;
    public readonly kind: number;
    public documentation: string;
    public insertText: string;
    public readonly dbType: string;

    constructor(dbType: DatabaseType, label: string, insertText: string, documentation: string) {
        switch (dbType) {
            case DatabaseType.GENERIC:
                this.dbType = "generic";
                break;
            case DatabaseType.MYSQL:
                this.dbType = "mysql";
                break;
            case DatabaseType.POSTGRES:
                this.dbType = "pg";
                break;
            case DatabaseType.MSSQL:
                this.dbType = "mssql";
                break;
            case DatabaseType.REDSHIFT:
                this.dbType = "redshift";
                break;
            case DatabaseType.REDIS:
                this.dbType = "redis";
                break;
            default:
                this.dbType = "generic";
                break;
        }
        this.label = label;
        this.kind = 14;
        this.insertText = insertText;
        this.documentation = documentation;
    }
}

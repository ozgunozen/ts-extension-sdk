declare module tsdatalayer {
    interface IDataSet {
        Query: string;
        Rows?: Array<IDataRow>;
        Columns?: Array<IDataColumn>;
        AffectedRows?: number;
        Message?: string;
        ElapsedTime: number;
        Type: QueryResultType;
        Error?: IDataError;
    }

    interface IDataRow {
        Fields: Array<IField>;
    }

    interface IDataColumn {
        Name: string;
        DataTypeId: any;
        DataTypeGroupID: DataTypeGroup;
    }

    enum DataTypeGroup {
        NUMBER = 1,
        STRING = 2,
        BOOLEAN = 3,
        DATE = 4,
        UNKNOWN = 99,
    }

    interface IField {
        Name: string;
        Value: any;
        OriginalValue: any;
    }

    enum QueryResultType {
        ROW_SET = 1,
        RESULT = 2,
        ERROR = 3,
    }

    interface IDataError {
        Code: string;
        Message: string;
        Stack: string;
    }
}
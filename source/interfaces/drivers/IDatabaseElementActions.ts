export interface IDatabaseElementStateEvents {
    stateName: string;
    events: {[key: string]: Array<IDatabaseElementAction>};

}

export interface IDatabaseElementAction {
    actionType: string;
    options: IDatabaseElementActionOptions;
    parameters: any;
}

export interface IDatabaseElementMenuItem extends IDatabaseElementAction {
    label: string;
    subitems: Array<IDatabaseElementMenuItem>;
    click: Array<IDatabaseElementAction>;
}

export interface IDatabaseElementActionOptions {
    activityIndicatorDisplayed: boolean;
    connectionValidationRequired: boolean;
    reconnectOnInvalidation: boolean;
}


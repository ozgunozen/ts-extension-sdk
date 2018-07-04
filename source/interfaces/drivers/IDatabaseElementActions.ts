export interface IDatabaseElementAction {
    actionType: string;
    progressState: string; // Elements state will be switched to the progress state while the action is being executed.
    options: IDatabaseElementActionOptions;
    parameters: any;
}

export interface IDatabaseElementMenuItem {
    label: string;
    subitems: Array<IDatabaseElementMenuItem>;
    click: Array<IDatabaseElementAction>;
    type: string;
}

export interface IDatabaseElementActionOptions {
    activityIndicatorDisplayed: boolean;
    connectionValidationRequired: boolean;
    reconnectOnInvalidation: boolean;
}
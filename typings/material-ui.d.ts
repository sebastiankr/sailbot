/// <reference path="react/react.d.ts" />

declare module __mui {

    interface ITodo {
        description: string;
    }

    interface ITodoItemState { }

    interface IRaisedButtonProps {
        label: string;
        key?: number; // I think this prop is unnecessary, but unless it an error occurs in tsc.
    }
    class RaisedButton extends __React.Component<IRaisedButtonProps, ITodoItemState> {
        render(): __React.ReactElement<any>;
    }

}

declare module "material-ui" {
    export = __mui;
}


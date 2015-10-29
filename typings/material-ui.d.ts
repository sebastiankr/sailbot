/// <reference path="react/react.d.ts" />

declare module __mui {
    import React = __React;
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

    interface IAppBarProps {
        title: string;
        iconClassNameRight?: string;
        onLeftIconButtonTouchTap?: any;
        isInitiallyOpen?: boolean;
    }

    class AppBar extends __React.Component<IAppBarProps, ITodoItemState> {
        render(): __React.ReactElement<any>;
    }

    interface ILeftNavProps {
        ref: string;
        iconClassNameRight?: string;
        docked?: boolean;
        menuItems?: any;
    }

    class LeftNav extends __React.Component<ILeftNavProps, ITodoItemState> {
        render(): __React.ReactElement<any>;
    }

    interface IMenuItemProps {
        ref: string;
        iconClassNameRight?: string;
        
    }

    class MenuItem extends __React.Component<IMenuItemProps, ITodoItemState> {
        render(): __React.ReactElement<any>;
    }
    

}

declare module "material-ui" {
    export = __mui;
}


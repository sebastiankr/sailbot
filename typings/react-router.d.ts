///<reference path='./react/react.d.ts' />

declare module ReactRouter {
    import React = __React;

	interface IRouterProps {
        history?: any;

    }

    class Router extends React.Component<IRouterProps, any> {
        render(): __React.ReactElement<any>;
    }
}
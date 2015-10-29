/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

export interface ILoginProps { }

export class Login extends React.Component<ILoginProps, any> {
    constructor() {
        super();
    }
    
    render() {
        return (
            <p>Login</p>
        );
    }
}
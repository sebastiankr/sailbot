
/// <reference path="../../typings/react/react.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Main} from './main';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

(window as any).React = React;
 
ReactDOM.render(React.createElement(Main), document.getElementById('reactapp'));

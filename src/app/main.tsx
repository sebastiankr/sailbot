/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {TodoItem} from './todoItem';
import {RaisedButton} from 'material-ui';
//import {Polymer} from 'polymerr';

declare namespace JSX {
    interface IntrinsicElements {
        foo: any;
    }
}

interface ITodo {
    description: string;
    key: number;
}

export interface IMainState {
    newItem?: {
        description: string;
    };
    todoList?: ITodo[];
}

export interface IMainProps {}

export class Main extends React.Component<IMainProps, IMainState> {
    state: IMainState = {newItem: {description: ''}, todoList: []};

    constructor () {
        super();
        this.changeName = this.changeName.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    changeName (e: any) {
        this.setState({
            newItem: {
                description: e.target.value
            }
        });
    }

    addItem () {
        var list = this.state.todoList;
        list.push({
            description: this.state.newItem.description,
            key: new Date().getTime()
        });
        this.setState({
            todoList: list,
            newItem: {description: ''}
        });
    }

    removeItem (item: ITodo) {
        var list = this.state.todoList.filter(i => i.key !== item.key);
        this.setState({todoList: list});
    }

    render () {
        var todoItems = this.state.todoList.map(item => {
            return <TodoItem key={item.key} item={item} onRemove={this.removeItem} ></TodoItem>;
        });
        return (
            
            <div>
         
               <paper-drawer-panel>
  <div data-drawer> Drawer panel... </div>
  <div data-main> xvxdf </div>
</paper-drawer-panel>
    
            </div>
        );
    }
}
                // <div classNameName="layout horizontal wrap">
                //     <input type="text" placeholder="input new item" value={this.state.newItem.description} onChange={this.changeName} />
                //     <button onClick={this.addItem} >add</button>
                //      <RaisedButton label="Super Secret Password" />
                //      <paper-material elevation="1">inside</paper-material>
                // </div>
                // <ul>{todoItems}</ul>


//  


//     <paper-drawer-panel id="paperDrawerPanel">
     
//       <paper-scroll-header-panel drawer fixed>


//         <paper-toolbar id="drawerToolbar">
//           <span className="paper-font-title">Menu</span>
//         </paper-toolbar>

//         <paper-menu className="list" attr-for-selected="data-route" selected="[[route]]">
//           <a data-route="home" href="/" on-click="onDataRouteClick">
//             <iron-icon icon="home"></iron-icon>
//             <span>Home</span>
//           </a>

//           <a data-route="users" href="/users" on-click="onDataRouteClick">
//             <iron-icon icon="info"></iron-icon>
//             <span>Users</span>
//           </a>

//           <a data-route="contact" href="/contact" on-click="onDataRouteClick">
//             <iron-icon icon="mail"></iron-icon>
//             <span>Contact</span>
//           </a>
//         </paper-menu>
//       </paper-scroll-header-panel>

//       <paper-scroll-header-panel main condenses keep-condensed-header>


//         <paper-toolbar id="mainToolbar" classNameName="tall">
//           <paper-icon-button id="paperToggle" icon="menu" paper-drawer-toggle></paper-icon-button>
//           <span className="flex"></span>


//           <paper-icon-button icon="refresh"></paper-icon-button>
//           <paper-icon-button icon="search"></paper-icon-button>

    
//           <div className="middle middle-container center horizontal layout">
//             <div className="app-name">Polymer Starter Kit</div>
//           </div>

     
//           <div className="bottom bottom-container center horizontal layout">
//             <div className="bottom-title paper-font-subhead">The future of the web today</div>
//           </div>

//         </paper-toolbar>

   
//         <div className="content">
        
//           <p>test</p>
          
//         </div>
//       </paper-scroll-header-panel>
//     </paper-drawer-panel>
        
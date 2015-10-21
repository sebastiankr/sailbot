/// <reference path="../../../typings/react/react.d.ts" />

import * as React from "react";

interface Props {
  name: string;
}

export class MyComponent extends React.Component<Props, any> {
  private foo:number;
  constructor(props:Props) {
    super(props);
    this.foo = 42;
  }
  render() {
    return (
      <div>Hello world!</div>
    );
  }
}

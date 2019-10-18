import * as React from 'react';

export interface HelloProps { test: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>Hello from {this.props.test}</div>
    }
}

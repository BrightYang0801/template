import React, { Component } from 'react';
import { Spin } from 'antd'
import Loadable from 'react-loadable';

class Tip extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        window.location.reload()
    }
    render() {
        return (
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><Spin size="large" /></div>
        );
    }
}


const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><Spin size="large" /></div>;
    }
    else if (error) {
        return <Tip />;
    }
    else {
        return <Tip />;
    }
};

export default function LoadableComponent(callback) {
    return Loadable({
        loader: () => callback(),
        loading: MyLoadingComponent
    });
}
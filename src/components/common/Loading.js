import React, { Component } from 'react';
import { Spin } from 'antd'

export default class Loading extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}><Spin size="large" /></div>
        );
    }
}
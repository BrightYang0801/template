import { Button } from 'antd';
import React, { Component } from 'react';

/**
  标签按钮
 * @param text 按钮文字
  *@param loading 布尔值 是否加载
  @style 样式
  @onClick 点击函数
  @active 布尔值 是否当前活跃
 */

export default class CustomeButtonThird extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: props.loading,
            active: props.active
        }
    }
    static defaultProps = {
        height: 38,
        padding: '0 21px',
        active: false

    }
    componentWillReceiveProps(props) {
        this.setState({
            loading: props.loading,
            active: props.active
        })
    }

    render() {
        const { text, style = {}, height, padding, active, ...rest } = this.props
        return (
            <div className={this.state.active ? 'custome-button-third custome-button-third-active' : 'custome-button-third'}>
                <Button
                    {...rest}
                    style={Object.assign({ height: height, lineHeight: `${height}px`, padding: padding }, style)}>{this.props.children}<span>{text}</span></Button>
            </div>
        );
    }
}

/**
 * 登陆成功（已经安全认证）的路由守卫
 * 如果未登录，跳到登录页，如果已登录，跳到相应页
 */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';

// 路由拦截思路: 初始一个false状态，在接口数据返回后变为true
class PrivateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            isLogin: false
        }
    }

    async componentDidMount() {
        if (localStorage.getItem('isLogin') === "true") {
            this.setState({
                show: true,
                isLogin: true
            })
        } else {
            this.setState({
                show: true,
                isLogin: false
            })
            localStorage.setItem('isLogin', false)
        }
    }

    componentWillUnmount() {
        this.setState = () => {
            return;
        }
    }

    render() {
        const { component: Component, ...rest } = this.props;
        return (
            <div>
                {
                    this.state.show ? (
                        <Route
                            {...rest}
                            render={props =>
                                this.state.isLogin ? (
                                    <Component {...props} />
                                ) : (
                                        <Redirect
                                            to={{
                                                pathname: "/",
                                                state: { from: props.location }
                                            }}
                                        />
                                    )
                            }
                        />
                    ) : (
                            <div className="out-spin">
                                <Spin size="large" />
                            </div>
                        )
                }
            </div>
        )
    }
}
export default PrivateRoute
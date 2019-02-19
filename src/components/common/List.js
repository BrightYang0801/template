import React, { Component } from 'react';
import { Table, } from 'antd'


export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: props.list,
            total: props.total || 0,
            page: props.page,
            size: 10,
        }
    }
    componentWillReceiveProps(props) {
        this.setState({
            list: props.list,
            filter: false,
            total: props.total || 0,
            size: 10,
            page: props.page,
            loading: props.listLoading,
            selectData: props.selectData,

        })
    }
    render() {
        const { columns = [] } = this.props
        return (
            <div>
                <div>
                    <Table
                        rowKey={(record, index) => index}
                        dataSource={this.state.list}
                        pagination={false}
                        loading={this.state.loading}
                        columns={columns.filter(element => { return element !== false })}
                    />
                </div>

            </div>

        );
    }
}

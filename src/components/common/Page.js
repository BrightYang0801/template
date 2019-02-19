
import React, { Component } from 'react';
import { Icon } from 'antd'
export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usableNext: this.props.usableNext,    //下一页可用
      usablePrev: this.props.usablePrev    //上一页可用
    }
  }

  //下一页
  next = () => {
    if (!this.state.usableNext) return;
    this.props.onNextChange();
  }

  //上一页
  prev = () => {
    if (!this.state.usablePrev) return;
    this.props.onPrevChange();
  }
  componentWillReceiveProps(props) {
    this.setState({
      usableNext: props.usableNext,    //下一页可用
      usablePrev: props.usablePrev    //上一页可用
    })
  }

  render() {
    const { style = {} } = this.props;
    return (
      <ul className='ink-pagination'>
        <li className={this.state.usablePrev ? 'ink-pagination-pre' : "ink-pagination-pre ink-pagination-diabled"}>
          <span
            className="ink-pagination-item-link"
            onClick={this.prev}
            style={style}
          >
            <Icon type="left" style={{ color: this.state.usablePrev ? 'rgba(0, 0, 0, 0.65)' : '#d9d9d9',fontSize:12 }} />
          </span>
        </li>
        <li className={this.state.usableNext ? 'ink-pagination-next' : 'ink-pagination-next ink-pagination-diabled'}>
          <span
            className="ink-pagination-item-link"
            onClick={this.next}
            style={style}
          >
            <Icon type="right" style={{ color: this.state.usableNext ? 'rgba(0, 0, 0, 0.65)' : '#d9d9d9',fontSize:12 }} />
          </span>
        </li>
      </ul>
    )
  }
}
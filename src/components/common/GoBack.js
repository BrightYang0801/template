import React, { Component, createElement } from 'react';
import { withRouter } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp';
import { Breadcrumb } from 'antd'
import { ROUTERLIST } from '../../Utils/CONST'


export function urlToList(url) {
    const urllist = url.split('/').filter(i => i);
    return urllist.map((urlItem, index) => {
        return `/${urllist.slice(0, index + 1).join('/')}`;
    });
}
export function getBreadcrumb(breadcrumbNameMap, url, props) {
    let breadcrumb = breadcrumbNameMap[url];
    if (!breadcrumb) {
        Object.keys(breadcrumbNameMap).forEach(item => {
            if (pathToRegexp(item).test(url)) {
                breadcrumb = breadcrumbNameMap[item];
            }
        });
    }
    return breadcrumb || {};
}

export default withRouter(class GoBack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parent: props.location
        }
    }
    //将参数转化为面包屑
    conversionFromLocation = (routerLocation, breadcrumbNameMap) => {
        const { breadcrumbSeparator, linkElement = 'a', } = this.state.parent;
        const pathSnippets = urlToList(routerLocation.pathname);
        let extraBreadcrumbItems = pathSnippets.map((url, index) => {
            const currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url, this.props.location);
            const isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.title
            return currentBreadcrumb.title ? (
                <Breadcrumb.Item key={url}>
                    {createElement(
                        isLinkable ? linkElement : 'span',
                        { [linkElement === 'a' ? 'href' : 'to']: url },
                        currentBreadcrumb.title
                    )}
                </Breadcrumb.Item>
            ) : null;
        });
        extraBreadcrumbItems.unshift(
            <Breadcrumb.Item key="home">
                <span style={{ cursor: 'pointer' }} onClick={() => this.props.history.goBack()}>{'<'} &nbsp;返回</span>
            </Breadcrumb.Item>
        );
        return (
            <Breadcrumb separator={breadcrumbSeparator} className='bread'>
                {extraBreadcrumbItems}
            </Breadcrumb>
        );
    };
    render() {
        const { location, style } = this.props;
        return (

            <div className='back-prev'>
                <div className='goBack'>
                    {this.conversionFromLocation(location, ROUTERLIST)}
                </div>
            </div >

        );
    }
})
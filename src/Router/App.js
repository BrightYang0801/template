import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, } from 'react-router-dom'

import { LocaleProvider } from 'antd';
import intl from "react-intl-universal";
import IntlPolyfill from "intl";

import LoadableComponent from '../components/common/LoadableComponent'



//universal国际化文件
const intl_locales = {
    "en-US": require("../locale/en-US.json"),
    "zh-CN": require("../locale/zh-CN.json"),
};

//antd国际化文件
const antd_locales = {
    "en-US": require("antd/lib/locale-provider/en_US"),
    "zh-CN": require("antd/lib/locale-provider/zh_CN"),
};
// For Node.js, common locales should be added in the application
global.Intl = IntlPolyfill;
require("intl/locale-data/jsonp/en.js");
require("intl/locale-data/jsonp/zh.js");
require("intl/locale-data/jsonp/ko.js");
require("intl/locale-data/jsonp/ja.js");


//按需加载组件
const Home = LoadableComponent(() => import('../pages/Home/Home'))
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lang: this.getLang()
        }
    }


    //获取语言
    getLang = () => {
        let lang = window.navigator.language;
        switch (lang) {
            case 'zh-CN':
            case 'zh': lang = 'zh-CN'; break;
            case 'en-US': lang = 'en-US'; break;
            default: lang = 'zh-CN'; break;
        }
        this.loadLocales(lang)
        return lang
    }
    loadLocales = (lang) => {
        const currentLocale = intl_locales[lang];
        intl.init({
            currentLocale: lang, // TODO: determine locale here
            locales: {
                [lang]: currentLocale
            }
        })
    };

    render() {
        const locale = antd_locales[this.state.lang];
        return (
            <LocaleProvider locale={locale}>
                <Router>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Redirect from='/*' to='/home' />
                    </Switch>
                </Router>
            </LocaleProvider>
        )
    }
}


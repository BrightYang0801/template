import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './mobx/store';
import registerServiceWorker from './registerServiceWorker';
import App from './Router/App'

import 'antd/dist/antd.css'
import './index.less';
import 'quill/dist/quill.snow.css';


ReactDOM.render(<Provider {...store}><App /></Provider>, document.getElementById('root'));
// unregister()  
registerServiceWorker()  

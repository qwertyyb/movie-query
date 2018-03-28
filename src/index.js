import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom'
import './index.less';
import Index from './pages/index/index';
import Detail from './pages/detail/detail.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <React.Fragment>
      <Route exact path="/" component={Index} />
      <Route path="/detail/:id" component={Detail} />
    </React.Fragment>
  </HashRouter>), document.getElementById('root'));
registerServiceWorker();

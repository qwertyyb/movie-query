import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom'
import './index.less';
import Index from './pages/index/index';
import Detail from './pages/detail/detail.jsx'
import Top250 from './pages/top250/'
import CityPicker from './pages/citypicker/'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <React.Fragment>
      <Route exact path="/" component={Index} />
      <Route exact path="/top250" component={Top250} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/citypicker" component={CityPicker} />
    </React.Fragment>
  </HashRouter>), document.getElementById('root'));
registerServiceWorker();

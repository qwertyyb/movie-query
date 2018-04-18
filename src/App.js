import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './index.less';
import Index from './pages/index/index';
import Detail from './pages/detail/detail.jsx'
import Top250 from './pages/top250/'
import CityPicker from './pages/citypicker/'


export default class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <React.Fragment>
          <Route exact path="/" component={Index} />
          <Route exact path="/top250" component={Top250} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/citypicker" component={CityPicker} />
        </React.Fragment>
      </HashRouter>)
  }
}

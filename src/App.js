import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.less';
import AppProvider from './AppProvider'
import ThemeProvider from './ThemeProvider'
import Index from './pages/index/index';
import Detail from './pages/detail/detail'
import Top250 from './pages/top250/'
import CityPicker from './pages/citypicker/'

export default () => {
  return (
    <AppProvider>
      <ThemeProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/top250" component={Top250} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/citypicker" component={CityPicker} />
            <Route path="/" component={Index} />
          </Switch>
        </HashRouter>
      </ThemeProvider>
    </AppProvider>
  )
}

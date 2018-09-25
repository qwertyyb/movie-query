import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './index.less';
import TabBar from '../../components/TabBar'
import SearchPanel from './SearchPanel'
import NavigationBar from '../../components/Navigation';
import MovieTab from './MoviePanel';
import Drawer from '../../components/Drawer'

const tabs = [
  {
    iconClass: 'fa fa-video-camera',
    text: '影讯',
    link: '/',
  },
  {
    iconClass: 'fa fa-ravelry',
    text: '热门',
    link: '/hot'
  }
]


/* global sessionStorage */
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.toggleDrawer = this.toggleDrawer.bind(this)
  }
  state = {
    drawerVisible: false,
  }
  toggleDrawer() {
    console.log('clicked')
    this.setState(({ drawerVisible }) => ({
      drawerVisible: !drawerVisible
    }))
  }
  render() {
    return (
      <div className="index">
        <Drawer visible={this.state.drawerVisible}
          onClick={() => this.toggleDrawer()}
        />
        <NavigationBar title="影讯" left={<i className="fa fa-navicon" onClick={this.toggleDrawer}></i>} right={null} />
        <div className="tab-panel-container">
          <Switch>
            <Route path="/" exact component={MovieTab} />
            <Route path="/hot" component={SearchPanel} />
          </Switch>
        </div>
        <div className="tab-wrapper">
          <TabBar tabs={tabs}/>
        </div>
      </div>
    );
  }
}

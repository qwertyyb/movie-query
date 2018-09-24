import React from 'react'
import './tabbar.less'

export default class TabBar extends React.Component {
  getTabClassName(tab, index) {
    const { curTabIndex } = this.props
    return curTabIndex === index ? 'tab-item actived' : 'tab-item'
  }
  render() {
    const { tabs, onTabClick } = this.props
    return (
      <div className="tabbar">
        {tabs.map((tab, index) => <div className={this.getTabClassName(tab, index)} onClick={() => onTabClick(tab, index, tabs)} key={tab.text}>
          <i className={'tab-item__img ' + tab.iconClass} />
          <h3 className="tab-item__title">{tab.text}</h3>
        </div>)}
      </div>
    )
  }
}
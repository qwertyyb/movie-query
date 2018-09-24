import React from 'react'
import './navigation.less'

class NavigationBar extends React.Component {
  routeBack() {
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="navigation-bar">
        <i className="icon-back fa fa-arrow-left" onClick={() => this.routeBack()}></i>
        <h2 className="navigation-bar__title">{this.props.title}</h2>
      </div>
    )
  }
}

export default NavigationBar
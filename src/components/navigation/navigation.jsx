import React from 'react'
import './navigation.less'
import PropTypes from 'prop-types'

class NavigationBar extends React.Component {
  routeBack() {
    this.context.router.history.goBack()
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
NavigationBar.contextTypes = {
  router: PropTypes.object.isRequired
}

export default NavigationBar
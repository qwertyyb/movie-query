import React from 'react'
import styled from 'styled-components'

const StyledNavigationBar = styled.div`
  padding: 5px 10px;
  height: 46px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  font-size: 14px;
  border-bottom: 1px solid #ededed;
  .navigation-bar__left, .navigation-bar__right {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
  i {
    font-size: 18px;
    margin-right: 6px;
  }
`

class NavigationBar extends React.Component {
  routeBack() {
    this.props.history.goBack()
  }
  render() {
    const { left, right } = this.props
    const defaultLeft = <i className="icon-back fa fa-arrow-left" onClick={() => this.routeBack()}></i>
    const defaultRight = <i className="icon-back fa fa-navicon"></i>
    return (
      <StyledNavigationBar>
        <div className="navigation-bar__left">
          {left !== undefined ? left : defaultLeft}
        </div>
        <h2 className="navigation-bar__title">{this.props.title}</h2>
        <div className="navigation-bar__right">
          {right !== undefined ? right : defaultRight}
        </div>
      </StyledNavigationBar>
    )
  }
}

export default NavigationBar
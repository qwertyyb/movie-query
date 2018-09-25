import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledTabBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #ccc;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: center;
  & .actived * {
    color: ${({theme}) => theme.color};
  }
  & .tab-item__img {
    font-size: 24px;
  }
  & .tab-item__title {
    margin: 2px;
    font-weight: normal;
    font-size: 12px;
    color: #666;
  }
`
export default ({ tabs }) => (
  <StyledTabBar className="tabbar">
    {tabs.map(tab => <NavLink activeClassName="actived" exact to={tab.link} key={tab.text}>
      <i className={'tab-item__img ' + tab.iconClass} />
      <h3 className="tab-item__title">{tab.text}</h3>
    </NavLink>)}
  </StyledTabBar>
)
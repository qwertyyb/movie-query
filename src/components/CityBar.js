import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CityBar = (props) => {
  const { city, tabs, onTabClick, curTabIndex } = props
  return (
    <div className={props.className}>
      <Link to="/citypicker" className="city-area">
        {city}&nbsp;&nbsp;
        <i className="fa fa-caret-down"/>
      </Link>
      <div className="tabs">
        {tabs.map((tab, index) => (
            <div onClick={()=>onTabClick(tab, index)}
              key={tab.text}
              className={`tab-item ${index === curTabIndex ? 'active' : ''}`}
            >{tab.text}</div>
          )
        )}
      </div>
    </div>
  )
}

const StyledCityBar = styled(CityBar)`
  display: flex;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  .tabs {
    display: flex;
    height: 100%;
  }
  .tab-item + .tab-item {
    margin-left: 30px;
  }
  .tab-item {
    position: relative;
    height: 100%;
    line-height: 40px;
    box-sizing: border-box;
    &.active {
      border-bottom: 4px solid ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.color};
    }
  }
`
export default StyledCityBar
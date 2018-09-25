import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const SearchPanel = (props) => (
  <div className={props.className}>
    <div className="tag-content">
      <Link to='/top250' className="tag">Top250</Link>
      <h4 className="tag">口碑榜</h4>
      <h4 className="tag">北美票房榜</h4>
      <h4 className="tag">新片榜</h4>
    </div>
    <div className="input-content">
      <input type="text" name="search"/>
      <i className="icon-search fa fa-search"></i>
    </div>
  </div>
)

const StyledSearchPanel = styled(SearchPanel)`
  min-height: calc(100vh - 96px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .tag-content {
    display: flex;
    justify-content: space-around;
    .tag {
      border-radius: 3px;
      border: 1px solid #000;
      padding: 3px 6px;
      font-weight: bold;
    }
  }
  .input-content {
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px;
    input {
      font-size: 24px;
      padding: 5px;
      width: 70vw;
      max-width: 300px;
    }
    .icon-search {
      font-size: 30px;
    }
  }
`
export default StyledSearchPanel

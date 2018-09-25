import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Input from '../../components/Input'
import Tag from '../../components/Tag'

const SearchPanel = (props) => (
  <div className={props.className}>
    <div className="tag-content">
      <Link to='/top250' className="tag">
        <Tag>TOP250</Tag>
      </Link>
      <Tag>口碑榜</Tag>
      <Tag>北美票房榜</Tag>
      <Tag>新片榜</Tag>
    </div>
    <Input suffixIcon="search" style={{margin: '20px auto'}} />
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
  }
`
export default StyledSearchPanel

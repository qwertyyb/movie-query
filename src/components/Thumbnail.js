import React from 'react'
import styled from 'styled-components'
import RateStar from './Rate'

const StyledThumbNail = styled.div`
  max-width: 200px;
  text-align: center;
  display: inline-block;
  & .thumbnail-img-content {
    position: relative;
    padding-bottom: 140%;
    height: 0;
    overflow: hidden;
  }
  & .thumbnail-img {
    max-width: 100%;
  }
  & .thumbnail-title {
    margin: 5px 0;
    font-weight: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
  }
  & .thumbnail-rate {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .thumbnail-date {
    color: #999;
    font-size: 14px;
  }
`
export default ({ img, title, rate, date }) => (
  <StyledThumbNail>
    <div className="thumbnail-img-content">
  <img src={img} alt={title} className="thumbnail-img"/>
    </div>
    <h3 className="thumbnail-title">{title}</h3>
    <div className="thumbnail-rate">
      <RateStar rate={rate} />
    </div>
    <div className="thumbnail-date">
      {date.length <= 0 ? '暂无上映日期' : date + '上映'}
    </div>
  </StyledThumbNail>
)

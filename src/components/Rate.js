import React from 'react'
import styled from 'styled-components'
import starImage from '../assets/images/ic_rating_s.png'

function getStars(rate) {
  const intPart = parseInt(rate / 2, 10)
  const pointPart = (rate / 2 - intPart) > 0.2 ? 0.5 : 0
  return (intPart + pointPart) * 10
}

const Stars = styled.span`
  display: inline-block;
  width: 55px;
  height: 11px;
  background-image: url(${starImage});
  background-position: 0 ${props => (props.stars - 50) / 5 * 11}px
`
const Text = styled.span`
  margin-left: 10px;
  color: #e09015;
  font-size: 12px;
`

export default ({ rate }) => (
  <React.Fragment>
    {rate ? <Stars stars={getStars(rate)}/> : null}
    <Text>{rate || '暂无评分'}</Text>
  </React.Fragment>
)

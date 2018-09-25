import React from 'react'
import styled from 'styled-components'

const StyledSpin = styled.div`
  text-align: center;
  margin-top: 100px;
  & i {
    font-size: 36px;
  }
`
export default ({ loadText }) => (
  <StyledSpin>
    <i className="fa fa-pulse fa-spinner" /><br /><br />
    <p className="loading-text">{ loadText }</p>
  </StyledSpin>
)
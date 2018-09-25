import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  border-radius: 3px;
  width: 300px;
  height: 48px;
  border: 1px solid #bbb;
  border-radius: 3px;
  padding: 0 5px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  transition: border .2s;
  &:hover {
    border: 1px solid ${props => props.theme.color};
  }
  & i {
    font-size: 28px;
    color: #666;
  }
`
const InputInner = styled.input`
  padding: 0;
  width: 100%;
  height: 100%;
  flex: 1;
`

export default ({ prefixIcon, suffixIcon, style, className, ...attrs }) => {
  return (
    <InputContainer style={style} className={className}>
      {prefixIcon && <i className={`fa fa-${prefixIcon}`} />}
      <InputInner {...attrs} />
      {suffixIcon && <i className={`fa fa-${suffixIcon}`} />}
    </InputContainer>
  )
}
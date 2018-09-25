import styled from 'styled-components'

const Tag = styled.div`
  display: inline-block;
  background: ${props => props.theme.color};
  color: #fff;
  padding: 5px 8px;
  border-radius: 4px;
`

export default Tag

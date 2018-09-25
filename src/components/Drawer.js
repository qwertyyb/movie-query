import React from 'react'
import styled from 'styled-components'

const Mask = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: ${props => props.visible ? '0' : '-100vw'};
  background: rgba(128, 128, 128, 0.5);
`
const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.visible ? '0' : '-100vw'};
  z-index: 10;
  width: 80vw;
  height: 100%;
  overflow: scroll;
  background: #fff;
  padding: 15px 0;
  box-sizing: border-box;
  transition: left .4s;
`

const Drawer = (props) => (
  <Mask {...props}>
    <DrawerContainer visible={props.visible}>页面建设中</DrawerContainer>
  </Mask>
)

export default Drawer
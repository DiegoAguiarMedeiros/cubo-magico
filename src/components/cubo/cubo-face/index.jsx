import styled from "styled-components"

export const CuboFace = styled.div`
background-color: ${({theme}) => theme.body};
height: 152px;
width: 152px;
border:1px solid ${({ theme }) => theme.cuboBorda};
vertical-align: top;
`
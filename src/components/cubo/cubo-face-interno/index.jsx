import React from 'react';
import styled from "styled-components"
import { CuboPeca } from './cubo-peca'

const CuboFaceInterno = styled.div`
background-color: ${({ theme }) => theme.body};
min-height: 100%;
max-height: 100%;
min-width: 100%;
max-width: 100%;
display: flex;
flex-flow: row wrap;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <CuboFaceInterno>
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
            <CuboPeca />
        </CuboFaceInterno>
    )
}
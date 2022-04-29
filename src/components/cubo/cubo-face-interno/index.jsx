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

const Peca = styled(CuboPeca)`
border:1px solid ${({ theme }) => theme.cuboBorda};
`

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    return (
        <CuboFaceInterno>
            {
                props.face.map((peca) => {
                    let position = 0;
                    if (peca > 9 && peca < 19) {
                        position = 1;
                    } else if (peca > 18 && peca < 28) {
                        position = 2;

                    } else if (peca > 27 && peca < 37) {
                        position = 3;

                    } else if (peca > 36 && peca < 46) {
                        position = 4;

                    } else if (peca > 45 && peca < 55) {
                        position = 5;

                    }

                    return <Peca bg={props.cor[position]} key={peca}>{peca}</Peca> 
                })
            }
        </CuboFaceInterno>
    )
}
import React from 'react';
import styled from "styled-components"
import { CuboFace } from "./cubo-face"
import CuboFaceInterno from "./cubo-face-interno"

const Cubo = styled.div`
background-color: ${({ theme }) => theme.body};
padding:14vh 7vw 0 ;
min-height:99.99vh;
max-height:99.99vh;
min-width: 60vw;
max-width: 60vw;
`
const FaceAmarela = styled(CuboFace)`
    margin-left:152px;
`
const FaceVerde = styled(CuboFace)`
    display: inline-block;
`
const FaceVermelha = styled(CuboFace)`
display: inline-block;`
const FaceLaranja = styled(CuboFace)`
display: inline-block;`
const FaceAzul = styled(CuboFace)`display: inline-block;`
const FaceBranca = styled(CuboFace)`
margin-left:152px;`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Cubo>
            <FaceAmarela>
                <CuboFaceInterno />
            </FaceAmarela>
            <FaceVerde>
                <CuboFaceInterno />
            </FaceVerde>
            <FaceVermelha>
                <CuboFaceInterno />
            </FaceVermelha>
            <FaceLaranja>
                <CuboFaceInterno />
            </FaceLaranja>
            <FaceAzul>
                <CuboFaceInterno />
            </FaceAzul>
            <FaceBranca>
                <CuboFaceInterno />
            </FaceBranca>
        </Cubo>
    );
};
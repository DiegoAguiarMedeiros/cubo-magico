import React from 'react';
import styled from "styled-components"
import { CuboFace } from "./cubo-face"
import CuboFaceInterno from "./cubo-face-interno"
import { CuboPainelControle } from './cubo-painel-controle';
import Angle from '../../assets/images/angle.svg'
import { UpArrow, RightArrow, DownArrow, LeftArrow } from './cubo-controles'

const Cubo = styled.div`
background-color: ${({ theme }) => theme.body};
padding:14vh 4vw 0 ;
height:99.99vh;
width: 60vw;
`

const UpControl = styled(CuboPainelControle)`
    display: flex;
    flex-direction:row ;
    margin-left:180px;
    width: 152px;
`
const LeftControl = styled(CuboPainelControle)`
    height: 152px;
    display: inline-block;
    vertical-align: top;
`
const RightControl = styled(CuboPainelControle)`
    height: 152px;
    display: inline-block;
    vertical-align: top;
`
const ControlInner = styled(CuboPainelControle)`
    height: 152px;
    display: flex;
    flex-direction: column;
    vertical-align: top;
`
const DownControl = styled(CuboPainelControle)`
    margin-left:180px;
    width: 152px;
    display: flex;
    flex-direction:row ;
`
const FaceAmarela = styled(CuboFace)`
    margin-left:180px;
`
const FaceVerde = styled(CuboFace)`
    display: inline-block;
    vertical-align: top;
`
const FaceVermelha = styled(CuboFace)`
display: inline-block;
vertical-align: top;`
const FaceLaranja = styled(CuboFace)`
display: inline-block;
vertical-align: top;`
const FaceAzul = styled(CuboFace)`
display: inline-block;
vertical-align: top;`
const FaceBranca = styled(CuboFace)`
margin-left:180px;`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <Cubo>
            <UpControl>
                <UpArrow src={Angle} />
                <UpArrow src={Angle} />
                <UpArrow src={Angle} />
            </UpControl>
            <FaceAmarela>
                <CuboFaceInterno />
            </FaceAmarela>

            <LeftControl>
                <ControlInner>
                    <LeftArrow src={Angle} />
                    <LeftArrow src={Angle} />
                    <LeftArrow src={Angle} />
                </ControlInner>
            </LeftControl>
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
            <RightControl>
                <ControlInner>
                    <RightArrow src={Angle} />
                    <RightArrow src={Angle} />
                    <RightArrow src={Angle} />
                </ControlInner>
            </RightControl>

            <FaceBranca>
                <CuboFaceInterno />
            </FaceBranca>
            <DownControl>
                <DownArrow src={Angle} />
                <DownArrow src={Angle} />
                <DownArrow src={Angle} />
            </DownControl>
        </Cubo>
    );
};
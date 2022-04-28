import React from 'react';
import styled from "styled-components"
import { CuboFace } from "./cubo-face"
import CuboFaceInterno from "./cubo-face-interno"
import { CuboPainelControle } from './cubo-painel-controle';
import Angle from '../../assets/images/angle.svg'
import { UpArrow, RightArrow, DownArrow, LeftArrow } from './cubo-controles'

const Cubo = styled.div`
background-color: ${({ theme }) => theme.body};
padding:5vh 2vw 0 ;
height:99.99vh;
width: 60vw;
`

const UpControl = styled(CuboPainelControle)`
    display: flex;
    flex-direction:row ;
    margin-left:206px;
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
    border:0;
    background:transparent;
`
const DownControl = styled(CuboPainelControle)`
    margin-left:206px;
    width: 152px;
    display: flex;
    flex-direction:row ;
`
const FaceAmarela = styled(CuboFace)`
    margin-left:206px;
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
margin-left:206px;`

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <Cubo>
            <UpControl>
                <UpArrow src={Angle} />
            </UpControl>
            <UpControl>
                <UpArrow src={Angle} />
                <UpArrow src={Angle} />
                <UpArrow src={Angle} />
            </UpControl>
            <FaceAmarela>
                <CuboFaceInterno face={props.cubo[0][0]} cor={props.cubo[1]}/>
            </FaceAmarela>

            <LeftControl>
                <ControlInner>
                    <LeftArrow src={Angle} />
                </ControlInner>
            </LeftControl>
            <LeftControl>
                <ControlInner>
                    <LeftArrow src={Angle} />
                    <LeftArrow src={Angle} />
                    <LeftArrow src={Angle} />
                </ControlInner>
            </LeftControl>
            <FaceVermelha>
                <CuboFaceInterno face={props.cubo[0][1]} cor={props.cubo[1]}/>
            </FaceVermelha>
            <FaceVerde>
                <CuboFaceInterno face={props.cubo[0][2]} cor={props.cubo[1]}/>
            </FaceVerde>
            <FaceLaranja>
                <CuboFaceInterno face={props.cubo[0][3]} cor={props.cubo[1]}/>
            </FaceLaranja>
            <FaceAzul>
                <CuboFaceInterno face={props.cubo[0][4]} cor={props.cubo[1]}/>
            </FaceAzul>
            <RightControl>
                <ControlInner>
                    <RightArrow src={Angle} />
                    <RightArrow src={Angle} />
                    <RightArrow src={Angle} />
                </ControlInner>
            </RightControl>
            <RightControl>
                <ControlInner>
                    <RightArrow src={Angle} />
                </ControlInner>
            </RightControl>

            <FaceBranca>
                <CuboFaceInterno face={props.cubo[0][5]} cor={props.cubo[1]}/>
            </FaceBranca>
            <DownControl>
                <DownArrow src={Angle} />
                <DownArrow src={Angle} />
                <DownArrow src={Angle} />
            </DownControl>
            <DownControl>
                <DownArrow src={Angle} />
            </DownControl>
        </Cubo>
    );
};
import React, { useState } from 'react';
import styled from "styled-components"
import { CuboFace } from "./cubo-face"
import CuboFaceInterno from "./cubo-face-interno"
import { CuboPainelControle } from './cubo-painel-controle';
import AngleUp from '../../assets/images/angleUp.svg'
import AngleLeft from '../../assets/images/angleLeft.svg'
import AngleRight from '../../assets/images/angleRight.svg'
import AngleDown from '../../assets/images/angleDown.svg'
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


    const [cuboState, setCuboState] = useState(props.cubo[0])



    const topRight = () => {
        let amarelo  = [cuboState[0][2],cuboState[0][5],cuboState[0][8],cuboState[0][1],cuboState[0][4],cuboState[0][7],cuboState[0][0],cuboState[0][3],cuboState[0][6]]
        let vermelho  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[5][2],cuboState[5][3],cuboState[5][4],cuboState[5][5],cuboState[5][6],cuboState[5][7],cuboState[5][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const middleRight = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[0][2],cuboState[0][3],cuboState[0][4],cuboState[0][5],cuboState[0][6],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[5][2],cuboState[5][3],cuboState[5][4],cuboState[5][5],cuboState[5][6],cuboState[5][7],cuboState[5][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    const bottomRight = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[0][2],cuboState[0][3],cuboState[0][4],cuboState[0][5],cuboState[0][6],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let branco  = [cuboState[5][6],cuboState[5][3],cuboState[5][0],cuboState[5][7],cuboState[5][4],cuboState[5][1],cuboState[5][8],cuboState[5][5],cuboState[5][2]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    const right = () => {
        let amarelo  = [cuboState[0][2],cuboState[0][5],cuboState[0][8],cuboState[0][1],cuboState[0][4],cuboState[0][7],cuboState[0][0],cuboState[0][3],cuboState[0][6]]
        let vermelho  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let verde  =  [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let laranja  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let azul  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let branco  = [cuboState[5][6],cuboState[5][3],cuboState[5][0],cuboState[5][7],cuboState[5][4],cuboState[5][1],cuboState[5][8],cuboState[5][5],cuboState[5][2]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
    }
    const topLeft = () => {
        let amarelo  = [cuboState[0][6],cuboState[0][3],cuboState[0][0],cuboState[0][7],cuboState[0][4],cuboState[0][1],cuboState[0][8],cuboState[0][5],cuboState[0][2]]
        let vermelho  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[5][2],cuboState[5][3],cuboState[5][4],cuboState[5][5],cuboState[5][6],cuboState[5][7],cuboState[5][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const middleLeft = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[0][2],cuboState[0][3],cuboState[0][4],cuboState[0][5],cuboState[0][6],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[5][2],cuboState[5][3],cuboState[5][4],cuboState[5][5],cuboState[5][6],cuboState[5][7],cuboState[5][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    const bottomLeft = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[0][2],cuboState[0][3],cuboState[0][4],cuboState[0][5],cuboState[0][6],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let branco  = [cuboState[5][2],cuboState[5][5],cuboState[5][8],cuboState[5][1],cuboState[5][4],cuboState[5][7],cuboState[5][0],cuboState[5][3],cuboState[5][6]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    const left = () => {
        let amarelo  = [cuboState[0][6],cuboState[0][3],cuboState[0][0],cuboState[0][7],cuboState[0][4],cuboState[0][1],cuboState[0][8],cuboState[0][5],cuboState[0][2]]
        let vermelho  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let verde  =  [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let laranja  = [cuboState[4][0],cuboState[4][1],cuboState[4][2],cuboState[4][3],cuboState[4][4],cuboState[4][5],cuboState[4][6],cuboState[4][7],cuboState[4][8]]
        let azul  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let branco  = [cuboState[5][2],cuboState[5][5],cuboState[5][8],cuboState[5][1],cuboState[5][4],cuboState[5][7],cuboState[5][0],cuboState[5][3],cuboState[5][6]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
    }
    const rightTop = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[2][2],cuboState[0][3],cuboState[0][4],cuboState[2][5],cuboState[0][6],cuboState[0][7],cuboState[2][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[5][2],cuboState[2][3],cuboState[2][4],cuboState[5][5],cuboState[2][6],cuboState[2][7],cuboState[5][8]]
        let laranja  = [cuboState[3][6],cuboState[3][3],cuboState[3][0],cuboState[3][7],cuboState[3][4],cuboState[3][1],cuboState[3][8],cuboState[3][5],cuboState[3][2]]
        let azul  = [cuboState[0][8],cuboState[4][1],cuboState[4][2],cuboState[0][5],cuboState[4][4],cuboState[4][5],cuboState[0][2],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[4][6],cuboState[5][3],cuboState[5][4],cuboState[4][3],cuboState[5][6],cuboState[5][7],cuboState[4][0]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const rightDown = () => {
        let amarelo  = [cuboState[0][0],cuboState[0][1],cuboState[4][6],cuboState[0][3],cuboState[0][4],cuboState[4][3],cuboState[0][6],cuboState[0][7],cuboState[4][0]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[2][1],cuboState[0][2],cuboState[2][3],cuboState[2][4],cuboState[0][5],cuboState[2][6],cuboState[2][7],cuboState[0][8]]
        let laranja  = [cuboState[3][2],cuboState[3][5],cuboState[3][8],cuboState[3][1],cuboState[3][4],cuboState[3][7],cuboState[3][0],cuboState[3][3],cuboState[3][6]]
        let azul  = [cuboState[5][8],cuboState[4][1],cuboState[4][2],cuboState[5][5],cuboState[4][4],cuboState[4][5],cuboState[5][2],cuboState[4][7],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[5][1],cuboState[2][2],cuboState[5][3],cuboState[5][4],cuboState[2][5],cuboState[5][6],cuboState[5][7],cuboState[2][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const middleTop = () => {

        let amarelo  = [cuboState[0][0],cuboState[2][1],cuboState[0][2],cuboState[0][3],cuboState[2][4],cuboState[0][5],cuboState[0][6],cuboState[2][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[5][1],cuboState[2][2],cuboState[2][3],cuboState[5][4],cuboState[2][5],cuboState[2][6],cuboState[5][7],cuboState[2][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[4][0],cuboState[0][7],cuboState[4][2],cuboState[4][3],cuboState[0][4],cuboState[4][5],cuboState[4][6],cuboState[0][1],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[4][1],cuboState[5][2],cuboState[5][3],cuboState[4][4],cuboState[5][5],cuboState[5][6],cuboState[4][7],cuboState[5][8]]


        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    const middleDown = () => {

        let amarelo  = [cuboState[0][0],cuboState[4][7],cuboState[0][2],cuboState[0][3],cuboState[4][4],cuboState[0][5],cuboState[0][6],cuboState[4][1],cuboState[0][8]]
        let vermelho  = [cuboState[1][0],cuboState[1][1],cuboState[1][2],cuboState[1][3],cuboState[1][4],cuboState[1][5],cuboState[1][6],cuboState[1][7],cuboState[1][8]]
        let verde  =  [cuboState[2][0],cuboState[0][1],cuboState[2][2],cuboState[2][3],cuboState[0][4],cuboState[2][5],cuboState[2][6],cuboState[0][7],cuboState[2][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[4][0],cuboState[5][7],cuboState[4][2],cuboState[4][3],cuboState[5][4],cuboState[4][5],cuboState[4][6],cuboState[5][1],cuboState[4][8]]
        let branco  = [cuboState[5][0],cuboState[2][1],cuboState[5][2],cuboState[5][3],cuboState[2][4],cuboState[5][5],cuboState[5][6],cuboState[2][7],cuboState[5][8]]

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };
    
    const leftTop = () => {
        
        
        let amarelo  = [cuboState[2][0],cuboState[0][1],cuboState[0][2],cuboState[2][3],cuboState[0][4],cuboState[0][5],cuboState[2][6],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][2],cuboState[1][5],cuboState[1][8],cuboState[1][1],cuboState[1][4],cuboState[1][7],cuboState[1][0],cuboState[1][3],cuboState[1][6]]
        let verde  =  [cuboState[5][0],cuboState[2][1],cuboState[2][2],cuboState[5][3],cuboState[2][4],cuboState[2][5],cuboState[5][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[3][6],cuboState[3][3],cuboState[3][0],cuboState[3][7],cuboState[3][4],cuboState[3][1],cuboState[3][8],cuboState[3][5],cuboState[3][2]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[0][6],cuboState[4][3],cuboState[4][4],cuboState[0][3],cuboState[4][6],cuboState[4][7],cuboState[0][0]]
        let branco  = [cuboState[4][8],cuboState[5][1],cuboState[5][2],cuboState[4][5],cuboState[5][4],cuboState[5][5],cuboState[4][2],cuboState[5][7],cuboState[5][8]]

        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const leftDown = () => {

        let amarelo  = [cuboState[4][8],cuboState[0][1],cuboState[0][2],cuboState[4][5],cuboState[0][4],cuboState[0][5],cuboState[4][2],cuboState[0][7],cuboState[0][8]]
        let vermelho  = [cuboState[1][6],cuboState[1][3],cuboState[1][0],cuboState[1][7],cuboState[1][4],cuboState[1][1],cuboState[1][8],cuboState[1][5],cuboState[1][2]]
        let verde  =  [cuboState[0][0],cuboState[2][1],cuboState[2][2],cuboState[0][3],cuboState[2][4],cuboState[2][5],cuboState[0][6],cuboState[2][7],cuboState[2][8]]
        let laranja  = [cuboState[3][0],cuboState[3][1],cuboState[3][2],cuboState[3][3],cuboState[3][4],cuboState[3][5],cuboState[3][6],cuboState[3][7],cuboState[3][8]]
        let azul  = [cuboState[4][0],cuboState[4][1],cuboState[5][6],cuboState[4][3],cuboState[4][4],cuboState[5][3],cuboState[4][6],cuboState[4][7],cuboState[5][0]]
        let branco  = [cuboState[2][0],cuboState[5][1],cuboState[5][2],cuboState[2][3],cuboState[5][4],cuboState[5][5],cuboState[2][6],cuboState[5][7],cuboState[5][8]]



        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
        
    };

    const up = () => {


        let amarelo  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]
        let verde  =  [cuboState[5][0],cuboState[5][1],cuboState[5][2],cuboState[5][3],cuboState[5][4],cuboState[5][5],cuboState[5][6],cuboState[5][7],cuboState[5][8]]
        let azul  = [cuboState[0][8],cuboState[0][7],cuboState[0][6],cuboState[0][5],cuboState[0][4],cuboState[0][3],cuboState[0][2],cuboState[0][1],cuboState[0][0]]
        let branco  = [cuboState[4][8],cuboState[4][7],cuboState[4][6],cuboState[4][5],cuboState[4][4],cuboState[4][3],cuboState[4][2],cuboState[4][1],cuboState[4][0]]

        let vermelho  = [cuboState[1][2],cuboState[1][5],cuboState[1][8],cuboState[1][1],cuboState[1][4],cuboState[1][7],cuboState[1][0],cuboState[1][3],cuboState[1][6]]
        
        let laranja  = [cuboState[3][6],cuboState[3][3],cuboState[3][0],cuboState[3][7],cuboState[3][4],cuboState[3][1],cuboState[3][8],cuboState[3][5],cuboState[3][2]]
        

        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
    }
    
    
    const down = () => {

        let amarelo  = [cuboState[4][8],cuboState[4][7],cuboState[4][6],cuboState[4][5],cuboState[4][4],cuboState[4][3],cuboState[4][2],cuboState[4][1],cuboState[4][0]]
        let vermelho  = [cuboState[1][6],cuboState[1][3],cuboState[1][0],cuboState[1][7],cuboState[1][4],cuboState[1][1],cuboState[1][8],cuboState[1][5],cuboState[1][2]]
        let verde  =  [cuboState[0][0],cuboState[0][1],cuboState[0][2],cuboState[0][3],cuboState[0][4],cuboState[0][5],cuboState[0][6],cuboState[0][7],cuboState[0][8]]
        let laranja  = [cuboState[3][2],cuboState[3][5],cuboState[3][8],cuboState[3][1],cuboState[3][4],cuboState[3][7],cuboState[3][0],cuboState[3][3],cuboState[3][6]]
        let azul  = [cuboState[5][8],cuboState[5][7],cuboState[5][6],cuboState[5][5],cuboState[5][4],cuboState[5][3],cuboState[5][2],cuboState[5][1],cuboState[5][0]]
        let branco  = [cuboState[2][0],cuboState[2][1],cuboState[2][2],cuboState[2][3],cuboState[2][4],cuboState[2][5],cuboState[2][6],cuboState[2][7],cuboState[2][8]]

        

        
        
        let novoCubo = [
            amarelo,
            vermelho,
            verde,
            laranja,
            azul,
            branco
        ]
        console.log(novoCubo)

        setCuboState(novoCubo)
    }

    return (
        <Cubo>

            <UpControl>
                <UpArrow src={AngleUp} onClick={up}/>
            </UpControl>
            <UpControl>
                <UpArrow src={AngleUp} onClick={leftTop}/>
                <UpArrow src={AngleUp} onClick={middleTop} />
                <UpArrow src={AngleUp} onClick={rightTop}/>
            </UpControl>
            <FaceAmarela>
                <CuboFaceInterno face={cuboState[0]} cor={props.cubo[1]} />
            </FaceAmarela>

            <LeftControl>
                <ControlInner>
                    <LeftArrow src={AngleLeft} onClick={left} />
                </ControlInner>
            </LeftControl>
            <LeftControl>
                <ControlInner>
                    <LeftArrow src={AngleLeft} onClick={topLeft}/>
                    <LeftArrow src={AngleLeft} onClick={middleLeft}/>
                    <LeftArrow src={AngleLeft} onClick={bottomLeft}/>
                </ControlInner>
            </LeftControl>
            <FaceVermelha>
                <CuboFaceInterno face={cuboState[1]} cor={props.cubo[1]} />
            </FaceVermelha>
            <FaceVerde>
                <CuboFaceInterno face={cuboState[2]} cor={props.cubo[1]} />
            </FaceVerde>
            <FaceLaranja>
                <CuboFaceInterno face={cuboState[3]} cor={props.cubo[1]} />
            </FaceLaranja>
            <FaceAzul>
                <CuboFaceInterno face={cuboState[4]} cor={props.cubo[1]} />
            </FaceAzul>
            <RightControl>
                <ControlInner>
                    <RightArrow src={AngleRight} onClick={topRight} />
                    <RightArrow src={AngleRight} onClick={middleRight}/>
                    <RightArrow src={AngleRight} onClick={bottomRight}/>
                </ControlInner>
            </RightControl>
            <RightControl>
                <ControlInner>
                    <RightArrow src={AngleRight} onClick={right} />
                </ControlInner>
            </RightControl>

            <FaceBranca>
                <CuboFaceInterno face={cuboState[5]} cor={props.cubo[1]} />
            </FaceBranca>
            <DownControl>
                <DownArrow src={AngleDown} onClick={leftDown}/>
                <DownArrow src={AngleDown} onClick={middleDown}/>
                <DownArrow src={AngleDown} onClick={rightDown}/>
            </DownControl>
            <DownControl>
                <DownArrow src={AngleDown} onClick={down} />
            </DownControl>
        </Cubo>
    );
};
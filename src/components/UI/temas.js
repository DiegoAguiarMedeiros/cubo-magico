import {
    fundoClaro,
    conteudoClaro, 
    textoFundoClaro, 
    bodyPainelControleClaro,
    bodyPainelControleBorderClaro,
    cuboBordaClaro,
    fundoEscuro, 
    conteudoEscuro, 
    textoFundoEscuro,
    bodyPainelControleEscuro,
    bodyPainelControleBorderEscuro,
    cuboBordaEscuro,
} from './variaveis'

export const temaClaro = {
    body: fundoClaro,
    insight: conteudoClaro,
    text: textoFundoClaro,
    cuboBorda: cuboBordaClaro,
    bodyPainelControle: bodyPainelControleClaro,
    bodyPainelControleBorder: bodyPainelControleBorderClaro,
    filter: ''
}
export const temaEscuro = {
    body: fundoEscuro,
    insight: conteudoEscuro,
    text: textoFundoEscuro,
    cuboBorda: cuboBordaEscuro,
    bodyPainelControle: bodyPainelControleEscuro,
    bodyPainelControleBorder: bodyPainelControleBorderEscuro,
    filter: 'invert(100%)'
}
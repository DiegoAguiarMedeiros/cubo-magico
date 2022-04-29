import styled from "styled-components"



// eslint-disable-next-line import/no-anonymous-default-export
export const CuboPeca = styled.div((props) => (
    `
    height: 50px;
    width: 50px;
    margin:0;
    padding:0;
    background-color:${props.bg};
`
));
import styled from "styled-components"



// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const CuboPeca = styled.div`
        height: 50px;
        width: 50px;
        margin:0;
        padding:0;
        border:1px solid ${({ theme }) => theme.cuboBorda};
        background-color:${props.backgroundColor || 'transparent'};
    `
    return(
        <CuboPeca/>
    )
}
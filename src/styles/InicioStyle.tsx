import style from "styled-components";

export const DivMainInicio = style.div`
    width: 100vw;
    justify-content: center;
`;
export const DivInicioCard = style.div`
    display:flex;
    flex-wrap: wrap;
    width: 100vw;
    justify-content: center;
`;

export const DivCard = style.div`
    width:520px;
    margin:20px;
    height:350px;
    background-color:#222222;
    border-radius:15px;

    &:hover {
        transition:0.1s all ease;
        border:5px solid red;
    }

    h1 {
        font-size:90px;
        color:#fff;
    }

    h2 {
        color:#fff;
    }
`;

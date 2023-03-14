import style from "styled-components";

export const DivMainlogin = style.div`
   display:flex; 
   background-color:#222222;
   width:100vw;
   height:100vh;
   align-items: center;
   justify-content: center;
   `;

export const DivLogin = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:#fff;
    width:450px;
    height:100%;

`;

export const InputLogin = style.input`
    width:350px;
    height:38px;
    border-radius:5px;
    margin-bottom:10px;
    text-align:center;
    color:#000000;
    font-weight: bold;

`;

export const BtnLogin = style.button`
    width:200px;
    height:38px;
    background-color:#000000;
    color:#fff;
    font-weight: bold;
    margin-top:30px;
    border-radius:5px;

    &:hover {
        transition:0.3s all ease;
        color:#000;
        background-color: #fff;
        border:2px solid red;
    }
`;

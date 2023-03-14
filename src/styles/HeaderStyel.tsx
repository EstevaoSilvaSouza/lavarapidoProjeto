import style from "styled-components";

export const DivMainHeader = style.div`
width:100vw;
height:80px;
display:flex;

top:0;
background-color:#222222;
list-style:none;
align-items: center;
justify-content: center;

h1 {
    color:#fff;

    &:hover{
        text-decoration: line-through;

    }
}


ul {
    width:40%;
    display:flex;
    list-style:none;
    justify-content: center;
    
}

li {
    display:flex;
    align-items: center;
    margin-left:50px;
    height:60px;
    width:140px;
    justify-content: center;
    background-color:${(prop) => (prop.color ? prop.color : "red")};
    border-radius:5px;
    
}

a {
    color:#fff;
    text-decoration:none;

    &:hover {
        transition:0.3s all ease;
        color:#000000;
        font-weight: bold;
    }
}


`;

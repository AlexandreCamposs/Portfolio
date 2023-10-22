import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

:root {
  --bg-color: #13131f;
  --title-color: #0e2748;
  --p-color: #7a7672;
  --white-color: #fff;
  --blue-color: #3061ba;
}
header{
  border-bottom:  0.3rem solid ${(props) => props.theme.colors.primary};
}
 
 body {
    width: 100%;
    background: ${(props) => props.theme.colors.background};

  

   h2,h4{
     color: ${(props) => props.theme.colors.secundary};
   } 

   h3  {
   color: ${(props) => props.theme.colors.primary};
   } 

   p{
   color: ${(props) => props.theme.colors.text};
   } 

   svg{
     color: ${(props) => props.theme.colors.primary};
   } 

  span{
   color: ${(props) => props.theme.colors.primary};
   }
 
}
 
`;

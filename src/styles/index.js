import styled from 'styled-components';

export const Header = styled.div.attrs(() => ({
  className: 'header'
}))`
  height: 50px;
  background: #EEEEEE;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  & ol {
    display: flex;
    height: inherit;
    align-items: center;
    }
  & ol li {
    height: inherit;
  }
  & a{
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0 10px;
    color: black;
    text-decoration: none;
  }
`;
export const ListMenu = styled.ol.attrs(() => ({
  className: "list-menu"
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  & ol > li { 
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
export const HeaderButton = styled.a.attrs(() => ({
  className: 'header-button'
}))`
  border-radius: 5px;
  color: white;
  margin: 0px 4px;
  padding: 5px;
  font-weight: normal;
  background-color: red;
  &:hover {
    font-weight: 900;
    background-color: blue;
    padding: 4px;
  }
`

export const Menu = styled.div.attrs(() => ({
  className: "menu"
}))`
height: inherit;
`
export const Container = styled.div.attrs(() => ({
  className: 'container'
}))`
  width: 1000px;
  margin: 0 auto;
  height: inherit;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
  flex-wrap: inherit;
`;

export const H1 = styled.h1.attrs(() => ({
  className: 'h1'
}))`
  margin: 15px 10px; 
`;


export const Card = styled.div.attrs(() => ({
  className: 'card'
}))`
  width: 450px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.10); 
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.10);

`;

export const FormContainer = styled.div.attrs(() => ({
  className: 'formContainer'
}))`
  display: flex;
  justify-content: center;
  & form {
    display:flex;
    flex-direction: column;
    & input {
      padding: 5px;
      border: .5px solid silver;
      border-radius: 5px;
      text-indent: 10px;
      height: 25px;
      margin: 5px 0;
    }
    & input:hover {
      border: 1px solid silver;
    }
  }
`;

export const ButtonActions = styled.div.attrs(() => ({
  className: 'button-actions'
}))`
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`
export const ButtonDefault = styled.button.attrs(() => ({
  className: 'btn-default'
}))`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 7px;
  margin: 2px;
`
export const ButtonPrimary = styled(ButtonDefault)`
  background-color: #326273;
`
export const ButtonSecondary = styled(ButtonDefault)`
  background-color: #5C9EAD;
`

import styled from 'styled-components';
import img from '../assets/static/Polygon1.png'

export const Header = styled.header.attrs(() => ({
  className: 'header'
}))`
  height: 70px;
  width: 100%;
  background: ${props => props.theme.colors.blue1};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;  
  @media only screen and (max-width: 475px) {
      justify-content: center;
  }

  & ul {
    display: flex;
    height: inherit;
    align-items: center;
    }
  & ul li {
    height: inherit;
  }
  & a{
    display: flex;
    align-items: center;
    height: inherit;
    padding: 0 10px;
    color: ${props => props.theme.colors.white1};
    text-decoration: none;
    font-size: 2.4rem;
    transition:  0.3s ease-out;
    
  }
  & li:hover{
    background-color:${props => props.theme.colors.blue2};
    transition-duration: 3sec;
    transition:  0.3s ease-out;
  }
`
export const ListMenu = styled.ul.attrs(() => ({
  className: "list-menu"
}))`
  margin: 0;
  padding: 0;
  list-style: none;
  & ul > li { 
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

export const Menu = styled.nav.attrs(() => ({
  className: "menu"
}))`
height: inherit;
`
export const Container = styled.div.attrs(() => ({
  className: 'container'
}))`
  width: 70%;
  margin: 20px auto;
  height: inherit;
  display: block;
  align-items: inherit;
  justify-content: inherit;
  flex-wrap: inherit;
  padding: 10px;
`;

export const DevTools = styled(Container)` 
    display: none;
`

export const H1 = styled.h1.attrs(() => ({
  className: 'h1'
}))`
  margin: 15px 10px; 
  text-align: center;
  color: ${props => props.theme.colors.blue2};
  font-size: 3.4rem;
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
  cursor: pointer;
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
  cursor: pointer;
`
export const ButtonDefault2 = styled.button.attrs(() => ({
  className: 'button-style'
}))`
    width: 100%;
    padding: 5px;
    background-color: ${props => props.theme.colors.purple1};
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

export const ButtonPrimary = styled(ButtonDefault)`
  background-color: #326273;
`
export const ButtonSecondary = styled(ButtonDefault)`
  background-color: #5C9EAD;
`
export const ButtonDashboard = styled(ButtonDefault2)`
`

// main

export const Main = styled.main.attrs(() => ({
  className: "main"
}))`
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: ${props => props.theme.colors.white1  };
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.10); 
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.10);
  border-radius: 25px;
`

// dashboard styles

export const Dashboard = styled.section.attrs(() => ({
  className: "dashboard"
}))`
  width: 100%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    gap: 20px;
  & .dashboard-sidemenu {
    width: 30%;
    min-height: 300px;
    background-color: ${props => props.theme.colors.purple1};
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25)
  }
  & .device-select {
    display: flex;
    width: 100%;
    text-align: center;
    appearance: none;
    text-align-last: center;
    border-radius: 7px;
    border: none;
    margin-bottom: 15px;
    padding: 5px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position:
    calc(100% - 4px) calc(1em + -4px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em; 
  }
  & .dashboard-device {
    width: 100%;
    height: 150px;
    background-color: ${props => props.theme.colors.white1};
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  }
  & .device-tittle{
    display: flex;
    margin-bottom: 15px;
  }
  & h2 {
    width: 100%;
    text-align: center;
  }
  & .fix {
    width: auto;    
  }
  & p {
    text-align: center;
    margin-bottom: 15px;
  }
  & .dashboard-ports-container{
    width: 70%;
    height: 100%;
    min-height: 300px;
    background-color: ${props => props.theme.colors.purple1};
    padding: 10px;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: row;
    gap: 10px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25)
  }

  @media only screen and (max-width: 600px) {
   .device-tittle h2 {
    font-size: 1.6rem;
   }

    .dashboard-ports-container {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

  @media only screen and (max-width: 475px) {
    .dashboard {
        flex-direction: column;
    }
    .dashboard-sidemenu {
        width: 100%;
        min-height: 0px;
    }

    
    .dashboard-ports-container {
        width: 100%;
        grid-template-columns: 1fr 1fr;
    }
 }

  @media only screen and (max-width: 375px) {
   
    .dashboard-ports-container {
        width: 100%;
        grid-template-columns: 1fr;
    }
  }
`

// ports styles

export const Ports = styled.div.attrs(() => ({
  className: 'dashboard-ports-card'
}))`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colors.white1};
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
  & .options-select {
    display: flex;
    justify-content: center;
    align-items: center;   
    width: 100%;
    text-align: center;
    appearance: none;
    text-align-last: center;
    border-radius: 7px;
    margin-bottom: 5px;
    padding: 5px;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position:
    calc(100% - 4px) calc(1em + -4px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em; 
}
 & .dashboard-ports-card p{
    margin-bottom: 5px;
}
`
export const Social = styled.div.attrs(() => ({
  className: 'social-networks'
}))`
  width: 30%;
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.footer.attrs(() => ({
  className: 'footer'
}))`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.purple1};
  padding: 10px;
  & p {
    display: flex;
    align-items: center;
    width: 70%;
    margin: 15px 10px; 
    font-size: 2.4rem;
    color: ${props => props.theme.colors.white1}
  }
  & img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
  & a {
    color: ${props => props.theme.colors.white1};
    text-decoration: none;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    
  }
`
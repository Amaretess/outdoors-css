import styled from "styled-components";
import hero from "../images/hero.jpg";
import logo from "../images/logo-white.png";

const Home = () => {
    return <>
        <Header>
            <LogoBox>
                <Logo src={logo} alt="logo"/>
            </LogoBox>
            <HeadingPrimary>
                <HeadingPrimaryMain>Outdoors</HeadingPrimaryMain>
                <HeadingPrimarySub>Is where life happens</HeadingPrimarySub>
            </HeadingPrimary>
        </Header>
    </>;
}

export default Home;

const Header = styled.div `
    height: 95vh;
    background-image: linear-gradient(
        to right bottom, 
        rgba(165, 16, 240, 0.69), 
        rgba(22, 215, 233, 0.69)),
        url(${hero});
    background-size: cover;
    background-position: top; 
    clip-path: polygon(0 0, 99% 1%, 100% 85%, 0% 100%);
    position: relative;
`
const LogoBox = styled.div `
    position: absolute;
    top: 40px;
    left: 40px;
`

const Logo = styled.img `
    height: 35px;
`

const HeadingPrimary = styled.h1`
        
`
const HeadingPrimaryMain = styled.span `
        
`

const HeadingPrimarySub = styled.span `

`

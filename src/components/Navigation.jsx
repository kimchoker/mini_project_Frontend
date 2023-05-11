import logo from "./styles/images/Logo.png"
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../context/UserStore";
import { useContext } from "react";


const LoginBarBlock = styled.div`
      top: 0;
      width: 100%;
      height: 30px;
      position: fixed;
      align-items: center;
      color: black;
      direction: rtl;
      z-index: 0;
      background-color:#395144;

      .shortcut {
        font-size: 10px;
        color: #F0EBCE;
        margin-right: 50px;
        text-decoration: none;
        margin-top: 5px;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        font-size: 10px;
        color: #F0EBCE;
        margin-right: 30px;
        text-decoration: none;
        margin-top: 5px;
        background-color: transparent;
        cursor: pointer;
      }
`;

const MobileLogo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    height: 50px;
    .logo{
      width: 200px;
      height: 75px;
}

@media (min-width: 768px) {
    display: none;
}

`;

const NavigationWrapper = styled.div`

    @font-face {
    font-family: "inter";
    src: url(./fonts/Inter/Inter-VariableFont_slnt\,wght.ttf);
    }
    z-index: 11;
    width: 100%;
    height: 175px;
    margin-top: 30px;
    position: fixed;
    display: column;
    align-items: center;
    top: 0;
    background-color: #395144;
    

.menu__item {
    width: 150px;
    height: 50px;
    margin-top: 25px;
    margin-right: 30px;
    display: flex;
    font-family: 'inter';
    font-weight: 800;
    color: #F0EBCE;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transform: skew(-10deg);
    text-align: center;
  }
  .menu__item:hover {
    transition: all 0.1s linear;
    font-size: 1.1rem;
    text-shadow: black 1px 1px;
}

@media (min-width: 768px) {

    width: 100%;
    height: 75px;
    position: fixed;
    display: flex;
    align-items: center;

.navigation__wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.menu__box {
    width: 50%;
    height: fit-content;
}

.menu__list {
    flex-direction: row;
    align-items: center;
}
.menu__item {
    width: 200px;
    height: 70px;
    margin-top: 0;
    margin-right: 50px;
    display: flex;
    font-family: 'inter';
    font-weight: 800;
    
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transform: skew(-10deg);
  }
.menu__item:hover {
    transition: all 0.05s linear;
    font-size: 25px;
    text-shadow: black 1px 1px;
}
}
`;

const MenuList = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
`;


const LogoStyle = styled.div`
    z-index: 999;
    margin-bottom: 30px;
  .logo{
    width: 160px;
    height: 75px;
    margin-left: 30px;
    @media (max-width: 768px) {
      display: none;
    }
    
}
`;


function Navigation() {

    const { isLoggedIn, handleLogout } = useContext(UserContext);


    const menu = [
    
    { name: "NEWS", address: "/newshome" },
    { name: "HOME PLATE", address: "/homeplate" },
    { name: "STANDINGS", address: "/standings" },
    { name: "SCHEDULE", address: "/schedule" },

    ];
  

  return (
    
    <NavigationWrapper>
      <LogoStyle>
            <Link to="/">
              <img src={logo} alt="/" className="logo"/>
            </Link>
        </LogoStyle>
      <LoginBarBlock>
            
      {isLoggedIn ? (
        <>
          <Link to="/profile" className="shortcut">내 정보</Link>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <>
          <Link to="/signup" className="shortcut">
            회원가입
          </Link>
          <Link to="/login" className="shortcut">
            로그인
          </Link>
        </>
      )}
      </LoginBarBlock>
        <MobileLogo>
          <Link to="/">
            <img src={logo} alt="/" className="logo"/>
          </Link>
        </MobileLogo>
        
        <MenuList>
          {menu.map((data) => (
            <NavItem data={data} key={data.address} />
          ))}
        </MenuList>
    </NavigationWrapper>
  );
}

export default Navigation;
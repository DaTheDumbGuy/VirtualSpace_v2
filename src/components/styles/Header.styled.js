import styled from "styled-components";

export const Header = styled.header`
    width: 90%;
    margin: auto;
    height: ${({ theme }) => theme.height.header};

    @media screen and (min-width:1024px){
        height: calc(${({ theme }) => theme.height.header} + 1.5rem);
        width: 90%;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
    @media screen and (min-width:1024px){
        .toggle-theme{
            display: none;
        }
    }
`

export const Logo = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-weight: var(--font-semi-bold) ;
`

export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        background-color: ${({ theme }) => theme.colors.container};
        bottom: 10%;
        right: 50%;
        width: 70%;
        padding: 1.30rem 3rem;
        border-radius:20px;
        transform: translateX(50%);
        box-shadow: 0 8px 24px hsla(228, 66%, 45%, .15);
        
        li{
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 0 10px;
            margin-right: 0.5rem;
        }
        .nav-icon{
            font-size: 1.2rem;
        }
        .menu-toggle{
            display: none;
        }
        @media screen and (max-width: 430px) {
            width: 95%;
            padding: 1.30rem 2rem ;

            .nav-icon{
                font-size: 1rem;
            }
        }
        @media (min-width: 767px) {
            justify-content: space-between;
            width: 60%;
            transform: translateX(-50%);
            left: 50%;
            right: unset;
        }

        @media screen and (min-width:1024px){
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 60%;
            background-color:unset;
            box-shadow:unset;
            position: unset;
            padding: 0;
            bottom: unset;
            right: unset;
            border: none;
            transform: translateX(0);
            

            .menu-toggle{
                display: flex;
                justify-content: space-between;
                align-items: center;

                button{
                    margin-left: 2rem;
                }
            }

            .nav-icon{
                display:none;
            }
        }
`

export const NavLinks = styled.a`
    color: ${({ theme }) => theme.colors.text};
    display: none;

    @media screen and (min-width:1024px){
        display: inline-block;
        padding: 1rem;
    }
`

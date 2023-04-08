import { Header as HeaderContainer, Nav, NavMenu, Logo, NavLinks } from './styles/Header.styled';
import { StyledButton, ChangeTheme } from './styles/Button.styled';
import { FaHome, FaCog, FaPhone, FaEnvelope } from 'react-icons/fa';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { lightTheme } from './styles/Themes.styled';

export default function Header(props) {
    const isLightTheme = props.currentTheme === lightTheme;

    return (
        <HeaderContainer>
            <Nav>
                <Logo href='#'>Virtual Space</Logo>
                <NavMenu>
                    <li>
                        <NavLinks href="#" >Home</NavLinks>
                        <FaHome className='nav-icon' />
                    </li>
                    <li>
                        <NavLinks href="#" className='nav-service'>Service</NavLinks>
                        <FaCog className='nav-icon' />
                    </li>
                    <li>
                        <NavLinks href="#" className='nav-about'>About</NavLinks>
                        <FaPhone className='nav-icon' />
                    </li>
                    <li>
                        <NavLinks href="#" className='nav-contact'>Contact</NavLinks>
                        <FaEnvelope className='nav-icon' />
                    </li>
                    <div className='menu-toggle'>
                        <ChangeTheme onClick={props.changeTheme}>
                            {isLightTheme ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
                        </ChangeTheme>
                        <StyledButton>Log In</StyledButton>
                    </div>
                </NavMenu>

                <ChangeTheme onClick={props.changeTheme} className='toggle-theme'>
                    {isLightTheme ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
                </ChangeTheme>
            </Nav>
        </HeaderContainer>
    );
}

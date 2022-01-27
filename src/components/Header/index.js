import { HeaderContainer, Logo } from "./styles";


const Header = ({ children }) => (
    <HeaderContainer>
        <a href="/">
            <Logo title="Books Collection logo" />
        </a>
        {children}
    </HeaderContainer>
)

export default Header;

import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from "react-icons/ri"

export function Header() {
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/ezequielrabello.png" alt="Foto de perfil" />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Ezequiel Rabello</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>    
        </Container>
    );
}
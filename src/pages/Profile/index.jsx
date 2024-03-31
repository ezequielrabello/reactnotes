import { Container, Form, Avatar } from "./styles"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi"

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>
            </header>

            <Avatar>
                <img src="https://github.com/ezequielrabello.png" alt="Foto do avatar" />
                <label htmlFor="avatar">
                    <FiCamera/>

                    <input 
                        id="avatar"
                        type="file" 
                    />
                </label>
            </Avatar>

            <Form>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                />
            
            <Button
                title="Salvar"
            />
            </Form>

        </Container>
    )
}
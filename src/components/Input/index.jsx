import { Container } from "./styles";

export function Input({icon: Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size={20}/>} {/* this line says that the icon will only be shown if it exists */}
            <input {...rest} />
        </Container>
    );

}
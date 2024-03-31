import { Container, Form } from "./styles"
import {Header } from "../../components/Header"
import {Input } from "../../components/Input"
import {Section } from "../../components/Section"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Button } from "../../components/Button"


export function New() {
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">Voltar</a>
                    </header>
             
                    <Input
                        placeholder="Título"
                        type="text"
                    />
                    <Textarea placeholder="Observações"/>

                    <Section 
                        title="Links úteis">
                        <NoteItem value="https://www.rocketseat.com.br/"/>
                        <NoteItem placeholder="Novo link" isNew />
                    </Section>

                    <Section 
                        title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem placeholder="Novo marcador" isNew />
                        </div>
                        <Button title="Salvar"/>
                    </Section>

                </Form>
            </main>

        </Container>

    )
}
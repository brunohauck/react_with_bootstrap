import React, { Component } from "react";
import {
    Form,
    Button,
    Container,
    FormGroup,
    Label,
    Input,
    Col,
    FormFeedback,
    FormText
} from "reactstrap";
import "../assets/css/form.css";

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            users: [],
            title: this.props.titleForm
        };

    }
    submitForm(e) {
        let user = { name: this.state.name, email: this.state.email, password: this.state.password }
        let users = this.state.users
        users.push(user)
        console.log(this.state.users)
    }
    render() {

        return (
            <Container className="AppLogin">
                <h2>Cadastro de Usuários</h2>
                <Form className="form" onSubmit={e => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                name="email"
                                id="exampleName"
                                placeholder="Digite seu Nome"
                                value={this.state.name}
                                onChange={e => {
                                    this.setState({
                                        name: e.target.value
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Digite seu email"
                                value={this.state.email}

                                onChange={e => {
                                    this.setState({
                                        email: e.target.value
                                    });
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={this.state.password}

                                onChange={e => {
                                    this.setState({
                                        password: e.target.value
                                    });
                                }}
                            />
                            <FormFeedback>Favor digitar uma email</FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Button 
                            style={buttonStyle}
                            onclick="register()"
                            >Cadastrar</Button>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}
const buttonStyle = {
    width: "25rem",
    marginTop: "20px",
    color: "#000",
    background: "#f5f5f5"
};
export default FormUser;

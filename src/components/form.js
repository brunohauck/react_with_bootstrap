import React, { Component } from "react";
import {
    Button,
    Container,
    FormGroup,
    Label,
    Input,
    Col,
    FormFeedback
} from "reactstrap";
import "../assets/css/form.css";
import UserList from './userList';

class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            users: [],
            title: this.props.title
        };

    }
    submitForm(e) {
        let user = { name: this.state.name, email: this.state.email, password: this.state.password }
        let users = this.state.users
        users.push(user)
        console.log(this.state.users)
    }
    register = () => {
        //alert("Great Shot!");
    
    
        let user = { name: this.state.name, email: this.state.email, password: this.state.password }
        let users = this.state.users
        users.push(user)
        this.setState({
            users: users
        })
        
        console.log(this.state.users)
    }
    render() {

        return (
            <>
            <Container className="AppLogin">
                <h2>{this.state.title}</h2>
                
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
                            onClick={this.register}
                            >Cadastrar</Button>
                        </FormGroup>
                    </Col>
                
            </Container>
            <UserList users={this.state.users}/>
            </>
        );
    }
}
/*
Styling with Style Objects
CSS
*/
const buttonStyle = {
    width: "25rem",
    marginTop: "20px",
    color: "#000",
    background: "#f5f5f5"
};
export default FormUser;

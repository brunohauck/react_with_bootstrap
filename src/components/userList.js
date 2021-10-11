import React, { Fragment, Component} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";


const divStyle = {
  width: '25rem',
  margin: '20px',
};

class ListUsers extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users
    }
    
    console.log(this.props.users)
  }
  updateAndNotify = () => {
    console.log('updateAndNotify')
    if (this.updateTimer) return;
    //this.setState({ backgroundColour: "#9b34ee" });
    
    this.updateTimer = setTimeout(() => {
      this.setState({ users: this.props.users });
	  this.updateTimer = null;
	}, 1000);
  }
  componentDidUpdate(prevProps) {
    console.log('Did Update')
    let tempUsers = []
    if (tempUsers !== this.props.users) {
      this.updateAndNotify();
    }
  }
  componentWillMount() {
      console.log('entrou no Component Will Mount')
      /*
    fetch("http://localhost:4000/user")
      .then(res => res.json())
      .then(data => {
        this.setState({ users: data });
        console.log(this.state.contacts);
      })
      .catch(console.log);
      this.setState({
        users: this.state.props.users
    });*/
  }
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col>
              {this.state.users.map(user => (
                <Card style={divStyle} color="white">
                  <CardBody>
                    <CardTitle className="h3 mb-2 pt-2 font-weight-bold">
                      {user.name}
                    </CardTitle>
                    <CardSubtitle className="mb-3 font-weight-light text-uppercase">
                      {user.email}
                    </CardSubtitle>
                    <CardText className="mb-4">
                      {" "}
                      {user.creationDate}
                    </CardText>
                    
                  </CardBody>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default ListUsers;
import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow,MDBInput, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';


class Login extends React.Component {
  constructor(props){
    super(props);
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
  return (
    <MDBContainer >
      <MDBRow>
        <MDBCol ms="12" className="mt-3">
          <MDBCard >
            <MDBCardBody >
              <form>
                <p className="h4 text-center py-4">Login</p>
                
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  </div>
                <br />
                <p className="h6 text-center ">You don't have an account ? <Link to="/Signup"><span className="blue-text">Sign in</span></Link></p>
                <br />
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" type="submit">
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
  );
};
}

export default Login;
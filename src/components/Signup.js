import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class Login  extends React.Component{
constructor(props){
  super(props);
  this.state={
    name:"",
  }
}
handleChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

// componentDidMount = () =>{
//   axios.get("user/me").then(res => console.log(res.json())).catch(err => console.log('err', err))
// }

render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol ms="12" className="mt-3 mt-b">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
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
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
                <br />
                <p className="h6 text-center ">Already have an account ? <Link to="/login"><span className="blue-text">Login</span></Link></p>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-blue" type="submit">
                    Register
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
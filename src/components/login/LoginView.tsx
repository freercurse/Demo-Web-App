import * as React from 'react'
import { Fragment } from 'react'
import Verify from './Verify'
import ErrorNote from '../Utility/ErrorNote'
import Dashboard from '../Dashboard/Dashboard'


interface Props {

}

interface State {
 Message:string
  verified: boolean
  price: 50
}

class LoginView extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      verified: false,
      Message: null,
      price: 50
    }
  }

  handleSubmit = (e: any) => {

    if (Verify(e.target.UN.value, e.target.PW.value)) {
      this.setState({ verified: true });
      console.log("login Succeeded")
    } else {
      e.target.UN.value = "";
      e.target.PW.value = "";      
      this.setState({ Message: "Login Failed" });
      setTimeout(() => { this.setState({ Message: "" }) },3000 )
      throw new Error("Login Failed");
    }
  }

  handleLogOut = () => {
    this.setState({ verified: false });

    this.setState({ Message: "You Have been Logged Out" });
    setTimeout(() => { this.setState({ Message: "" }) }, 3000)
  }

  render() {   
    const prop = {
      message: this.state.Message,
      logOut: this.handleLogOut
    }

    return (
    <div className="modal">
        {!this.state.verified && <Fragment >
          <div className="flex_centre">
            <h1>Login Form</h1>
            <form className="loginForm" onSubmit={(e) => { e.preventDefault(), this.handleSubmit(e) }}>
              <label className="LblBox">Please enter the username and password</label><p />
              <label>username : <input className="UNBox" name="UN" type="text" /></label><p />
              <label>password : <input className="PWBox" name="PW" type="password" /></label><p />
              <input className="BtnBox" type="submit" />
            </form>
            <ErrorNote {...prop} />
          </div>
        </Fragment> ||
          <Dashboard {...prop} />}
    </div>
    )
  }  
}
export default LoginView
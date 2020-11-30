import * as React from 'react'
import { Fragment } from 'react'


interface Props {

}

interface State {
 

}

class LoginView extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
     
    }
  }

  handleSubmit = (e:any) => {
    console.log(e.target.UN.value, e.target.PW.value)
    console.log("you just logged in :)")
  }

  render() {        

    return (
    <div className="modal">
      <Fragment >
        <div className="flex_centre">
          <h1>Login Form</h1>
          <form className="loginForm" onSubmit={(e) => {e.preventDefault(), this.handleSubmit(e)} }>
            <label className="LblBox">Please enter the username and password</label><p />
            <label>username : <input className="UNBox" name="UN" type="text" /></label><p/>
            <label>password : <input className="PWBox" name="PW" type="password" /></label><p/>
            <input className="BtnBox" type="submit"/>
          </form>
        </div>
      </Fragment>
    </div>
    )
  }
}
export default LoginView
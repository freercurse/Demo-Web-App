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
  render() {        

    return (
      <Fragment>
        <form>
          <label>Please enter the username and password</label>
          <input type="text" />
          <input type="password"/>
        </form>
      </Fragment>
    )
  }
}
export default LoginView
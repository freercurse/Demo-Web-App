import * as React from 'react'
import { Fragment } from 'react'
import LoginView from './login/LoginView'
import '../styles/main.scss'

import Main from './main'

interface Props {
}

interface State {
  authenticated: boolean

}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      authenticated: false
    }
  }

  authenticate = () => { this.setState({authenticated: true}) }

  render() {

    const authProps = {
      auth : this.authenticate
    }

    return (
      <Fragment>
        <LoginView {...authProps}/>
      </Fragment>
    )
  }
}
export default App
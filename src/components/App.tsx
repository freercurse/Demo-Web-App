import * as React from 'react'
import { Fragment } from 'react'
import '../styles/main.scss'

import Main from './main'

interface Props {
}

interface State {
}

class App extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      
    }
  }

  

  render() {     
    return (
      <Fragment>        
        <Main/>     
      </Fragment>
    )
  }
}
export default App
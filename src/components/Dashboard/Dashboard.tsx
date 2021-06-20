import * as React from 'react'
import { Fragment } from 'react'



interface Props {
  logOut:Function
}

interface State {
  check : boolean
}

class Dashboard extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {    
      check : false
    }
  }

  onClick = (code : number ) => {
    switch (code) {
      case 1:
        console.log("Action 1 was performed");
        break;
      case 2:
        console.log("Action 2 was performed");
        break;
      case 3:
        console.log("Action 3 was performed");
        break;
      default:
        console.log("how did you get here??!!!");
        break;
    }

    if (this.state.check) {
      console.log("apply modifier")
    }
  }

  onChange = (e : any) => {
    this.setState({ check: !this.state.check });   
  }

  render() {
    
    return (
      <div>
        <div>
          <button onClick={() => { this.onClick(1) }} >Action 1</button>
          <button onClick={() => { this.onClick(2) }} >Action 2</button>
          <button onClick={() => { this.onClick(3) }} >Action 3</button>
          <button className="LogButton" onClick={() => { this.props.logOut() }} >Log Out</button>
        </div>
        <div>
          <input type="checkbox" checked={this.state.check} onChange={ this.onChange}/>
        </div>
      </div>
    )
  }
}
export default Dashboard
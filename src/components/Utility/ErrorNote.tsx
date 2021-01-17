import * as React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface props {
  message: String,
  color:string
}
const ErrorNote = (props:any) => {
  const { close, color, message } = props

  return (
    <TransitionGroup component={null}>
      {message &&
        <CSSTransition in
          className={'error YTrans'}
          timeout={{ enter: 1000, exit: 300 }}
        >
          <div>
            <h4 style={{ color: color || '#FF0000' }}>{message}</h4>            
          </div>
        </CSSTransition>}
    </TransitionGroup>
  )
}

export default ErrorNote

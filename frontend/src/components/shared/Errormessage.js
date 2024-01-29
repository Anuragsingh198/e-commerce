import React from 'react'
import { Alert } from 'react-bootstrap'
const Errormessage = ({variant,children}) => {
  return (
    <Alert variant={variant}>
          {children}
        </Alert>

  )
}

export default Errormessage
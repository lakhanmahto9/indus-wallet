import React from 'react'
import ManagePassword from './ManagePassword'

const HomeSecure = ({children}) => {
  return (
    <ManagePassword>
        <div>{children}</div>
    </ManagePassword>
  )
}

export default HomeSecure
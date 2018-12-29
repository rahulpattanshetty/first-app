import React from "react";
import { Link } from 'react-router-dom'

function UserDetail(props) {
  return(
    <li><Link to={{
      pathname: `/users/${props.id}`,
      state: {
        user: {
          id: props.id,
          name: props.name,
          username: props.username,
          email: props.email
        }
      }
    }}>{props.name}</Link></li>
  )
}

export default UserDetail
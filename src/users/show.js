import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

function ShowUser(props){
  const { id, name, email, username} = props.location.state.user
  return(
    <div>
      <h2>User Details id {props.match.params.id}</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{username}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/users"> list users</Link>
    </div>
  )
}


export default ShowUser
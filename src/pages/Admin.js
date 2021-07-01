import React, { useState } from 'react';
import Header from './../components/Header';

function Admin(props) {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [sizes, setSizes] = useState("")
  const [department, setDepartment] = useState("mens")

  const handleSubmit = event => {
    event.preventDefault();
    props.createShoe(name, price, imgUrl, sizes, department)
  }

  return (
    <>
      <Header
        title='Admin'
      />
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          Create
          <input onChange={event => setName(event.target.value)} placeholder="Name" required></input>
          <input onChange={event => setPrice(event.target.value)} placeholder="Price" type='number' min ='0' required></input>
          <input onChange={event => setImgUrl(event.target.value)} placeholder="Image URL" required></input>
          <textarea onChange={event => setSizes(event.target.value)} required></textarea>
          <select selected='mens' onChange={event => setDepartment(event.target.value)} placeholder="Department" required>
            <option value='mens'>Mens</option>
            <option value='womens'>Womens</option>
            <option value='kids'>Kids</option>
          </select>
          <button type='submit'>Create Shoe</button>
        </form>
      </div>

      <div>
        Read
        Delete
        Update
        {JSON.stringify(props.shoes)}
        // add delete button
      </div>
    </>
  )
}

export default Admin;

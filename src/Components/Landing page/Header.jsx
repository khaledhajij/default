import React from 'react'

const Header = () => {
  const listItems = ['Home', 'Radar', 'Main Dashboard'].map(e => <li>{e}</li>)
  return (
    <div className='header'>
      <div className='container'>
        <p className='title'>Adam Radar</p>
        <ul>
          {listItems}
          <li className='logout'>Logout</li>
        </ul>
      </div>
    </div>
  )
}

export default Header

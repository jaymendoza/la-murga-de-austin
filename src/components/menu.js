import React from 'react'
import { Link } from "gatsby"

const Menu = () => (
  <div style={{
    background: '#00B140',
    paddingTop: '5px',
    paddingBottom: '32px',
    height: '2em'
  }}>
   
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/songlist">Songs</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
)

export default Menu

import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return (
        <div> 
          <p>Cloudchip makes intelligent and sustainable products in IoT
              which helps to Capture, Monitor, Manage and Analyze the IoT Data.</p><br/>
          <Link to="/">homepage</Link>
        </div>
      )
}

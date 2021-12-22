import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
      this.initialstate = {
        items : []
      }
     this.state = this.initialstate;
  }

  GetData=()=>
  {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json =>{
      this.setState({
        isloaded : true,
        items : json
      })
    });
  }

  reset = ()=>
  {
    this.setState({items : this.initialstate.items});
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>
          <Link to="/about">About Us </Link>
          <Link to="/contact">Contact Us </Link>
          <Link to="/profile">My Profile </Link>
          <Link to="/api">My Api Data </Link>


        </p>
        <button type = "button" onClick={this.component}>Get Data</button>

      <ul>
        {this.state.items.map(item => (
          <li key = {item.id}>
             id : {item.id} 
              title : {item.title}
          </li>
        ))}
      </ul>
      
      <button type = "button" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

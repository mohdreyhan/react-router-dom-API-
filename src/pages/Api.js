import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const results = await fetch("https://jsonplaceholder.typicode.com/users");
      const apiData = await results.json();
      this.setState({
        data: apiData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <TableHeader />
          <TableBody data={this.state.data} />
        </Table>
        <Link to = "/"> HomePage</Link>
      </React.Fragment>
    );
  }
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>SNo.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
    </thead>
  );
}

function TableBody(props) {
  const apiData = props.data;
  const results = apiData.map((value, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
        <td>{value.phone}</td>
        <td>{value.website}</td>
      </tr>
    );
  });
  return <tbody>{results}</tbody>;
}

export default Api;

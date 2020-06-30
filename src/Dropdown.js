import React, { Component } from 'react';
import './Dropdown.css';
const elements = ['Tom', 'Tony', 'Hello','Jerry', 'Stark', 'World'];

class Dropdown extends Component{

  constructor(props) {
    super(props); 
    this.state = { [this.props.id ]: ' '};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const name = event.target.value;
    this.setState({
      [this.props.id]: name,
      apiResponse: ''  
    })
    this.props.onDropdown(name); 
  }
//   callAPI() {
//     fetch("http://localhost:4444/concat")
//         .then(res => res.text())
//         .then(res => {
//           const resName = (res)
//           this.setState({ apiResponse: resName })
//         } );
// }

// componentDidMount() {
//     this.callAPI();
// }
  render(){
    return (
      <div>
        <select id="id" name={this.props.id} value={this.state.value} onChange={this.handleChange} >
          {elements.map((value, index) => {
            return <option key={index} >{value}</option >
          })}
        </select> 
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
}}

export default Dropdown;
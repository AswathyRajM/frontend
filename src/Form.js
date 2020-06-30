import React, { Component } from 'react';
import Dropdown from './Dropdown';
import './Form.css';

class Form extends Component{

    constructor(props) {
        super(props); 
        this.state = { fname: 'Tom',
                        lname: 'Tom',
                        fullName:''};
        this.showNames = this.showNames.bind(this);
      }
     updateFName = (nameObj) => {
        this.setState({
            fname : nameObj
        })
    }
    updateLName = (nameObj) => {
        this.setState({
            lname : nameObj
        })
    }
    showNames(){
        const fname = this.state.fname;
        const lname = this.state.lname;
        if(fname !==' ' && lname !== ' '){
        
        

        fetch('http://localhost:4444/concat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: fname,
            lastName: lname,
          })
        }).then(res => res.text())
        .then(res => {
          const resName = (res)
          console.log(resName)
        } );

    }
    }
    render(){
        let showName
        if(this.state.fullName!==''){
            showName = <div>
                <h3>Results</h3>
                <p>First Name : {this.state.fname}</p>
                <p>Last Name : {this.state.lname }</p>
                <p>Full Name : {this.state.fullName}</p>
            </div>
        }
    return(
        <div>
            <div className="drop-downs ">
                <Dropdown name="fname" id="fname" onDropdown={this.updateFName}/>
                <Dropdown name="lname" id="lname" onDropdown={this.updateLName}/>
            </div>
            <button onClick={this.showNames}>Submit</button>
            {showName}
        </div>
    );}
}

export default Form;
import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:""
        }
    }

    valueChange = (event)=> this.setState({name:event.target.value});
    
    submitFom(){
       alert("welcome "+this.state.name)
    }
    render(){
        return (
            <div>
                <input type="text" placeholder='Enter your name' onChange={this.valueChange}></input>
                <br/>
                <button onClick={()=>this.submitFom()}>submit form</button>
            </div>
        );
    }
}

export default FormComponent;
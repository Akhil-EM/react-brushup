import React, { Component } from 'react';

class CounterComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    incrementer(){
      //re collecting the old state value 
      //prevState,props are two parameters available
      this.setState((prevState)=>({count:prevState.count+1}));
      console.log(this.state.count);
    }
    render() {
        return (
            <div>
                counter  {this.state.count}<br/>
                <button onClick={()=>this.incrementer()}>Increment count</button>
            </div>
        );
    }
}

export default CounterComponent;
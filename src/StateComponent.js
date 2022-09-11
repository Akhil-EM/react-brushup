import React, { Component } from 'react';

class StateComponent extends Component {
    constructor(){
      super();

      this.state = { 
         message:"Welcome user"
      }

    }
    
    subscribeApp = ()=>{
        //function used to change state
        this.setState({message:"thank you for subscribing us!!"})
    }
    render() {
        return (
            <div>
                 {this.state.message}
                 <br></br>
                 <button onClick={this.subscribeApp}>subscribe</button>
            </div>
        );
    }
}

export default StateComponent;
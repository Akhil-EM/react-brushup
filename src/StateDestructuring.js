import React, { Component } from 'react';

class StateDestructuring extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Akhil",
             age:12
        }
    }
    
    render() {
        //with out structuring 
        // return (
        //     <div>
        //         welcome {this.state.name} . you can {this.state.age >= 10 ?"vote":"not vote"} now.
        //     </div>
        // );

        //with de structuring 
        let {name,age} = this.state;

        return(
             <div>
                  welcome {name} . you can {age >= 18 ?"vote":"not vote"} now.
             </div>
        );

    }
}

export default StateDestructuring;
import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loginStatus:"active"
        }

        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus(){
        this.setState({loginStatus:"inactive"});
    }
    
    render() {
        return (
            <div>
                user is now {this.state.loginStatus}

                <ChildComponent changeStatus={this.changeStatus}/>
            </div>
        );
    }
}

export default ParentComponent;
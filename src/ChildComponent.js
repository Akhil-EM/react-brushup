import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.changeStatus()}>change status</button>
            </div>
        );
    }
}

export default ChildComponent;
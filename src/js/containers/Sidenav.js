import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Sidenav extends Component {
    constructor() {
        super();
        
        this.state = {
            categories : ['abcd','efgh']    
        }
    }

    render () {
        return (
            <div className="categories-sidenav">
                <ul>
                    {this.state.categories.map(c => <li>${c}</li>)}
                </ul>
            </div>
        )
    }
}

const wrapper = document.getElementById("online-order-pos");
wrapper ? ReactDOM.render(<Sidenav/>, wrapper) : false;

export default Sidenav

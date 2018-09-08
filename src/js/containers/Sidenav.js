import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Sidenav extends Component {
    constructor() {
        super();
        
        this.state = {
            categories : []    
        }
    }

    render () {
        return (
            <div className="categories-sidenav">
                <ul>
                {this.state.categories.map(c => `<li>${c}</li>`)}
                </ul>
            </div>
        )
    }   
}

export default Sidenav

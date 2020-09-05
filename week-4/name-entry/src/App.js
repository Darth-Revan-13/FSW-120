import React, {Component} from "react"
import List from "./List"
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            smallList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    addToList=(event) => {
        event.preventDefault();
        this.setState({
            smallList: this.state.smallList.concat(this.state.firstName + " " + this.state.lastName)
        })
    }
    
    render() {
        return (
            <div>
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <button onClick={this.addToList}>Submit</button>
            </form>
            <List notlists={this.state.smallList}/>
            
            </div>
        )
    }
}

export default App
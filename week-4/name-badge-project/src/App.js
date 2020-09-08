import React, {Component} from "react"
import List from "./List"
class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            nameItem: [],
            phoneItem: "",
            placeOfBirthItem: "",
            favoriteFoodItem: "",
            emailItem: "",
            aboutYouItem: "",
            lastName: "",
            phone: "",
            placeOfBirth: "",
            favoriteFood: "",
            email: "",
            aboutYou: "",
            badge: []
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
            // badge: this.state.badge.concat("Name: " + this.state.firstName + " " + this.state.lastName + "Phone: " + this.state.phone + "\n" + "Place of Birth: " + this.state.placeOfBirth + "Favorite Food: " + this.state.favoriteFood + "\n" + "Email: " + this.state.email + "\n" + this.state.aboutYou)

            nameItem: this.state.nameItem.concat(this.state.firstName + " " + this.state.lastName),
            phoneItem: this.state.phone,
            placeOfBirthItem: this.state.placeOfBirth,
            favoriteFoodItem: this.state.favoriteFood,
            emailItem: this.state.email,
            aboutYouItem: this.state.aboutYou
        })
    }
    
    render() {
        return (
            <div>
                <center>
                    <div id="formDiv">
                        <form>
                            <input 
                                type="text" 
                                value={this.state.firstName} 
                                name="firstName" 
                                placeholder="First Name" 
                                min="3"
                                required
                                class="inputSmall"
                                onChange={this.handleChange} 
                            />
                            <input 
                                type="text" 
                                value={this.state.lastName} 
                                name="lastName" 
                                placeholder="Last Name" 
                                min="3"
                                required
                                class="inputSmall"
                                onChange={this.handleChange} 
                            />
                            <br />
                            <input 
                                type="text"
                                value={this.state.placeOfBirth}
                                name="placeOfBirth"
                                placeholder="Place Of Birth"
                                min="3"
                                required
                                class="inputSmall"
                                onChange={this.handleChange}
                            />
                            <input
                                type="email"
                                value={this.state.email}
                                name="email"
                                placeholder="Email"
                                min="3"
                                required
                                class="inputSmall"
                                onChange={this.handleChange}
                            />
                            <br />
                            <input 
                                type="tel"
                                value={this.state.phone}
                                name="phone"
                                placeholder="Phone Number"
                                required
                                class="inputSmall"
                                onChange={this.handleChange}
                            />
                            <input
                                type="text"
                                value={this.state.favoriteFood}
                                name="favoriteFood"
                                placeholder="Favorite Food"
                                min="3"
                                required
                                class="inputSmall"
                                onChange={this.handleChange}
                            />
                            <div id="pInputBox">
                                <input
                                    type="text"
                                    value={this.state.aboutYou}
                                    name="aboutYou"
                                    placeholder="Tell us about yourself"
                                    min="3"
                                    required
                                    class="inputSmall"
                                    onchange={this.handleChange}
                                />
                            </div>
                            <button onClick={this.addToList}>Submit</button>
                        </form>
                    </div>
                        <div id="submittedBadgeBox">
                            Name: <List badgeList={this.state.nameItem}/> Phone: <List badgeList={this.state.phoneItem}/>
                            <br/>
                            Place Of Birth: <List badgeList={this.state.placeOfBirthItem}/> Favorite Food: <List badgeList={this.state.favoriteFoodItem}/>
                            <br/>
                            Email: <List badgeList={this.state.emailItem}/>
                            <br/>
                            <div id="aboutYouBox">
                                <List badgeList={this.state.aboutYouItem}/>
                            </div>
                        </div>
                </center>
            </div> 
        )
    }
}

export default App
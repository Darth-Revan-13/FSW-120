import React from 'react';
import Tweet from './Tweet';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            authorName: "",
            tweetText: "",
            atName: "",
            date: "",
            time: "",
            authorNameItem: "",
            tweetTextItem: "",
            atNameItem: "",
            dateItem: "",
            timeItem: "",
            dateAndTimeItem: []
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

            authorNameItem: this.state.authorName,
            tweetTextItem: this.state.tweetText,
            atNameItem: this.state.atName,
            dateItem: this.state.date,
            timeItem: this.state.time,
            dateAndTimeItem: this.state.dateAndTimeItem.concat(this.state.date + " " + this.state.time)
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
                                value={this.state.authorName} 
                                name="authorName" 
                                placeholder="Author Name" 
                                min="3"
                                required
                                onChange={this.handleChange} 
                            />
                            <input
                                type="text"
                                value={this.state.atName}
                                name="atName"
                                placeholder="@name here..."
                                min="3"
                                required
                                onchange={this.handleChange}
                            />
                            <input
                                type="date"
                                value={this.state.date}
                                name="date"
                                placeholder="Date"
                                required
                                onchange={this.handleChange}
                            />
                            <input
                                type="time"
                                value={this.state.time}
                                name="time"
                                placeholder="Time"
                                required
                                onchange={this.handleChange}
                            />
                            <br/>
                            <input 
                                type="text" 
                                value={this.state.tweetText} 
                                name="tweetText" 
                                placeholder="Type your message here..." 
                                min="3"
                                required
                                onChange={this.handleChange} 
                            />
                            <button onClick={this.addToList}>Tweet</button>
                        </form>
                    </div>
                        <div id="tweetList">
                            <Tweet completedTweet = {this.state.authorNameItem}/> <Tweet completedTweet = {this.state.atNameItem}/> <Tweet completedTweet = {this.state.dateAndTimeItem}/> <br/>
                            <Tweet completedTweet = {this.state.tweetTextItem}/>
                            <br/>

                        </div>
                </center>
            </div> 
        )
    }
}


export default App;
import React from 'react';
import Tweet from './Tweet';
import './styles.css';
import './images.jpg';

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
            dateAndTimeItem: [],
            completedTweet: []
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
            authorNameItem: this.state.authorName,
            tweetTextItem: this.state.tweetText,
            atNameItem: this.state.atName,
            dateItem: this.state.date,
            timeItem: this.state.time,
            dateAndTimeItem: this.state.dateAndTimeItem.concat(this.state.date + " " + this.state.time),
            completedTweet: this.state.completedTweet.concat(`${this.state.authorName} @${this.state.atName} ${this.state.date} ${this.state.time} | ${this.state.tweetText}`)
        })
    }
    
    render() {
        return (
            <div>
                <center>
                    <h2><img src="./images.jpg"/> Not Twitter <img src="./images.jpg"/></h2>
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
                                onChange={this.handleChange}
                            />
                            <input
                                type="date"
                                value={this.state.date}
                                name="date"
                                placeholder="Date"
                                required
                                onChange={this.handleChange}
                            />
                            <input
                                type="time"
                                value={this.state.time}
                                name="time"
                                placeholder="Time"
                                required
                                onChange={this.handleChange}
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
                        <div>
                            {/* <Tweet completedTweet = {this.state.authorNameItem}/> <Tweet completedTweet = {this.state.atNameItem}/> <Tweet completedTweet = {this.state.dateAndTimeItem}/> <br/>
                            <Tweet completedTweet = {this.state.tweetTextItem}/> */}
                            <Tweet tweetLists={this.state.completedTweet}/>
                            <br/>
                        </div>
                </center>
            </div> 
        )
    }
}


export default App;
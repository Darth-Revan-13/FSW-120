import React from 'react';
import data from './data.json';
import SuperHero from './SuperHero';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            superheroData: data
        }
    }
    render(){
        const theMap = this.state.superheroData.map(item => <SuperHero key={item.name} name={item.name} show={item.show} imageName={item.imageName} catchPhrase={item.catchPhrase}/>)

        return(
            <div>
                {theMap}
            </div>
        )
    }
}

export default App;
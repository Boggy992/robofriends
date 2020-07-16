import React,{ Component } from 'react'
import Searchbox from './Searchbox'
import CardList from './CardList'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'
import './App.css'

class App  extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(users => {
          this.setState({ robots: users })   
        })
    }
    // uvek mora arrow function u objketu da bi upucivalo na klasu App a ne na input u Searchbox.js
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })   
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())  
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return (
            <div className='tc'>
                <h1>Robofriends</h1>
                <Searchbox searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            )    
        }
    }
}

export default App
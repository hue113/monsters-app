import React, { Component } from 'react'
import './MonsterApp.css'
import { CardList } from './card-list/card-list.component'
import { SearchBox } from './search-box/search-box.component'


export default class MonsterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleInput(e) {
        this.setState({ searchField: e.target.value})
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
        // console.log(filteredMonsters)

        return (
            <div className="MonsterApp">
                <h1>Monsters Search</h1>
                <SearchBox onChange={(e)=> this.handleInput(e)}/>
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

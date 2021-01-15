import React from 'react'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <p><strong>Controlled input:</strong> {this.state.input}</p>
            </>
        )
    }
}
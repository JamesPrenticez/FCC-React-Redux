import React from 'react'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            submit: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
        submit: this.state.input    
        })
    }
    

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            
            <input value={this.state.input} onChange = {this.handleChange.bind(this)}></input>

            <button type='submit'>Submit</button>
            </form>
            
            <p><strong>Submit Value:</strong> {this.state.submit}</p>

            </>
        )
    }
}
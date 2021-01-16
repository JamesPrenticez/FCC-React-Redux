import React from 'react'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }))
    }
    reset() {
        this.setState(state => ({
            count: state.count = 0
        }))
    }

    render() {
        return (
        <>
            <button className='inc' onClick={this.increment}>Increment!</button>
            <button className='dec' onClick={this.decrement}>Decrement!</button>
            <button className='reset' onClick={this.reset}>Reset</button>
            <p><strong>Current Count:</strong> {this.state.count}</p>
        </>
        )
    }
}
import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.startTime = Date.now();
        this.state = {time : this.startTime };
    }
    componentDidMount() {
        setInterval( () => {
            this.setState({time: Date.now()})
        }, 1);
    }
    render() {
        return (
           <div>{`${this.state.time - this.startTime}`}</div> 
        );
    }
}

export default Clock;
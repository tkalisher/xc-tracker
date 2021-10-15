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
        function formatTime(ms) {
            ms_zero = ('000000'+ms).slice(ms.toString().length);
            return ms_zero.substring(0, 2)+':'+ms_zero.substring(2, 4)+'.'+ms_zero.substring(4, 6);
        }
        return (
           <div>{`${formatTime(this.state.time - this.startTime)}`}</div> 
        );
    }
}

export default Clock;

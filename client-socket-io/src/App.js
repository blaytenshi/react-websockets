import React from 'react';
import io from 'socket.io-client';

class App extends React.Component {

    state = {
        message: '',
        connected: false
    };

    componentDidMount() {
        const socket = io('/spaSocketServer');

        socket.on('connect', () => {
            this.setState({
                connected: true
            })
        });

        socket.on('command', () => {
            console.log("New Command Received.");
        });

        socket.on('status', () => {
            console.log("New Status Update Received.");
        });

        socket.on('disconnect', () => {
            this.setState({
                connected: false
            })
        });
    }

    render() {
        return (
            <div>
                <h1>Welcome to Websockets you nerds!</h1>
                <div>Connected: {this.state.connected}</div>
                <div>Message Received is: {this.state.message}</div>
            </div>
        )
    }
}

export default App;

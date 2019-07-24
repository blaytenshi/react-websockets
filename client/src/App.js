import React from 'react';

class App extends React.Component {

    state = {
        message: ''
    };

    componentDidMount() {
        const ws = new WebSocket("ws://localhost:8080");

        ws.onopen = () => {
            console.log('connection opened!');
            ws.send(
                JSON.stringify({
                    event: 'ben',
                    data: 'something'
                })
            );
        };

        ws.onmessage = (data) => {
            console.log(data.data);
            this.setState({
                message: data.data
            });
        };
    }

    render() {
        return (
            <div>
                <h1>Welcome to Websockets you nerds!</h1>
                <div>Message Received is: {this.state.message}</div>
            </div>
        )
    }
}

export default App;

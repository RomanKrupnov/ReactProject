<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Layout.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
>>>>>>> Stashed changes


let messages = ['Сообщение Олегу', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;

const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
<<<<<<< Updated upstream
    <MessageField messages={ messages } />,
    document.getElementById('root'),
);
=======
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'),
)
>>>>>>> Stashed changes

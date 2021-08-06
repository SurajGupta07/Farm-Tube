import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { VideoProvider } from './contexts/VideoContext';
import { LikeProvider } from './contexts/likeContext';
import { AuthProvider } from './contexts/authContext';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#333335" 
        },
        secondary: {
          main: "#A78BFA"
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
    <AuthProvider>
    <VideoProvider>
    <LikeProvider>
    <Router>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Router>
    </LikeProvider>
    </VideoProvider>
    </AuthProvider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

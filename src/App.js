import React from 'react'
import Header from './components/Header'
import { Helmet } from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'

const App = () => (
	<div className="App">
		<Helmet>
			<meta charSet="utf-8" />
            <title>Adam's Wonderful Wild Weekend in Walla Walla Washington</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <CssBaseline />
		<Header />
		<div className="background">
			<Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh', opacity: '0.1' }} />
		</div>
	</div>
)
export default App

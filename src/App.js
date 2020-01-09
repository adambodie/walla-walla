import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Columns from './components/Columns'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'
import { CssBaseline } from '@material-ui/core/'

const App = () => (
	<div className="App" style={{background: `url('/background.jpg') no-repeat center fixed`, backgroundSize: 'cover'}}>
		<Helmet>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Adam's Wonderful Wild Weekend in Walla Walla Washington</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
        <CssBaseline />
		<Header />
		<Carousel />
		<Columns />
		<Footer/>
	</div>
)
export default App

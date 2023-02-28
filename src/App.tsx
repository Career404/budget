import React from 'react'
import './App.css'
import Footer from './coponents/footer/Footer'
import Nav from './coponents/nav/Nav'

const navLinks = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About',
		url: '/about',
	},
	{ name: 'Login', url: '/login' },
]

export default function App() {
	return (
		<div className="App">
			<div className="py-[25px]"></div>
			<Nav title="Budget Tracker" links={navLinks} />
			<Footer />
		</div>
	)
}

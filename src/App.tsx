import React from 'react'
import './App.css'
import Footer from './coponents/footer/Footer'
import Nav from './coponents/nav/Nav'
import Hero from './coponents/hero/Hero'

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
			<Hero title="Money is hard" subtitle="Google sheets can help" />
			<Footer />
		</div>
	)
}

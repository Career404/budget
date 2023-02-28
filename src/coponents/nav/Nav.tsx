import React from 'react'
import './Nav.css'
type NavProps = {
	title: string
	links: Array<{ name: string; url: string }>
}

export default function Nav({ title, links }: NavProps) {
	return (
		<header>
			<h1>{title}</h1>
			<nav>
				<ul>
					{links.map((link) => (
						<li key={link.name}>
							<a href={link.url}>{link.name}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

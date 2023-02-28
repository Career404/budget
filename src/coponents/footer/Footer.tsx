import React from 'react'
import './Footer.css'

export default function Footer({ children }: any) {
	return (
		<footer className="footer">
			{children}
			<p>
				Icons:{' '}
				<a
					href="https://www.flaticon.com/free-icons/gachapon"
					title="Freepik icons"
				>
					Freepik
				</a>
			</p>
			<p>Copyright &copy; 2023</p>
		</footer>
	)
}

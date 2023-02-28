import React from 'react'
import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

export default function Footer({ children }: any) {
	return (
		<footer className="Footer">
			{children}
			<p>
				Icons:{' '}
				<a
					href="https://www.flaticon.com/free-icons/gachapon"
					title="Freepik icons"
				>
					Freepik
				</a>
				, <a href="https://react-icons.github.io/react-icons">React-Icons</a>
			</p>
			<a href="https://github.com/Career404" target="blank">
				<FaGithub />
			</a>
			<a href="https://www.linkedin.com/in/dzhukov404/">
				<FaLinkedin />
			</a>
			<a href="https://t.me/zhukontime" target="blank">
				<FaTelegram />
			</a>
			<p>Copyright &copy; 2023</p>
		</footer>
	)
}

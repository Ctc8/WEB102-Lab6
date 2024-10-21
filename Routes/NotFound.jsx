import { Outlet, Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div>
			<p>There is nothing here!</p>
			<Link style={{ color: "white" }} to="/">
				Home
			</Link>
		</div>
	)
}

export default NotFound
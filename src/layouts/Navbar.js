import { Link, useMatch, useResolvedPath } from "react-router-dom"

// Linking Functionality
// css class names and tags
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        EZWatts
      </Link>
      <ul>
        <CustomLink to="create/Create">Create</CustomLink>
        <CustomLink to="Contact">Contact Us</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
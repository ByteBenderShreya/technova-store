import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container not-found-page fade-in">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">Go Home</Link>
    </div>
  )
}
export default NotFound
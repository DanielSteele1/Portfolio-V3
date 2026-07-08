import { Link, useLocation } from "react-router";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = '';

  const pathCrumbs = location.pathname
    .split('/')
    .filter(crumb => crumb !== '');

  // Include home page manually
  const crumbs = [
    <div className="crumb" key="home">
      <Link to="/">Home</Link>
      {pathCrumbs.length > 0 && ' / '}
    </div>,

    ...pathCrumbs.map((crumb, i) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
          {i < pathCrumbs.length - 1 && ' > '}
        </div>
      );
    }),
  ];

  return <>{crumbs}</>;
}
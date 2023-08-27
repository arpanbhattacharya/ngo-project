import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <div className="bg-primary py-3 top-bar shadow d-none d-md-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-md-left pl-0">
                <Link to="#" className=" pr-3 pl-0">
                  Home
                </Link>
                <Link to="#" className="p-3">
                  Events
                </Link>
                <Link to="#" className="p-3">
                  Become A Volunteer
                </Link>
              </div>
              <div className="col-md-6 text-md-right">
                <Link to="#" className="p-3">
                  <span className="icon-twitter" />
                </Link>
                <Link to="#" className="p-3">
                  <span className="icon-facebook" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

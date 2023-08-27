import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="site-footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-7">
                  <h2 className="footer-heading mb-4">About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem modi, quaerat laborum id fugit blanditiis ratione
                    delectus assumenda.
                  </p>
                </div>
                <div className="col-md-4 ml-auto">
                  <h2 className="footer-heading mb-4">Features</h2>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="#">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="#">Terms of Service</Link>
                    </li>
                    <li>
                      <Link to="#">Privacy</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="mb-5">
                <h2 className="footer-heading mb-4">Subscribe to Newsletter</h2>
                <form action="#" method="post" className="footer-suscribe-form">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control rounded-0 border-secondary text-white bg-transparent"
                      placeholder="Enter Email"
                      aria-label="Enter Email"
                      aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary text-white"
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <h2 className="footer-heading mb-4">Follow Us</h2>
              <Link to="#about-section" className="smoothscroll pl-0 pr-3">
                <span className="icon-facebook" />
              </Link>
              <Link to="#" className="pl-3 pr-3">
                <span className="icon-twitter" />
              </Link>
              <Link to="#" className="pl-3 pr-3">
                <span className="icon-instagram" />
              </Link>
              <Link to="#" className="pl-3 pr-3">
                <span className="icon-linkedin" />
              </Link>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="pt-5">
                <p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{" "}
                  <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
                  <Link to="https://colorlib.com" target="_blank">
                    Colorlib
                  </Link>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

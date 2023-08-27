import { Link } from "react-router-dom";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  let [events, setEvents] = useState([]);

  async function getEvents() {
    var resp = await axios.get("http://localhost:4000/events/sel");
    var resp2 = await resp.data;
    setEvents(resp2);
  }
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="owl-carousel-wrapper">
          <div className="box-92819">
            <h1 className="text-white mb-3">
              Join The Movement To end Child Poverty
            </h1>
            <p>
              <Link to="#" className="btn btn-primary py-3 px-4 rounded-0">
                Donate Now
              </Link>
            </p>
          </div>
          <div className="owl-carousel owl-1 ">
            <div
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
            />
            <div
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: 'url("images/hero_2.jpg")' }}
            />
            <div
              className="ftco-cover-1 overlay"
              style={{ backgroundImage: 'url("images/hero_3.jpg")' }}
            />
          </div>
        </div>
        <div className="container">
          <div
            className="feature-29192-wrap d-md-flex"
            style={{ marginTop: "-20px", position: "relative", zIndex: 2 }}
          >
            <Link
              to="#"
              className="feature-29192 overlay-danger"
              style={{ backgroundImage: 'url("images/img_3_gray.jpg")' }}
            >
              <div className="text">
                <span className="meta">Livelihood</span>
                <h3 className="text-cursive text-white h1">Livelihood</h3>
              </div>
            </Link>
            <Link
              className="feature-29192 overlay-success"
              style={{ backgroundImage: 'url("images/img_2_gray.jpg")' }}
            >
              <div className="text">
                <span className="meta">Health</span>
                <h3 className="text-cursive text-white h1">Natural Remedies</h3>
              </div>
            </Link>
            <div
              className="feature-29192 overlay-warning"
              style={{ backgroundImage: 'url("images/img_1_gray.jpg")' }}
            >
              <div className="text">
                <span className="meta">School</span>
                <h3 className="text-cursive text-white h1">New Class Rooms</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5 align-items-st">
              <div className="col-md-4">
                <div className="heading-20219">
                  <h2 className="title text-cursive">Latest Causes</h2>
                </div>
              </div>
              <div className="col-md-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  ea reprehenderit rerum magnam, ipsum aperiam. Earum, expedita
                  ratione.
                </p>
              </div>
            </div>
            {events.map((ev) => (
              <div className="d-inline-flex" key={ev._id}>
                <div className="col-md-4 mx-auto">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top img-fluid"
                      src={"http://localhost:4000/" + ev.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{ev.name}</h5>
                      <p className="card-text">{ev.desc}</p>
                      <a className="btn btn-primary">
                        Donate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="bg-image overlay site-section"
          style={{ backgroundImage: 'url("images/hero_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="row mb-5">
                  <div className="col-md-7">
                    <div className="heading-20219">
                      <h2 className="title text-white mb-4 text-cursive">
                        Why Choose Us
                      </h2>
                      <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deserunt ipsam repellendus voluptatum, totam magni
                        iusto numquam quo eos dolor perferendis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-5">
                    <div className="feature-29012 d-flex">
                      <div className="number mr-4">
                        <span>1</span>
                      </div>
                      <div>
                        <h3>Odit Reiciendis</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nisi id sint explicabo odit reiciendis eaque
                          accusamus labore necessitatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="feature-29012 d-flex">
                      <div className="number mr-4">
                        <span>2</span>
                      </div>
                      <div>
                        <h3>Nisi Sint Explicabo</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nisi id sint explicabo odit reiciendis eaque
                          accusamus labore necessitatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="feature-29012 d-flex">
                      <div className="number mr-4">
                        <span>3</span>
                      </div>
                      <div>
                        <h3>Accusamus Labore Necessitatibus</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nisi id sint explicabo odit reiciendis eaque
                          accusamus labore necessitatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-5">
                    <div className="feature-29012 d-flex">
                      <div className="number mr-4">
                        <span>4</span>
                      </div>
                      <div>
                        <h3>Consectetur Dolor Elit</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nisi id sint explicabo odit reiciendis eaque
                          accusamus labore necessitatibus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="heading-20219 mb-5">
              <h2 className="title text-cursive">Latest Event</h2>
            </div>
            {events.map((ev) => (
              <div className="d-inline-flex" key={ev._id}>
                <div className="col-md-4 mx-auto">
                  <img
                    className="ev-img"
                    src={"http://localhost:4000/" + ev.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="site-section bg-image overlay-primary"
          style={{ backgroundImage: 'url("images/img_1.jpg")' }}
        >
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-md-6">
                <img
                  src="images/img_1.jpg"
                  alt="Image"
                  className="img-fluid shadow"
                />
              </div>
              <div className="col-md-6">
                <div className="bg-white h-100 p-4 shadow">
                  <h3 className="mb-4 text-cursive">Donate Now</h3>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amount in dollar"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        defaultValue="Donate Now"
                        className="btn btn-primary"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="d-md-flex cta-20101 align-self-center bg-light p-5">
              <div className>
                <h2 className="text-cursive">
                  Helping the Homeless, Hungry, and Hurtings Children
                </h2>
              </div>
              <div className="ml-auto">
                <Link to="#" className="btn btn-primary">
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;

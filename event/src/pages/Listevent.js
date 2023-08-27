import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Listevent() {
  let [events, setEvents] = useState([]);

  async function getData() {
    let response = await fetch("http://localhost:4000/events/sel");
    let response2 = await response.json();

    setEvents(response2);
  }

  useEffect(() => {
    getData();
  });

  return (
    <>
      {/* Page Wrapper */}

      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Header />
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800">Event Lists</h1>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Event Name</th>
                      <th>Event Venue</th>
                      <th>Event Date</th>
                      <th>Event Desciption</th>
                      <th>Event Image</th>
                      <th>Deletion</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event._id}>
                        <td>{event.name}</td>
                        <td>{event.venue}</td>
                        <td>{event.date}</td>
                        <td>{event.desc}</td>
                        <td>
                          <img
                            className="event_image"
                            src={"http://localhost:4000/" + event.image}
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-danger"
                            onClick={async () => {
                              if (window.confirm("Are you sure?")) {
                                let form = new FormData();

                                form.append("id",event._id);

                                let response = await fetch(
                                  "http://localhost:4000/events/del",
                                  {
                                    method: "POST",
                                    body: form,
                                  }
                                );
                                let response2 = await response.json();
                                getData()
                              }

                            }}
                          >
                            Delete
                          </button>
                        </td>
                        <td><Link to={"/edit-event/"+event._id} className="btn btn-outline-info">Edit</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <Footer />
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}

        {/* Logout Modal*/}
      </div>
    </>
  );
}

export default Listevent;

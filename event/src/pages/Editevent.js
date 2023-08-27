import { useEffect, useState } from "react";
import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Editevent() {
  const param = useParams();

  let navigate = useNavigate();

  let [name, setName] = useState("");
  let [venue, setVenue] = useState("");
  let [date, setDate] = useState("");
  let [image, setImage] = useState(null);
  let [desc, setDesc] = useState("");
  let [imgurl, setImgurl] = useState("");

  async function getdata() {
    var id = param.id;
    var fd = new FormData();
    fd.append("id", param.id);
    var resp = await axios.post("http://localhost:4000/events/edit", fd);
    var edata = resp.data;
    console.log(edata);
    setName(edata.name);
    setVenue(edata.venue);
    setDate(edata.date);
    setDesc(edata.desc);
    setImgurl(edata.image);
  }
  useEffect(() => {
    getdata();
  }, []);

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
                <h1 className="h3 mb-4 text-gray-800">Edit Event</h1>
                <p className="text-gray-800">Event Name</p>
                <p>
                  <input
                    value={name}
                    onChange={(ev) => {
                      setName(ev.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </p>
                <p className="text-gray-800">Event Venue</p>
                <p>
                  <input
                    value={venue}
                    onChange={(ev) => {
                      setVenue(ev.target.value);
                    }}
                    className="form-control"
                    type="text"
                  />
                </p>
                <p className="text-gray-800">Event Date</p>
                <p>
                  <input
                    value={date}
                    onChange={(ev) => {
                      setDate(ev.target.value);
                    }}
                    className="form-control"
                    type="date"
                  />
                </p>
                <p className="text-gray-800">Event Image</p>
                <p>
                  <input
                    onChange={(ev) => {
                      setImage(ev.target.files[0]);
                    }}
                    type="file"
                  />
                </p>
                <p>
                  <img
                    className="event_image"
                    src={"http://localhost:4000/" + imgurl}
                  />
                </p>
                <p className="text-gray-800">Event Description</p>
                <p>
                  <textarea
                    defaultValue={desc}
                    onChange={(ev) => {
                      setDesc(ev.target.value);
                    }}
                    className="form-control"
                  ></textarea>
                </p>
                <p>
                  <button
                    onClick={async () => {
                      let fd = new FormData();

                      fd.append("name", name);
                      fd.append("venue", venue);
                      fd.append("date", date);
                      fd.append("image", image);
                      fd.append("desc", desc);
                      fd.append("id", param.id);

                      let response = await fetch(
                        "http://localhost:4000/events/update",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      let response2 = await response.json();
                      console.log(response2);

                      window.location = "/list-events";
                    }}
                    className="btn btn-outline-primary"
                  >
                    Edit Event
                  </button>
                </p>
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

export default Editevent;

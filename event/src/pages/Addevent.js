import { useState } from "react";
import Sidebar from "../inc/Sidebar";
import Header from "../inc/Header";
import Footer from "../inc/Footer";
import { useNavigate } from "react-router-dom";

function Addevent() {

  let navigate = useNavigate()

  let [name,setName] = useState("")
  let [venue,setVenue] = useState("")
  let [date,setDate] = useState("")
  let [image,setImage] = useState(null)
  let [desc,setDesc] = useState("")

  return (
    <>
      {/* Page Wrapper */}

      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar/>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Header/>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800">Add Event</h1>
                <p className="text-gray-800">Event Name</p>
                <p><input onChange={(ev)=>{
                  setName(ev.target.value)
                }} className="form-control" type="text"/></p>
                <p className="text-gray-800">Event Venue</p>
                <p><input onChange={(ev)=>{
                  setVenue(ev.target.value)
                }} className="form-control" type="text"/></p>
                <p className="text-gray-800">Event Date</p>
                <p><input onChange={(ev)=>{
                  setDate(ev.target.value)
                }} className="form-control" type="date"/></p>
                <p className="text-gray-800">Event Image</p>
                <p><input onChange={(ev)=>{
                  setImage(ev.target.files[0])
                }} type="file"/></p>
                <p className="text-gray-800">Event Description</p>
                <p><textarea onChange={(ev)=>{
                  setDesc(ev.target.value)
                }} className="form-control"></textarea></p>
                <p><button onClick={async()=>{

                  let fd = new FormData()

                  fd.append("name",name)
                  fd.append("venue",venue)
                  fd.append("date",date)
                  fd.append("image",image)
                  fd.append("desc",desc)

                  let response = await fetch("http://localhost:4000/events/add",{
                    method:'POST',
                    body:fd,
                  })
                  let response2 = await response.json()

                  window.location="/add-event"

                }} className="btn btn-outline-primary">Add Event</button></p>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <Footer/>
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

export default Addevent;

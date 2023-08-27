import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Memberlogin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errmsg, setErrmsg] = useState("");

  let navigate = useNavigate();

  return (
    <>
      <div className="container form-group">
        {errmsg ? (
          <div className="alert alert-danger" role="alert">
            {errmsg}
          </div>
        ) : (
          ""
        )}
        <p>Email</p>
        <p>
          <input
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            className="form-control"
            type="text"
          />
        </p>
        <p>Password</p>
        <p>
          <input
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            className="form-control"
            type="password"
          />
        </p>
        <p>
          <button
            onClick={async () => {
              let form = new FormData();

              form.append("email", email);
              form.append("password", password);

              let response = await fetch(
                "http://localhost:4000/members/login",
                {
                  method: "POST",
                  body: form,
                }
              );
              let response2 = await response.json();
              console.log(response2)

              if (response2.msg != null) {
                setErrmsg(response2.msg);
                setTimeout(function () {
                  setErrmsg("");
                }, 2000);
              }
              else{
                localStorage.setItem("token",response2.myToken)
                window.location="/dashboard"
              }
            }}
            className="btn btn-outline-primary"
          >
            Register
          </button>
        </p>
      </div>
    </>
  );
}

export default Memberlogin;

import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Member() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate()

  return (
    <>
      <div className="container form-group">
        <p>Name</p>
        <p>
          <input
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            className="form-control"
            type="text"
          />
        </p>
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

              form.append("name", name);
              form.append("email", email);
              form.append("password", password);

              let response = await fetch("http://localhost:4000/members/reg", {
                method: "POST",
                body: form,
              });
              let response2 = await response.json();
              console.log(response2)

              
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

export default Member;

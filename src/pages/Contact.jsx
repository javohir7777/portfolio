import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const Commit = JSON.parse(localStorage.getItem("usercommits"));
  const Commits = Commit["localdata"];
  const initialState = [...Commits];
  const [data, setData] = useState(initialState);
  const [clients, setClients] = useState(...data);

  const handlClick = (e) => {
    setClients((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, clients]);
    localStorage.setItem("usercommits", JSON.stringify({ localdata: data }));
    const Commit = JSON.parse(localStorage.getItem("usercommits"));
    console.log(Commit);
    // document.getElementById("exampleInputUser").value = "";
    // document.getElementById("exampleInputTel").value = "";
    // document.getElementById("exampleInputFam").value = "";
    // document.getElementById("floatingText").value = "";
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <form className="my-5 container" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ismingizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUser"
              name="user"
              aria-describedby="emailHelp"
              onChange={handlClick}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Familiyangizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFam"
              name="surname"
              onChange={handlClick}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Telifon nomeringizni kiriting
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputTel"
              name="number"
              onChange={handlClick}
            />
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingText"
              style={{ height: "100px" }}
              name="textarea"
              onChange={handlClick}
            ></textarea>
            <label htmlFor="floatingTextarea2">
              Sayt haqidagi fikringiz biz uchun muhim
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>

        <table className="table table-hover">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Familya</th>
                <th scope="col">Ism</th>
                <th scope="col">Nomer</th>
                <th scope="col">Komentariya</th>
              </tr>
            </thead>
            <tbody>
              {data.length !== 0
                ? data.map((item, idx) => (
                    <>
                      <tr>
                        <th scope="row">{idx + 1}</th>
                        <td>{item.surname}</td>
                        <td>{item.user}</td>
                        <td>{item.number}</td>
                        <td>{item.textarea}</td>
                      </tr>
                    </>
                  ))
                : ""}
            </tbody>
          </table>
        </table>
      </div>
    </div>
  );
};

export default Contact;

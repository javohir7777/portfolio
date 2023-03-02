import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <form className="my-5 container">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Ismingizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Familiyangizni kiriting
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Telifon nomeringizni kiriting
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">
              Sayt haqidagi fikringiz biz uchun muhim
            </label>
          </div>
          <br />
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </form>

        <table class="table table-hover">
          <table class="table">
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
              <tr>
                <th scope="row">1</th>
                <td>Jumayev</td>
                <td>Javohir</td>
                <td>+9989967867862</td>
                <td>Nima gaplar nima qilib yuribsizlar</td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
    </div>
  );
};

export default Contact;

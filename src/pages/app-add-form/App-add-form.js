import "./App-add-form.css";
function AppAddForm() {
  return (
    <div className="movie-add-form">
      <h3>Yangi kino qo'shish</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Qanday kino?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Necha marta ko'rilgan?"
        />
        <button type="submit" className="btn btn-outline-dark">
          Qo'shish
        </button>
      </form>
    </div>
  );
}

export default AppAddForm;

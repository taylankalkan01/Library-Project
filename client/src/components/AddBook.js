import React from "react";

export default function AddBook({ book, handleChange, addBook }) {
  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="form-floating mb-3">
            <input
              type="text"
              defaultValue={book.bookName}
              onChange={handleChange}
              name="bookName"
              className="form-control"
              id="floatingInput"
              placeholder="Book Name"
            />
            <label for="floatingInput">Book Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              defaultValue={book.author}
              onChange={handleChange}
              name="author"
              className="form-control"
              id="floatingInput"
              placeholder="Author"
            />
            <label for="floatingInput"> Author</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              defaultValue={book.quantity}
              onChange={handleChange}
              name="quantity"
              className="form-control"
              id="floatingInput"
              placeholder="Quantity"
            />
            <label for="floatingInput">Quantity</label>
          </div>

          <div className="form-floating">
            <select
              className="form-select mb-3"
              defaultValue={book.department}
              onChange={handleChange}
              id="floatingSelect"
              name="department"
              aria-label="Floating label select example"
            >
              <option selected>Departments</option>
              <option value="History">History</option>
              <option value="Religious">Religious</option>
              <option value="Music">Music</option>
              <option value="Study & Teaching">Study & Teaching</option>
            </select>
            <label for="floatingSelect">Select Book Department</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              defaultValue={book.comments}
              onChange={handleChange}
              placeholder="Leave a comment here"
              name="comments"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button
            type="button"
            onClick={addBook}
            className="btn btn-primary mt-3"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

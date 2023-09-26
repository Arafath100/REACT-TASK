/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the BooksCollection component, which accepts props like 'data', 'setData', and 'setEdit'
const BooksCollection = ({ data, setData, setEdit }) => {
  // Get the navigation function from 'react-router-dom'
  const navigate = useNavigate();

  // Function to handle editing a book's details
  const handleEdit = (user) => {
    // Set the 'isEditing' property to true for the selected user and navigate to the Books page
    setEdit({ ...user, isEditing: true });
    console.log(user);
    navigate("/Books");
  };

  // Function to handle deleting a book
  const handleDelete = (id) => {
    // Create a copy of the 'data' array
    const updatedData = data;

    // Delete the book at the specified 'id' (index)
    delete updatedData[id];

    // Filter out null values to remove the deleted book and update the 'data' array
    let filteredData = updatedData.filter((data) => data != null);
    setData(filteredData);
  };

  return (
    <div>
      <table className="table table-success table-striped">
        <thead className="bg-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author Name</th>
            <th scope="col">ISBN Number</th>
            <th scope="col">Publication Date</th>
            <th className="col-mt3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data?.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user?.title}</td>
                <td>{user?.author}</td>
                <td>{user?.isbn}</td>
                <td>{user?.date}</td>
                <td>
                  {/* Button to trigger the 'handleEdit' function */}
                  <button
                    className="btn btn-primary ms-2"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>
                  {/* Button to trigger the 'handleDelete' function */}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Export the BooksCollection component
export default BooksCollection;

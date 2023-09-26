/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the AuthorCollection component, which accepts props like 'author', 'setAuthor', and 'setAuthEdit'
const AuthorCollection = ({ author, setAuthor, setAuthEdit }) => {
  // Get the navigation function from 'react-router-dom'
  const navigate = useNavigate();

  // Function to handle editing an author's details
  const handleEdit = (user) => {
    // Set the 'isEditing' property to true for the selected user and navigate to the Author page
    setAuthEdit({ ...user, isEditing: true });
    console.log(user);
    navigate("/Author");
  };

  // Function to handle deleting an author
  const handleDelete = (id) => {
    // Create a copy of the 'author' data
    const updatedData = author;

    // Delete the author at the specified 'id' (index)
    delete updatedData[id];

    // Filter out null values to remove the deleted author and update the 'author' data
    let filteredData = updatedData.filter((data) => data != null);
    setAuthor(filteredData);
  };

  return (
    <div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Author-Name</th>
            <th scope="col">Publication Date</th>
            <th scope="col">BioGraphy</th>
            <th className="col-mt3">Actions</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#081b29", color: "#ededed" }}>
          {console.log(author)}
          {author?.map((user, index) => {
            return (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.date}</td>
                <td>{user?.bio}</td>
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

// Export the AuthorCollection component
export default AuthorCollection;

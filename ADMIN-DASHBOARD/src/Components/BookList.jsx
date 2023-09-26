// Import necessary dependencies and components
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

// Define the Books component, which accepts props like 'data', 'setData', and 'edit'
// eslint-disable-next-line react/prop-types
const Books = ({ data, setData, edit }) => {
  // Get the navigation function from 'react-router-dom'
  const navigate = useNavigate();

  // Initialize the 'formik' form handling
  const formik = useFormik({
    // Set initial form values from 'edit' prop
    initialValues: edit,

    // Define validation schema using 'Yup'
    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      author: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      isbn: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      date: Yup.date().nullable().required("Required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      // Convert 'isbn' to a number and log form values
      values["isbn"] = Number(values.isbn);
      console.log(values);

      // Navigate to "/BooksPage" and reset the form
      navigate("/BooksPage");
      formik.resetForm();

      // If 'isEditing' is true in form values, update the 'data' list
      if (values.isEditing) {
        let a = [];
        for (let x of data) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        // Update the 'data' state
        setData(a);
        console.log("updated value", data);
      } else {
        // Otherwise, add new book details to the 'data' list
        setData([...data, values]);
      }
    },
  });

  // Render the Books component UI
  return (
    <Card style={{ backgroundColor: "#081b29", color: "#ededed" }}>
      <Card.Body>
        <Card.Title>
          <h1 className="text-uppercase" style={{ textAlign: "center", backgroundColor: "#219ebc", color: "white" }}>
            Enter Book-Details
          </h1>
        </Card.Title>
        <br />

        <Form onSubmit={formik.handleSubmit}>
          {/* Form input for Book Title */}
          <Form.Group controlId="title">
            <Form.Label className="text-uppercase">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Book Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
              className="form-control"
            />
            {formik.errors.title ? (
              <Form.Text className="text-danger">
                {formik.errors.title}
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />

          {/* Form input for Author */}
          <Form.Group controlId="author">
            <Form.Label className="text-uppercase">Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Author"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.author}
              className="form-control"
            />
            {formik.errors.author ? (
              <Form.Text className="text-danger">
                {formik.errors.author}
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />

          {/* Form input for ISBN Number */}
          <Form.Group controlId="isbn">
            <Form.Label className="text-uppercase">ISBN Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the ISBN-Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.isbn}
              className="form-control"
            />
            {formik.errors.isbn ? (
              <Form.Text className="text-danger">
                {formik.errors.isbn}
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />

          {/* Form input for Publication Date */}
          <Form.Group controlId="date">
            <Form.Label className="text-uppercase">Publication Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className="form-control"
            />
            {formik.errors.date ? (
              <Form.Text className="text-danger">
                {formik.errors.date}
              </Form.Text>
            ) : null}
          </Form.Group>
          <br />

          {/* Submit button */}
          <div className="d-grid gap-2">
            <Button type="submit" variant="outline-primary">
              Add the Book
            </Button>
          </div>
        </Form>
        <br />
      </Card.Body>
    </Card>
  );
};

// Export the Books component
export default Books;

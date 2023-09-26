// Import necessary dependencies and components
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

// Define the Author component, which accepts props like 'author', 'setAuthor', and 'authedit'
// eslint-disable-next-line react/prop-types
const Author = ({ author, setAuthor, authedit }) => {
  // Get the navigation function from 'react-router-dom'
  const navigate = useNavigate();

  // Initialize the 'formik' form handling
  const formik = useFormik({
    // Set initial form values from 'authedit' prop
    initialValues: authedit,

    // Define validation schema using 'Yup'
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),

      date: Yup.date().nullable().required("Required"),

      bio: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Required"),
    }),
    // Handle form submission
    onSubmit: (values) => {
      // Log form values and navigate to "/AuthorPage"
      console.log(values);
      navigate("/AuthorPage");
      formik.resetForm();

      // If 'isEditing' is true in form values, update the 'author' list
      if (values.isEditing) {
        let a = [];
        for (let x of author) {
          if (x.isEditing) {
            a.push({ ...values, isEditing: false });
          } else {
            a.push(x);
          }
        }
        setAuthor(a);
      } else {
        // Otherwise, add new author details to the 'author' list
        setAuthor([...author, values]);
      }
    },
  });

  // Render the Author component UI
  return (
    <Card style={{ backgroundColor: "#081b29", color: "#ededed" }}>
      <Card.Body>
        <Card.Title>
          <h1 className="text-uppercase" style={{ textAlign: "center", backgroundColor: "#219ebc", color: "white" }}>
            Enter Author-Details
          </h1>
        </Card.Title>
        <br />

        <Form onSubmit={formik.handleSubmit}>
          {/* Form input for Author Name */}
          <Form.Group controlId="name">
            <Form.Label className="text-uppercase">Author-Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Author-Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          {/* Form input for Date of Birth */}
          <Form.Group controlId="date">
            <Form.Label className="text-uppercase">Date-of-Birth:</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter the Date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              isInvalid={formik.touched.date && !!formik.errors.date}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.date}
            </Form.Control.Feedback>
          </Form.Group>
          <br />

          {/* Form input for Author's Short Biography */}
          <Form.Group controlId="bio">
            <Form.Label className="text-uppercase">Enter Short Biography:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter the Biography"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.bio}
              isInvalid={formik.touched.bio && !!formik.errors.bio}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.bio}
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          
          {/* Submit button */}
          <div className="d-grid gap-1">
            <Button type="submit" variant="outline-primary">
              Add the Details
            </Button>
          </div>
          <br />
        </Form>
      </Card.Body>
    </Card>
  );
};

// Export the Author component
export default Author;

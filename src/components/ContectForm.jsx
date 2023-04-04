import React from "react";
import { useFormik } from "formik";

// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <input className="text-input" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

// const MyTextArea = ({ label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <textarea className="text-area" {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//     </>
//   );
// };

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.includes([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) {
    errors.name = "Must not contain numbers";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length < 7) {
    errors.phone = "Must be greater or equal to 7 digits.";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.comment) {
    errors.comment = "Required";
  }

  return errors;
};

const ContectForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      comment: "",
    },
    validate,
    onSubmit: (values, fn) => {
      alert(JSON.stringify(values, null, 2));
      setTimeout(() => {
        fn();
      }, 400);
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone">Telephone Number</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="comment">Comment or Message</label>
          <textarea
            id="comment"
            className="w-full border border-gray-300 rounded text-base p-5 text-[#1c2e4a] outline-none"
            name="comment"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          ></textarea>
          {formik.touched.comment && formik.errors.comment ? (
            <div>{formik.errors.comment}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default ContectForm;

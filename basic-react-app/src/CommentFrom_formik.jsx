import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = "Username cannot be empty!";
    }
    //     else if (values.firstName.length > 15) {
    //      errors.firstName = 'Must be 15 characters or less';
    //    }

    //    if (!values.lastName) {
    //      errors.lastName = 'Required';
    //    } else if (values.lastName.length > 20) {
    //      errors.lastName = 'Must be 20 characters or less';
    //    }

    //    if (!values.email) {
    //      errors.email = 'Required';
    //    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //      errors.email = 'Invalid email address';
    //    }

    return errors;
};

export default function CommentsForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5,
        },
        validate,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));

            // Uncomment these later when you want to add comments to the list
            // addNewComment(values);

            // formik.resetForm();
        },
    });

    let [isValid, setIsValid] = useState(true);

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return {
    //             ...currData,
    //             [event.target.name]: event.target.value,
    //         };
    //     });
    // };

    // let handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (!formData.username) {
    //         console.log("username is null");
    //         setIsValid(false);
    //         return;
    //     }

    //     setIsValid(true);

    //     console.log(formData);

    //     addNewComment(formData);

    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     });
    // };

    return (
        <div>
            <h4>Give a comment!</h4>

            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />

                {!isValid && (
                    <p style={{ color: "red" }}>
                        UserName cannot be empty
                    </p>
                )}

                <br />
                <br />

                {formik.errors.username ? (
                    <p style={{ color: "red" }}>
                        {formik.errors.username}
                    </p>
                ) : null}

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    value={formik.values.remarks}
                    placeholder="add few remarks"
                    onChange={formik.handleChange}
                    id="remarks"
                    name="remarks"
                ></textarea>

                <br />
                <br />

                <label htmlFor="rating">Rating</label>
                <input
                    placeholder="rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    id="rating"
                    name="rating"
                />

                <br />
                <br />

                <button type="submit">Add a Comment</button>
            </form>
        </div>
    );
}
import { useState } from "react";
// import { useFormik } from 'formik'

export default function CommentsForm({ addNewComment }) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5,
    });

    let [isValid, setIsValid] = useState(true);

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {
                ...currData,
                [event.target.name]: event.target.value,
            };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.username) {
            console.log("username is null");
            setIsValid(false);
            return;
        }

        setIsValid(true);

        console.log(formData);

        addNewComment(formData);

        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
    };

    return (
        <div>
            <h4>Give a comment!</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    placeholder="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
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

                <label htmlFor="remarks">Remarks</label>
                <textarea
                    value={formData.remarks}
                    placeholder="add few remarks"
                    onChange={handleInputChange}
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
                    value={formData.rating}
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />

                <br />
                <br />

                <button>Add a Comment</button>
            </form>
        </div>
    );
}
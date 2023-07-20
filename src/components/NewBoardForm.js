import React, { useState } from "react";

const kInitialFormData = {
    title: '',
    owner: '',
};

const NewBoardForm = (props) => {
    // props will need to pass down the handleSubmit function
    const [formData, setFormData] = useState(kInitialFormData);

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.handleBoardSubmit({ ...formData });
        setFormData(kInitialFormData);
      };

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="owner">Board Owner</label>
                <input 
                    type="text"
                    id="owner"
                    name="owner"
                    value={formData.owner}
                    onChange={handleChange}
                />
                <input disabled={((formData.title.length === 0) || (formData.owner.length === 0))} type="submit" value="Submit New Board"/>
            </form>
        </section>
    );
};

export default NewBoardForm;
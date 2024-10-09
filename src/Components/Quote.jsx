import { useState } from "react";
import React from "react";

const Quote = React.forwardRef((props, ref) => {


    const [mailData, setMailData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        description:""
    });

    const handleChange = (e) => {
        setMailData({
            ...mailData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            '/sendmail.php',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mailData)
            }
        );

        // check if response content from server
        if (!response.ok) {
            throw new Error('Network response wes not ok');
        }

        const result = await response.text(); // get origin text message first
        console.log('Raw response', result);
        // parse manually
        const jsonResult = JSON.parse(result);

        if (jsonResult.success) {
            alert('Email sent successfully');
        } else {
            alert('Error sending email' + jsonResult.message);
        }

        setMailData({
            name: "",
            phone: "",
            email: "",
            address: "",
            description: ""
        });

    };


    return (
        <div className="quote-pt">
            <div className="quote-section" onSubmit={handleSubmit}>
                <div id="title-part" ref={ref}>
                    <h1>How can we help?</h1>
                    <p>Please fill in the form to help us understand what you need. We will get back to you as soon as possible.</p>
                </div>
                <form className="quote-form">
                    <label>Name</label>
                    <input type="text" name="name" value={ mailData.name || ""} onChange={handleChange}></input>
                    <label>Email Address</label>
                    <input type="text" name="email" value={ mailData.email || "" } onChange={handleChange}></input>
                    <label>Phone</label>
                    <input type="number" name="phone" value={mailData.phone || ""} onChange={handleChange}></input>
                    <label>Job Address</label>
                    <input type="text" name="address" value={mailData.address || ""}  onChange={handleChange}></input>
                    <label>Job Description</label>
                    <textarea type="text" name="description" id="job-description-input" value={mailData.description || ""}  onChange={handleChange}></ textarea>
                    <p>Please include any information that may help us provide you with a more accurate quote.</p>
                    <div id="quote-submit">
                        <button type="submit" id="quote-submit-btn">Submit your request</button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default Quote;
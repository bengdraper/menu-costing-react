// import { useReducer } from "react";
import { useState } from "react";

const InputForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        number: 0,
        consent: false,
    });

    const submitHandler = async (e) => {
        try {
        e.preventDefault();
        console.log(formData);
        const body = JSON.stringify(formData);
        const response = await fetch("http://localhost:4000/adduser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body
        });
        window.location = "/"

    } catch (error) {
        console.error(error);
    }
};

    const retrieveUsers = async () => {
        try {
            const response = await fetch("http://localhost:4000/showusers", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


    return (

        <>
        <button
            type="click"
            onClick={() => {
                retrieveUsers();
                alert('Check console for data')
            }}
            >CHECK DATA</button>
            <form onSubmit={(e) => submitHandler(e)}>

                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={
                            (e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                });
                            }}
                    />
                </label>

                <label htmlFor="number">
                    Number:
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                number: e.target.value,
                            });
                        }}
                    />
                </label>

                <label htmlFor="consent">
                    CONSENT:
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        value={formData.consent}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                consent: e.target.checked,
                            });
                        }}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default InputForm;


import { useReducer, useState } from "react";

const InputForm = () => {

    const [name, setName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [consent, setConsent] = useState(false);

    const initFormState = {
        name: '',
        serialNumber: '',
        consent: false
    }





    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${initFormState}`)
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name: 
                <input type="text" id='name' name="name"
                    value={name} onChange={(e) => {
                        setName(e.target.value);
                        console.log(name) }}
                        />
            </label>

            <label htmlFor="serial number">
                <input type="text" id="serial number" name="serial number"
                    value={serialNumber} onChange={(e) => {
                        setSerialNumber(e.target.value);
                        console.log(serialNumber) }}
                    />
            </label>

            <label htmlFor="consent"> CONSENT
                <input type="checkbox" id="consent" name="consent"
                    value={consent} onChange={(e) => {
                        setConsent(e.target.checked);
                        console.log(consent) }}
                />
            </label>

            <button type="submit">Submit</button>

        </form>
    )
}

export default InputForm
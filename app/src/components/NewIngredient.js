import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ingredientModel } from '../data_models/inventory_model';
import { allIngredientsModel } from '../data_models/inventory_model';

const NewIngredient = () => {
    const [ingredient, setIngredient] = useState();
    const [inputPending, setInputPending] = useState(false);

    const submitHandler = (e) => {
        try {
            e.preventDefault(e);

            // move form input data to state
            const formValues = Object.fromEntries(new FormData(e.target).entries());
            // console.log('formValues: ', formValues);
            // map formValues to input state
            setIngredient(formValues);

            // const newIngredient = Object.fromEntries(new FormData(e.target).entries());
            // console.log('newIngredient: ', newIngredient);

            // dev test
            setInputPending(true);
            setTimeout(() => {
                setInputPending(false);
            }, 10000);
            // 

        } catch (error) {
            console.error(error);
        }
    }

    // form handler
    // process form data on input change

    // submit handler
    // commit form data to state

    // new reduce
    // commit state to conext and db


    useEffect(() => {
        console.log('state: :', ingredient);
    }, [ingredient]);


    return (

        <div>
            <form onSubmit={e => submitHandler(e)}>
                <label htmlFor="item-type">Item Type:</label>
                <input type="text" id="item-type" name="item-type"></input>
                <label htmlFor="item-source">Item Source:</label>
                <input type="text" id="item-source" name="item-source"></input>
                <label htmlFor="item-name">Item Name:</label>
                <input type="text" id="item-name" name="item-name"></input>
                <label htmlFor="item-number">Item Number:</label>
                <input type="text" id="item-number" name="item-number"></input>
                <label htmlFor="item-volume">Item Volume:</label>
                <input type="text" id="item-volume" name="item-volume"></input>
                <label htmlFor="item-cost">Item Cost:</label>
                <input type="text" id="item-cost" name="item-cost"></input>
                <label htmlFor="item-split-uom">Item Split UOM:</label>
                <input type="text" id="item-split-uom" name="item-split-uom"></input>
                <label htmlFor="split-cost">Split Cost:</label>
                <input type="text" id="split-cost" name="split-cost"></input>
                <label htmlFor="preferred-toggle">Preferred Toggle:</label>
                <input type="checkbox" id="preferred-toggle" name="preferred-toggle" value="true"></input>
                <input type="submit" value="Submit"></input>

            </form>

            {/* new ingredient input status
                create new node print ingredient detail to screen */}
            {inputPending && <h1 className="mt-5 ms-5">

                Ingredient added

                {Object.keys(ingredient).map((key, index) => {
                    return (
                        <h4 key={index}>
                            {key}: {ingredient[key]}
                        </h4>
                    )
                })}

            </h1>
            }

        </div>
    )
}
// {inputPending && <p></p>}

export default NewIngredient
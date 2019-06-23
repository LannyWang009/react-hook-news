import React from "react";

function useFormValidation(initialState) {
    // to do form validation
    const [values, setValues] = React.useState(initialState)
    var handleChange = event => {
        event.persist() // ? what does it do?
        setValues(previousValues => ({
            ...previousValues, 
            [event.target.name]:event.target.value
            })
        )}
    

    var handleSubmit = event => {
        event.preventDefault();
        console.log({values})
    }

    return {handleChange, handleSubmit, values}
}

export default useFormValidation;

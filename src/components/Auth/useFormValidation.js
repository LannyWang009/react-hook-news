import React, {useState, useEffect} from "react";

function useFormValidation(initialState, validate) {
    // to do form validation
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)

    useEffect(() => {
        if (isSubmitting) {
            const noError = Object.keys(errors).length === 0;
            if (noError) {
                console.log("authenticated", values)
                setSubmitting(false);
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])
    
    var handleChange = event => {
        event.persist() // synthetic event properties cannot be accessed in an 
        // asynchronous way, therefore event.persist() needs to be called
        // so as to remove the synthetic event from the pool and alllow references
        // to the event to be retained by user code.
        setValues(previousValues => ({
            ...previousValues, 
            [event.target.name]:event.target.value
            })
        )}
    
    var handleBlur = () => {
        const validationErrors = validate(values)
        setErrors(validationErrors)
    }

    var handleSubmit = event => {
        event.preventDefault();
        const validationErrors = validate(values)
        setErrors(validationErrors)
        setSubmitting(true)
        console.log('values object', {values});
    }

    return {handleChange, 
            handleSubmit, 
            handleBlur,
            errors,
            isSubmitting,
            values}
}

export default useFormValidation;

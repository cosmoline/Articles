import {useState, useEffect} from 'react';
import useDebounce from './useDebounce';


function useForm(callback, validate) {
    
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }

    }, [errors])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setSubmitting(true);
    }

    const handleChange = (event) => {
        // const name = useDebounce(event.target.name, 1000); //значения присваиваются только после 1 секунды простоя
        // const value = useDebounce(event.target.value, 1000);
        return (  
            setValues(values => ({
                ...values,
                [event.target.name] : event.target.value
            }))
        );
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }

}

export default useForm;
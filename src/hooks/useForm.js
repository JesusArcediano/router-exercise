import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => {
    
    const [formState, setFormState] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({formValidations});
    

    useEffect(() => {
        createValidators();
    }, [formState]);
    
    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidations)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation]);
    
    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage ] = formValidations[formField];
                formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
            }
        setFormValidation(formCheckedValues);
    }
        
    



    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm)
    };

 
  
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}
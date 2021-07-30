import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormItemWrapper } from './FormItem.styles'

const FormItem = ({ form }) => {

    const history = useHistory();

    const handleFormItemClick = (formId) => {
        history.push(`/forms/${formId}/submissions`)
    }

    return (
        
        <FormItemWrapper
            onClick={() => handleFormItemClick(form.id)}
        >
            {form.title}
        </FormItemWrapper>
    )
}

export default FormItem

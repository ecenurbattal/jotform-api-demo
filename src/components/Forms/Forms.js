import React, { useEffect, useState } from 'react'
import { getForms } from '../../services/jotform';
import { FormsWrapper } from './Forms.styles';
import FormItem from '../FormItem/FormItem';

const Forms = () => {

    const [forms,setForms] = useState([]);

    useEffect(() => {
       const init = async () => {
        try{
            const {data} = await getForms();
            //console.log(data.content)
            setForms(data.content)
        } catch(ex){
            console.log(ex)
        }
       }
       init();
    },[])

    return (
        <FormsWrapper>
            {forms?.map((form) => (
                <FormItem
                    key={form.id}
                    form={form}
                />
            ))}
        </FormsWrapper>
    )
}

export default Forms

import axios from 'axios';

const apiKey = localStorage.getItem('apiKey')

const instance = axios.create({
    baseURL:'https://api.jotform.com',
    params:{
        apiKey: apiKey,
        debug:true,
    }
})

export const getForms = () => {
    return instance.get('/user/forms')
}

export const getSubmissions = (formId) => {
    return instance.get(`/form/${formId}/submissions`)
}

// export const getSubmission = (submissionId) => {
//     return instance.get(`/submission/${submissionId}`)
// }
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getSubmissions } from '../../services/jotform';
import { Table, TableItem, TableTitle } from './Submissions.styled';

const Submissions = () => {

    const {formId} = useParams();
    const [submissions,setSubmissions] = useState([]);

    //const tableTitles = []

    useEffect(() => {
        const init = async () => {
            try {
                const {data} = await getSubmissions(formId);
                console.log("Submissions",data.content)
                // const response = await getSubmission(data.content[1].id)
                // console.log("Single submission",response.data)
                setSubmissions(data.content)
            } catch (error) {
                console.log(error)
            }
        }
        init();
    },[formId])

    return (
        <Table>
            <thead>
                <TableTitle>
                    <TableItem></TableItem>
                </TableTitle>
            </thead>
        </Table>
    )
}

export default Submissions

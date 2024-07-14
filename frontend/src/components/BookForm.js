import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const BookForm = () =>{

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [pages, setPages] = useState();
    const [finished, setFinished] = useState(false);

    // prevent trigger on parent fu
    const FormOnClick = (e) =>{
        e.stopPropagation()
    };

    // handle add book
    const handleAddBook = () =>{
        fetch('http://localhost:8000/api/bookCollection/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            author: author,
            pages: pages,
            finished: finished
        })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
    })};

    const handleOnChange = (e, setState) =>{
        setState(e.target.value);
    };

    return (
        <Card style={{ width: '18rem' , left: "50%", top: "50%", transform: "translate(-50%, -50%)", padding: "10px", border: "3px solid black"}} onClick={FormOnClick}>
            <Form>
                <h3>Add a Book</h3>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control type="text" placeholder="Title" onChange={(e) => handleOnChange(e, setTitle)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" onChange={(e) => handleOnChange(e, setAuthor)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPages">
                    <Form.Label>Pages</Form.Label>
                    <Form.Control type="number" placeholder="Pages" onChange={(e) => handleOnChange(e, setPages)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFinished">
                    <Form.Check type="checkbox" label="Finished?" onChange={(e) => handleOnChange(e, setFinished)}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginLeft: "35%"}} onClick = {handleAddBook}>
                    Add!
                </Button>
            </Form>
        </Card>)
    
};

export default BookForm;
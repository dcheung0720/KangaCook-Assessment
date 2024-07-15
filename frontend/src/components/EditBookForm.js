import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const EditBookForm = ({book, id}) =>{
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [pages, setPages] = useState(book.pages);
    const [finished, setFinished] = useState(book.finished);

    // prevent trigger on parent fu
    const FormOnClick = (e) =>{
        e.stopPropagation()
    };

    // handle add book
    const handleAddBook = () =>{
        fetch(`http://localhost:8000/api/bookCollection/${id + 1}/`, {
        method: 'PUT',
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
                    <Form.Control type="text" placeholder="Title" value = {title} onChange={(e) => handleOnChange(e, setTitle)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Author" value = {author} onChange={(e) => handleOnChange(e, setAuthor)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPages">
                    <Form.Label>Pages</Form.Label>
                    <Form.Control type="number" placeholder="Pages" value = {pages} onChange={(e) => handleOnChange(e, setPages)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formFinished">
                    <Form.Check type="checkbox" label="Finished?" value = {finished} onChange={(e) => handleOnChange(e, setFinished)}/>
                </Form.Group>
                <Button variant="primary" type="submit" style={{marginLeft: "35%"}} onClick = {handleAddBook}>
                    Edit!
                </Button>
            </Form>
        </Card>)
    
};

export default EditBookForm;
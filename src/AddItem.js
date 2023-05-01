import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Card, CardBody, CardTitle } from "reactstrap";


function AddItem(props) {
    const [formData, setFormData] = useState({});
    const history = useHistory();

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        await props.addItem(formData);
        history.push("/");
    }
    return (
        <section className="col-md-8">
            <Card>
                <CardBody className="text-center">
                    <CardTitle tag="h5" className="font-weight-bold">
                        Please add item information below:
                    </CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input type="text" name="name" id="name" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description:</Label>
                            <Input
                                type="text"
                                name="description"
                                id="description"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="recipe">Recipe:</Label>
                            <Input
                                type="text"
                                name="recipe"
                                id="recipe"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="serve">Serve:</Label>
                            <Input type="text" name="serve" id="serve" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="type">Type:</Label>
                            <Input type="select" name="type" id="type" onChange={handleChange}>
                                <option value="">Select a type</option>
                                <option value="snack">Snack</option>
                                <option value="drink">Drink</option>
                            </Input>
                        </FormGroup>
                        <Button color="primary">Add Item</Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    );
}

export default AddItem;
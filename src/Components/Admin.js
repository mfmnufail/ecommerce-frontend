import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Label,
  TextArea,
  Button,
  Form,
  Input,
  Table,
  Divider,
  Message,
  Dropdown,
  Container,
} from "semantic-ui-react";
import Product from "./Product";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
 

  /* MOVE CONSTANTS TO A DIFERENT FILE */
  const options = [
    { key: "meats", text: "Meats", value: "meat" },
    { key: "seafood", text: "Seafood", value: "seafood" },
    { key: "frozen", text: "Frozen", value: "frozen" },
    { key: "canned", text: "Canned", value: "canned" },
    { key: "poultry", text: "Poultry", value: "poultry" },
    { key: "produce", text: "Produce", value: "produce" },
    { key: "diary", text: "Diary", value: "diary" },
    { key: "dispenser", text: "Bispenser", value: "dispenser" },
    { key: "equipment", text: "Equipment", value: "equipment" },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    
    

    const data = {
      productName: productName,
      description: description,
      price:price,
      category:category
    };

    /* MOVES URLS TO A CONFIG FILE
     * BETTER TO MOVE AXIOS TO REDUX
    */ 
     axios.post("http://localhost:8080/api/product", data)
    //  .then((response)=>{
    //     console.log("Response from admin " + response)
       
    //  })

    .catch(err => {
      setError(err.response.data.errors);
    });

    window.location.reload()
  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form Field>
          <Input
            fluid
            name="productName"
            label={`Product Name`}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            autoComplete="off"
          />
        </Form>

        <br />
        <Form Field>
          <Input
           fluid
            name="price"
            label={`price`}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
            autoComplete="off"
          />
        </Form>

        <br />

        <Form Field>
          <Dropdown
            name="category"
            label={`Product Name`}
            placeholder="Category"
            fluid
            selection
            options={options}
            onChange={(e, data) => setCategory(data.value)}
          />
        </Form>

        <br />

        <TextArea
          name="description"
          control={TextArea}
          label="Description"
          placeholder="Tell us more about the product..."
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />
        <Button primary type="submit">
          Submit
        </Button>
        {error && (
          <Message negative>
            <Message.Header>{error}</Message.Header>
          </Message>
        )}
      </Form>

      <Divider/>

      <Product isAdmin={true}/>
    </Container>
  );
};

export default Admin;

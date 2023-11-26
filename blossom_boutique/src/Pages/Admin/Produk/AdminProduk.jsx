import React, {useState, useEffect} from 'react'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const AdminProduk = () => {

    const [dataProduk, setDataProduk] = useState([])
    
    const getDataProduct = async () =>{
        const res = await axios.get("https://6561ebbadcd355c08324546c.mockapi.io/Product");
        setDataProduk(res.data);
    }

    useEffect(()=>{
        getDataProduct();
    },[])

    const deleteProduct = async (id)=>{
        await axios.delete(`https://6561ebbadcd355c08324546c.mockapi.io/Product/${id}`);
        getDataProduct();
    }

    const filterProduk = (e) =>{
        if(e.target.value !== ''){
            const filteredProduk = dataProduk.filter((produk)=>{
                return produk.name.toLowerCase().includes(e.target.value.toLowerCase())
            })
            setDataProduk(filteredProduk);
        }else{
            getDataProduct();
        }
    }

  return (
    <LayoutAdmin>
      <Container>
        <h1 className="title mt-3">List Produk</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cari Produk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nama Produk"
                    onChange={(e) => filterProduk(e)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Link to="/admin/produk/add" className="btn btn-primary mt-2 mb-3">
          Tambah Produk
        </Link>

        {dataProduk.map((produk) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{produk.name}</Card.Title>
              <Card.Text>IDR: {produk.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Link
                to={`/admin/produk/${produk.id}`}
                className="btn btn-primary mx-2"
              >
                Detail
              </Link>
              <Button variant="danger" onClick={() => deleteProduct(produk.id)}>
                Delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
      <br />
      <br />
      <br />
      <br />
    </LayoutAdmin>
  );
}

export default AdminProduk
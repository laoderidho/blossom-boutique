import React,{useState, useEffect} from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserSProduct = () => {

    const [dataProduk, setDataProduk] = useState([])

    const getDataProduct = async () =>{
        const res = await axios.get("https://6561ebbadcd355c08324546c.mockapi.io/Product");
        setDataProduk(res.data);
    }

    useEffect(()=>{
        getDataProduct();
    },[])

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

    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  return (
    <LayoutUser>
      <Container>
        <h1 className="title mt-3">Produk</h1>
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

        <Row>     
            {dataProduk.map((produk) => (
            <Card className="m-3 border-0 col-md-3">
                <Card.Img variant="top" src={produk.link_photo} className='link-photo-user-produk'/>
                <Card.Body className='d-flex flex-column align-items-center'>
                   <Link to={`/users/produk/${produk.id}`} className='user-produk-title'>{produk.name}</Link>
                   <h5>{formatter.format(produk.price)}</h5>
                </Card.Body>
            </Card>
            ))}
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </LayoutUser>
  );
}

export default UserSProduct
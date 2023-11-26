import React, { useEffect, useState } from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'

const Checkout = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [dataProduk, setDataProduk] = useState([])
    const [harga, setHarga] = useState()
    const [entity, setEntity] = useState('')



    const getDataCheckout = async () =>{
       const res = await axios.get(`https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`)
        setDataProduk(res.data)
    }

    useEffect(()=>{
        console.log(dataProduk)
        setHarga(dataProduk.price)
        getDataCheckout();
    }, [])

    useEffect(()=>{ 
        setHarga(dataProduk.price * entity)
    },[entity])

  return (
    <LayoutUser>
      <h1 className="title mt-5">{dataProduk.nama_produk}</h1>
      <Card className="container mt-5">
        <Card.Body className="">
          <Row>
            <Col>
              <img
                src={dataProduk.link_photo}
                alt="Foto Bunga"
                className="produk-img"
              />
            </Col>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Harga</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Harga"
                    value={dataProduk.price}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Pilih Pembayaran</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Pilih Bank</option>
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                    <option value="Dana">Dana</option>
                    <option value="COD">Bayar Di Tempat</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Entity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukkan berapa yang anda pesan"
                    value={entity}
                    onChange={(e) => setEntity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Masukkan nomor credential jika sudah dibayar</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukkan berapa yang anda pesan"
                  />
                </Form.Group>

                <h5 className="product-detail-price mt-5 m-2">
                  total : {harga}
                </h5>

                <Button className="btn btn-success mt-5 m-3">
                  <i class="fa-solid fa-cash-register"></i> Beli Sekarang
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </LayoutUser>
  );
}

export default Checkout
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import { Card, Row, Col } from 'react-bootstrap'

const AdminDetailProduk = () => {

  const [dataProduk, setDataProduk] = useState([]);

  const {id} = useParams();

  const getDetailProduk = async () =>{
    const res = await axios.get(`https://6561ebbadcd355c08324546c.mockapi.io/Product/${id}`);
    console.log(res.data);
    setDataProduk(res.data);
  }

  useEffect(()=>{
    getDetailProduk();
  },[])
  
  return (
    <LayoutAdmin>
      <h1 className="title mt-5 mx-3">{dataProduk.name}</h1>

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
              <h5 className="product-detail-price">Harga</h5>
              <p className="produk-detail-subtitle-price">
                IDR {dataProduk.price}
              </p>

              <h5 className="product-detail-price mt-5">Deskripsi</h5>
              <p className="produk-detail-subtitle-price">
                 {dataProduk.deskripsi}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </LayoutAdmin>
  );
}

export default AdminDetailProduk
import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import axios from 'axios'
import { Card, Row, Button, Form, Col, Container } from 'react-bootstrap'

const Penjualan = () => {

    
    const [datacheck, setDatacheck] = useState([]);
    const getDataKeranjang = async () => {
      try {
        const res = await axios.get(
          "https://6561ed2edcd355c0832456ad.mockapi.io/checkout"
        );
        setDatacheck(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

      const filterProduk = (e) => {
        if (e.target.value !== "") {
          const filteredProduk = datacheck.filter((status) => {
            return status.email
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          setDatacheck(filteredProduk);
        } else {
          getDataKeranjang();
        }
      };

      const agreProduct = async (id, message) =>{
        try {
          await axios.put(`https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`, {
            status: message,
          });
          getDataKeranjang();
        } catch (error) {
          
        }
      };

    useEffect(()=>{
        getDataKeranjang();
    }, [])

  return (
    <LayoutAdmin>
      <h1 className="mt-5 mx-3">Penjualan</h1>

      <Row className="mx-3">
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
      {datacheck.length > 0 ? (
        datacheck.map((item, index) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{item.email}</Card.Title>
              <Card.Text>Total: {item.price}</Card.Text>
              <Card.Text>Alamat: {item.alamat}</Card.Text>
              <Card.Text>Nama Produk: {item.nama_produk}</Card.Text>
              <Card.Text>Nama User: {item.nama_user}</Card.Text>
              <Card.Text>No Telp: {item.no_telp}</Card.Text>
              <Button variant="primary">Status: {item.status}</Button>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="primary"
                onClick={()=>agreProduct(item.id, "Sedang Di Proses Dan Dikemas")}
                className="mx-3"
              >
                Setujui
              </Button>
              <Button variant="danger"
                onClick={()=>agreProduct(item.id, "Ditolak")}
              >Tolak</Button>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <h1 className="mt-5 mx-3">Tidak ada data</h1>
      )}
    </LayoutAdmin>
  );
}

export default Penjualan
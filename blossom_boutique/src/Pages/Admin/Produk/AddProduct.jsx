import React, {useState} from 'react'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    const [name, setName] = useState("");
    const [link_photo, setLinkPhoto] = useState("");
    const [price, setPrice] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const navigate = useNavigate();

    const nonSubmit = () => {
        if (name === "" || link_photo === "" || price === "" || deskripsi === "") {
          return false;
        } else {
          return true;
        }
      }

    const submitProduk = async (e) => {
        e.preventDefault();
        
       await axios.post('https://6561ebbadcd355c08324546c.mockapi.io/Product', {
            name,
            link_photo,
            price,
            deskripsi
        })

        navigate("/admin/produk");
    }
  return (
    <LayoutAdmin>
      <h1 className="title mt-3">Tambah Produk</h1>

      <Container fluid className="px-1 py-5 mx-auto">
        <Row className="d-flex justify-content-center">
          <Col xl={7} lg={8} md={9} xs={11} className="text-center">
            <Card className="shadow">
              <Card.Body>
                <h5 className="text-center mb-4">Tambah Produk</h5>
                <Form onSubmit={submitProduk}>
                  <Row className="justify-content-between text-left">
                    <Col sm={6} className="flex-column d-flex mb-3">
                      <Form.Label className="form-control-label px-3">
                        Nama Produk
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Isi Nama Lengkap"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Col>
                    <Col sm={6} className="flex-column d-flex mb-3">
                      <Form.Label className="form-control-label px-3">
                        Link Foto Produk
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="link_photo"
                        placeholder="Isi Nomor Handphone Anda"
                        value={link_photo}
                        onChange={(e) => setLinkPhoto(e.target.value)}
                      />
                    </Col>
                    <Col sm={6} className="flex-column d-flex mb-3">
                      <Form.Label className="form-control-label px-3">
                        Harga
                      </Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        placeholder="isi harga produk"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </Col>
                    <Col sm={12} className="flex-column d-flex mb-3">
                      <Form.Label className="form-control-label px-3">
                        Deskripsi Produk
                      </Form.Label>
                      <Form.Control
                        type="text"
                        as="textarea"
                        name="price"
                        placeholder="Tuliskan Deskripsi Produk"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                      />
                    </Col>

                    {/* Repeat similar blocks for other form fields */}
                  </Row>
                  <Row className="justify-content-end">
                    <Col sm>
                      <Button
                        type="submit"
                        className="btn-primary"
                        disabled={!nonSubmit()}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </LayoutAdmin>
  );
}

export default AddProduct
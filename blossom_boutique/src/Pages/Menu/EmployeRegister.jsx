import axios from 'axios';
import React, {useState} from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const EmployeRegister = () => {

  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const nonSubmit = () => {
    if (name === "" || phone_number === "" || email === "" || password === "" || address === "" || role === "") {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios.post("https://6561ebbadcd355c08324546c.mockapi.io/User", {
      name: name,
      phone_number: phone_number,
      email: email,
      password: password,
      address: address,
      role: role,
    })
    navigate("/admin/user");
  }


  return (
    <Container fluid className="px-1 py-5 mx-auto register-page">
      <Row className="d-flex justify-content-center">
        <Col xl={7} lg={8} md={9} xs={11} className="text-center">
          <Card className="shadow">
            <Card.Body>
              <h5 className="text-center mb-4">Register</h5>
              <Form onSubmit={handleSubmit}>
                <Row className="justify-content-between text-left">
                  <Col sm={6} className="flex-column d-flex mb-3">
                    <Form.Label className="form-control-label px-3">
                      Isi Nama Lengkap Anda
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
                      Nomor Hp
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="phone_number"
                      placeholder="Isi Nomor Handphone Anda"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="flex-column d-flex mb-3">
                    <Form.Label className="form-control-label px-3">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Enter your first name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="flex-column d-flex">
                    <Form.Label className="form-control-label px-3">
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      id="fname"
                      name="fname"
                      placeholder="Enter your first name"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                  <Col className="flex-column d-flex mb-5">
                    <Form.Label className="form-control-label px-3">
                      Bagian
                    </Form.Label>
                    {/* form select */}
                    <Form.Select
                     aria-label="Default select example"
                     value={role}
                     onChange={(e) => setRole(e.target.value)}
                     >
                      <option>Pilih Bagian</option>
                      <option value="admin">Admin</option>
                      <option value="kurir">kurir</option>
                    </Form.Select>
                  </Col>
                  <Col className="flex-column d-flex mb-5">
                    <Form.Label className="form-control-label px-3">
                      Alamat
                    </Form.Label>
                    <Form.Control
                      // textarea
                      type="text"
                      as="textarea"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="tuliskan alamat lengkap anda beserta jalan"
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
  );
}

export default EmployeRegister
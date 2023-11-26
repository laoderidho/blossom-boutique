import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../../../components/admin/LayoutAdmin'
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {

  const [dataUser, setDataUser] = useState([])

  const getDataUser = async () =>{
    const res = await axios.get("https://6561ebbadcd355c08324546c.mockapi.io/User");
    setDataUser(res.data);
  } 

  const deleteUser = async (id)=>{
    await axios.delete(`https://6561ebbadcd355c08324546c.mockapi.io/User/${id}`);
    getDataUser();
  }

  const filterUser = (e) =>{
    if(e.target.value !== ''){
      const filteredUser = dataUser.filter((user)=>{
        return user.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setDataUser(filteredUser);
    }else{
      getDataUser();
    }
  } 
  useEffect(()=>{
    getDataUser();
  },[])

  return (
    <LayoutAdmin>
      <Container>
        <h1 className="title mt-3">List Pegawai</h1>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Cari Pegawai</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan Nama Pegawai"
                  onChange={(e) => filterUser(e)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Link to="/admin/user/add" className="btn btn-primary mt-2 mb-3">
          Tambah Pegawai
        </Link>

        {dataUser.map((user) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button 
              variant="danger"
              onClick={() => deleteUser(user.id)}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </Container>
    </LayoutAdmin>
  );
}

export default UserList
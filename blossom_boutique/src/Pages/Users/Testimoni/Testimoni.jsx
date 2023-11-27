import React, { useState } from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import { Card, Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Testimoni = () => {
    const [testimoni, setTestimoni] = useState('')

    const name = sessionStorage.getItem('name');
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('https://6561ed2edcd355c0832456ad.mockapi.io/testimoni',{
                testimoni,
                name
            })
            alert('Terima kasih atas penilaian Anda')
            navigate('/users/dashboard')
        } catch (error) {
            
        }
    }
  return (
    <LayoutUser>
        <Container>
            <h1 className="title mt-3">Berikan Penilaian Anda Terkait Produk Kami</h1>
            <Card className="m-3 border-0">
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Testimoni</Form.Label>
                    <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Berikan komentar Anda"
                    onChange={(e) => setTestimoni(e.target.value)}
                    value={testimoni}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Kirim
                </Button>
                </Form>
            </Card.Body>
            </Card>
        </Container>
    </LayoutUser>
  )
}

export default Testimoni
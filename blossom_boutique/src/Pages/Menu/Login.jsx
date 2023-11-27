import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showpass, setShowPass] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const getDataUser = async () =>{
       try {
         const res = await axios.get(
           "https://6561ebbadcd355c08324546c.mockapi.io/User"
         );
         return res.data;
       } catch (error) {
            console.log(error);
       }
    }

    useEffect(()=>{
        getDataUser()
    }, [])

    const SubmitForm = async (e) => {
        e.preventDefault();
        const data = await getDataUser()
        .then(res=>{
            const data = res 
            const filter = data.filter((item)=>item.email === email && item.password === password)

            if(filter.length === 0){
                setError('Email atau Password salah')
            }
            else{
                const user = filter[0]
                sessionStorage.setItem('id', user.id)
                sessionStorage.setItem('role', user.role)
                sessionStorage.setItem('name', user.name)
                sessionStorage.setItem('email', user.email)
                sessionStorage.setItem('alamat', user.address)
                if(user.role === 'admin'){
                    navigate('/admin/dashboard')
                }
                else if(user.role === 'user'){
                  navigate('/users/dashboard')
                }
                else if (user.role === 'kurir'){
                  navigate('/kurir/dashboard')
                }
            }
        })
    }
    

  return (
    <Container fluid className="px-1 py-5 register-page">
      <Row className="d-flex justify-content-center">
        <Col xl={4} lg={8} md={9} xs={11} className="">
          <Card className="shadow">
            <Card.Body>
              <h1 className="text-center title mb-4">Login</h1>
              <Form onSubmit={SubmitForm}>
                <Row className="justify-content-between flex-column">
                  <Col className="flex-column d-flex mb-3">
                    <Form.Label className="form-control-label">
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="name"
                      placeholder=" Isi Nama Lengkap"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    
                  </Col>
                  <Col className="flex-column d-flex mb-3">
                    <Form.Label className="form-control-label">
                      Password
                    </Form.Label>
                    <Form.Control
                      type={showpass ? "text" : "password"}
                      name="name"
                      placeholder=" Isi password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </Row>
                <Row className="flex-column">
                <Col className='mb-3'>
                    <Form.Check
                        type="checkbox"
                        label="Show Password"
                        onChange={()=>setShowPass(!showpass)}
                    />
                </Col>
                <Col className='mb-3'>
                    <Link to="/users/register" className=''>Register</Link>
                </Col>      
                <Col className='flex-columns' sm>
                    <Button
                    type="submit"
                    className="btn-primary w-100"
                    //   disabled={!nonSubmit()}
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

export default Login
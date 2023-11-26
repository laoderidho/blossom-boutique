import React, { useEffect, useState } from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import { useParams, useNavigate, Await } from 'react-router-dom'
import axios from 'axios'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'

const Checkout = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [dataProduk, setDataProduk] = useState([])
    const [harga, setHarga] = useState(0)
    const [entity, setEntity] = useState()
    const [alamat, setAlamat] = useState('')
    const [no_telp, setNo_telp] = useState('')
    const [pembayaran, setPembayaran] = useState('')
    const email = sessionStorage.getItem('email')
    const current_alamat = sessionStorage.getItem('alamat')
    const namaUser = sessionStorage.getItem('name')

    const getDataCheckout = async () =>{
       const res = await axios.get(`https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`)
        setDataProduk(res.data)
    }

    const postCheckout = async (e) =>{
      e.preventDefault();
        try {
          await axios.put(
            `https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`,
            {
              entity,
              price: harga,
              alamat,
              keranjang: false,
              no_telp,
              status: 'menunggu konfirmasi Pembayaran',
              email,
              nama_user: namaUser,
            }
          );
          sendEmail();
          navigate('/users/keranjang')
        } catch (error) {
          
        }
    }

    const sendEmail = async () =>{
       try {
        await axios.post(`https://formspree.io/f/xoqoojyk`, {
          email: email,
          message: `Konfirmasi pembelian, produk yang dibeli oleh user dengan email ${email} adalah ${dataProduk.nama_produk} dengan jumlah ${entity} dengan total harga ${harga}, opsi pembayarannya adalah ${pembayaran}, tolong cek bukti pembayaran untuk validasi pembayaran`,
        });
       } catch (error) {
        
       }
    }

    useEffect(()=>{
        setHarga(dataProduk.price)
        setAlamat(current_alamat)
        getDataCheckout();
    }, [])

    const AccountingNumberFormat = ({ amount }) => {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0, // Jumlah digit di belakang koma
        maximumFractionDigits: 2,
      });

      return <span>{formatter.format(amount)}</span>;
    };

    const nonSubmit = () =>{
      if(entity && alamat && pembayaran && no_telp){
        return true
      }
      else{
        return false
      }
    
    }

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
              <Form onSubmit={postCheckout}>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                  <Form.Label>Harga Per Satu Bucket Bunga</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Harga"
                    value={dataProduk.price}
                    disabled
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Banyak Bunga</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukkan berapa Banyak yang anda pesan"
                    value={entity}
                    onChange={(e) => setEntity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>pembayaran</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={pembayaran}
                    onChange={(e) => setPembayaran(e.target.value)}
                  >
                    <option>Pilih Opsi pembayaran</option>
                    <option value="bayar di tempat">Bayar Di tempat</option>
                    <option value="bca">BCA</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder="masukkan Alamat Anda"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nomor telepon</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="masukkan berapa Banyak yang anda pesan"
                    value={no_telp}
                    onChange={(e) => setNo_telp(e.target.value)}
                  />
                </Form.Group>

                <p>Transfer lah ke nomor BCA dengan nomor rek: 1370115148</p>
                <p>
                  Jika sudah transfer maka krim bukti pembayaran di sini dan
                  Submit lah
                </p>
                <a
                  href="https://docs.google.com/forms/d/1Dpzi1c7U2mwGkaFc06_jgssNuLAiu4KzcOhfXbKDo4Y/edit?usp=drivesdk"
                  target="_blank"
                >
                  https://docs.google.com/forms/d/1Dpzi1c7U2mwGkaFc06_jgssNuLAiu4KzcOhfXbKDo4Y/edit?usp=drivesdk
                </a>

                <h5 className="product-detail-price mt-5 m-2">
                  Total:{" "}
                  {entity ? (
                    <AccountingNumberFormat amount={harga} />
                  ) : (
                    <AccountingNumberFormat amount={dataProduk.price} />
                  )}
                </h5>

                <Button
                  type="submit"
                  className="btn btn-success mt-5 m-3"
                  disabled={!nonSubmit()}
                >
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
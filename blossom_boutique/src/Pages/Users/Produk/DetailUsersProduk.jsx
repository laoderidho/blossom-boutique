import React, {useState, useEffect} from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DetailUsersProduk = () => {

    const [dataProduk, setDataProduk] = useState([]);

    const idUser = sessionStorage.getItem('id');
    console.log(idUser);
    const {id} = useParams();
    const navigate = useNavigate();

    const getDetailProduk = async () => {
      const res = await axios.get(
        `https://6561ebbadcd355c08324546c.mockapi.io/Product/${id}`
      );
      console.log(res.data);
      setDataProduk(res.data);
    };

    const Keranjang = async () => {
         await axios.post(
          `https://6561ed2edcd355c0832456ad.mockapi.io/checkout`,{
            id_user: idUser,
            id_product: id,
            keranjang: true,
            nama_produk: dataProduk.name,
            price : dataProduk.price,
            link_photo: dataProduk.link_photo,
          }
        );
       navigate('/users/keranjang')
    };

    useEffect(() => {
      getDetailProduk();
    }, []);
  

  return (
    <LayoutUser>
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
              <h5 className="product-detail-price mt-5 m-2">Harga</h5>
              <p className="produk-detail-subtitle-price m-2">
                IDR {dataProduk.price}
              </p>

              <h5 className="product-detail-price mt-5 m-2">Deskripsi</h5>
              <p className="produk-detail-subtitle-price m-2">
                {dataProduk.deskripsi}
              </p>


              <Button className="btn btn-primary mt-5 m-3"
                onClick={Keranjang}
              >
                <i class="fa-solid fa-cart-shopping"></i> Masukkan Ke Keranjang
              </Button>

              <Button className="btn btn-success mt-5 m-3">
                <i class="fa-solid fa-cash-register"></i> Beli Sekarang
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </LayoutUser>
  );
}

export default DetailUsersProduk
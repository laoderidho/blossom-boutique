import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import blossom_logo from '../../img/blossom_logo.png'

const Produk = () => {
    const [dataProduk, setDataProduk] = useState([]);

    const getDataProduct = async () => {
    const res = await axios.get(
        "https://6561ebbadcd355c08324546c.mockapi.io/Product"
    );
    setDataProduk(res.data);    
    };

    useEffect(() => {
    getDataProduct();
    }, []);

     const formatter = new Intl.NumberFormat("id-ID", {
       style: "currency",
       currency: "IDR",
       minimumFractionDigits: 0,
     });
    

  return (
    <div id='produk'>

        <div className='mx-2 mt-5 d-flex '>
            <img src={blossom_logo} alt="" className='produk-img'/>
            <h1 className='text-dark subtitle-produk-img'>Produk Unggulan Kami</h1>
        </div>

        <Row>
            {dataProduk.map((produk) => (
            <Card className="m-3 border-0 col-md-3">
                <Card.Img
                variant="top"
                src={produk.link_photo}
                className="link-photo-user-produk"
                />
                <Card.Body className="d-flex flex-column align-items-center">
                <Link
                    to={`/users/produk/${produk.id}`}
                    className="user-produk-title"
                >
                    {produk.name}
                </Link>
                <h5>{formatter.format(produk.price)}</h5>
                </Card.Body>
            </Card>
            ))}
        </Row>
    </div>
  );
}

export default Produk
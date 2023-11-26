import React, { useEffect, useState } from "react";
import LayoutUser from "../../../components/users/LayoutUser";
import axios from "axios";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Keranjang = () => {
  const idUser = sessionStorage.getItem("id");
  const [dataKeranjang, setDataKeranjang] = useState([]);

  const getDataKeranjang = async () => {
    try {
      const res = await axios.get(
        "https://6561ed2edcd355c0832456ad.mockapi.io/checkout"
      );
      const filteredData = res.data.filter(
        (item) => item.id_user === idUser.toString()
      ); // Sesuaikan dengan tipe data
      setDataKeranjang(filteredData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataKeranjang();
  }, []);

  return (
    <LayoutUser>
      <h1 className="title mt-5 mx-3">Keranjang</h1>

    <Row>
      {dataKeranjang.length > 0 &&
        dataKeranjang.map((item, index) => (
          <Card key={index} className="m-3 border-0 col-md-4">
            <Card.Img
              variant="top"
              src={item.link_photo}
              className="link-photo-user-produk"
            />
            <Card.Body className="d-flex flex-column align-items-center">
              <Link
                to={`/users/produk/${item.id}`}
                className="user-produk-title"
              >
                {item.nama_produk}
              </Link>
              <h5>Rp {item.price}</h5>

              <Link to={`/users/checkout/${item.id}`} className="btn btn-success">Checkout sekarang</Link>
            </Card.Body>
          </Card>
        ))}
    </Row>
    </LayoutUser>
  );
};

export default Keranjang;

import React, {useEffect, useState} from 'react'
import LayoutUser from '../../../components/users/LayoutUser'
import axios from 'axios'
import { Card, Row, Button } from 'react-bootstrap'

const StatusPaket = () => {

    const idUser = sessionStorage.getItem("id");
    const [datacheck, setDatacheck] = useState([]);

      const getStatusColor = (status) => {
        switch (status) {
          case "menunggu konfirmasi Pembayaran":
            return "primary";
          case "Sedang Di Proses Dan Dikemas":
            return "warning";
          case "Ditolak":
            return "danger";
          case "Dikirim":
            return "primary";
          case "Selesai":
            return "success";
          default:
        }
      };

    const getDataKeranjang = async () => {
      try {
        const res = await axios.get(
          "https://6561ed2edcd355c0832456ad.mockapi.io/checkout"
        );
        const filteredData = res.data.filter(
          (item) =>
            item.id_user === idUser.toString() && item.keranjang === false
        ); // Sesuaikan dengan tipe data
        setDatacheck(filteredData);
        console.log(filteredData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(()=>{
        getDataKeranjang();
    }, [])

  return (
    <LayoutUser>
      <h1 className="mt-5 mx-3">Status Paket Anda</h1>

      {datacheck.length > 0 ? (
        datacheck.map((item, index) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{item.nama_produk}</Card.Title>
              <Card.Text>IDR: {item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant={getStatusColor(item.status)}>
                Status: {item.status}
              </Button>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <h1 className="mt-5 mx-3">Anda belum memiliki paket</h1>
      )}
    </LayoutUser>
  );
}

export default StatusPaket
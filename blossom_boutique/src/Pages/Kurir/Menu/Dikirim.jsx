import React, {useState, useEffect} from 'react'
import LayoutKurir from '../LayoutKurir'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'

const Dikirim = () => {

    const [datacheck, setDatacheck] = useState([]);
    const getDataKeranjang = async () => {
      try {
        const res = await axios.get(
          "https://6561ed2edcd355c0832456ad.mockapi.io/checkout"
        );
        const filterProduk = res.data.filter((data) => {
          return data.status === "Dikirim";
        });
        setDatacheck(filterProduk);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      getDataKeranjang();
    }, []);

    const kirim = async (id, message) => {
        try {
            await axios.put(
            `https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`,
            {
                status: message,
            }
            );
            getDataKeranjang();
        } catch (error) {}
    };

  return (
    <LayoutKurir>
      <h1 className="mt-5 mx-3">Dikirim</h1>

      {datacheck.length > 0 ? (
        datacheck.map((item, index) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{item.email}</Card.Title>
              <Card.Text>Total: {item.price}</Card.Text>
              <Card.Text>Alamat: {item.alamat}</Card.Text>
              <Card.Text>Nama Pembeli: {item.nama_user}</Card.Text>
              <Card.Text>No Telp: {item.no_telp}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                className="btn btn-primary mx-3"
                onClick={() => kirim(item.id, "Selesai")}
              >
                Sudah Sampai Ke Tujuan
              </Button>
            </Card.Footer>
          </Card>
        ))
      ) : (
        <h1 className="mt-5 mx-3">Tidak ada data</h1>
      )}
    </LayoutKurir>
  );
}

export default Dikirim
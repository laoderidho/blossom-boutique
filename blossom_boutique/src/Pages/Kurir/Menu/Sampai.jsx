import React, {useState, useEffect} from 'react'
import axios from 'axios';
import LayoutKurir from '../LayoutKurir';
import { Card, Button } from 'react-bootstrap';

const Sampai = () => {
   const [datacheck, setDatacheck] = useState([]);
   const getDataKeranjang = async () => {
     try {
       const res = await axios.get(
         "https://6561ed2edcd355c0832456ad.mockapi.io/checkout"
       );
       const filterProduk = res.data.filter((data) => {
         return data.status === "Selesai";
       });
        setDatacheck(filterProduk);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   useEffect(()=>{
        getDataKeranjang();
   }, [])

   const antar = async (id, message) =>{
    try {
      await axios.put(`https://6561ed2edcd355c0832456ad.mockapi.io/checkout/${id}`, {
        status: message,
      });
      getDataKeranjang();
    } catch (error) {
      
    }
   };
  return (
    <LayoutKurir>
    <h1 className='mt-3 mx-3 title mb-5'>Paket yang sudah selesai dikirim</h1>
      {datacheck.length > 0 ? (
        datacheck.map((item, index) => (
          <Card className="m-3">
            <Card.Body>
              <Card.Title>{item.email}</Card.Title>
              <Card.Text>Total: {item.price}</Card.Text>
              <Card.Text>Alamat: {item.alamat}</Card.Text>
              <Card.Text>Nama Pembeli: {item.nama_user}</Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1 className="mt-5 mx-3">Tidak ada data</h1>
      )}
    </LayoutKurir>
  );
}

export default Sampai
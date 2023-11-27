import React, {useEffect, useState} from 'react'
import { Card, Container } from 'react-bootstrap'
import axios from 'axios'

const Penilaian = () => {

    const [testimoni, setTestimoni] = useState([])

    const getTestimoni = async () =>{
        try {
            const response = await axios.get('https://6561ed2edcd355c0832456ad.mockapi.io/testimoni')
            setTestimoni(response.data)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getTestimoni()
    }, [])

  return (
    <div className="mt-5 mb-5">
      <h1 className="title">
        <u>Apa Kata Mereka ?</u>
      </h1>

      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider
      >
        <ul className="uk-slider-items uk-child-width-1-1@s uk-child-width-1-4@m">
          {testimoni.map((item, index) => (
            <li key={index}>
              <Card className="m-3 mt-5 card-testimoni">
                <img
                  src="https://assets.dryicons.com/uploads/icon/svg/5610/fff0263a-8f19-4b74-8f3d-fc24b9561a96.svg"
                  alt=""
                  className='img-testimoni'
                />
                <Card.Body>
                  <Card.Text className="text-center">
                    "{item.testimoni}"
                  </Card.Text>
                    <p className='coment-title text-center'>{item.name}</p>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slider-item="next"></a>
      </div>
    </div>
  );
}

export default Penilaian
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { styled } from '@mui/system';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, FormGroup, FormLabel, Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const RoomImage = styled('div')(({ picture }) => ({
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '800px',
    height: '600px',
    borderRadius: '8px',
}));


const Room = () => {

    const user = useSelector(state => state.user);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(startDate);
        console.log(endDate);
        
        var data = { 
            "CheckIn": startDate,
            "CheckOut": endDate,
            "Id": id
        };
        axios.post(`https://localhost:7147/api/Room/ReserveRoomById`, data,
        {
          headers: {
            Authorization: `Bearer ${user.jwt}` 
          }
        })
          .then((response) => {
            window.location.href = '/';
          })
          .catch((error) => {
            console.error("Error fetching room data:", error);
          });
          
    };


    const [roomData, setRoomData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://localhost:7147/api/Room/GetRoomById?id=${id}`)
            .then(response => {
                console.log(response.data);
                setRoomData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [id]);

    


    return (
        <div>
            <NavBar />
            <h2>{roomData.name}</h2>
            <h2>{roomData.description}</h2>
            <RoomImage picture={roomData.images} />

            <div className='row'>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Row className="align-items-end">
                        <Col>
                        <FormGroup>
                            <FormLabel htmlFor="dateFrom" className="grey-label">Date From:</FormLabel>
                            <DatePicker
                                id="dateFrom"
                                selected={startDate ? new Date(startDate) : null}
                                onChange={handleStartDateChange}
                                minDate={new Date()}
                                dateFormat="yyyy-MM-dd"
                                className="form-control"
                            />
                    </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                            <FormLabel htmlFor="dateTo" className="grey-label">Date To:</FormLabel>
                            <DatePicker
                                id="dateTo"
                                dateFormat="yyyy-MM-dd"
                                className="form-control"
                                selected={endDate}
                                onChange={handleEndDateChange}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                            />
                            </FormGroup>
                        </Col>
                        <Col>
                            <Button variant="success" type="submit" style={{ width: '80%', fontSize: '1.2rem'}}>Reserve room</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );

};

export default Room;

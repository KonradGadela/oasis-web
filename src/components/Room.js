import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import { styled } from '@mui/system';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const RoomImage = styled('div')(({ picture }) => ({
    backgroundImage: `url(${picture})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '800px',
    height: '600px',
    borderRadius: '8px',
}));


const Room = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const [roomData, setRoomData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://localhost:7147/api/Room/GetRoomById/${id}`)
            .then(response => {
                console.log(response.data);
                setRoomData(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <div>
            <NavBar />

            <h2>{roomData.name}</h2>
            <h2>{roomData.description}</h2>
            <p>Room ID: {roomData.id}</p>
            <RoomImage picture={roomData.images} />

            <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start Date"
            />

            <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="End Date"
            />
        </div>
    );

};

export default Room;

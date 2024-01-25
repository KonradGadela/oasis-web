import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RoomGrid from './RoomGrid';
import NavBar from '../NavBar';
import axios from 'axios';
import FilterBar from './FilterBar';

const Rooms = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const affterTomorrow = new Date();
    affterTomorrow.setDate(affterTomorrow.getDate() + 2);
    const [roomData, setRoomData] = useState([]);
    const [dateFrom, setDateFrom] = useState(tomorrow);
    const [dateTo, setDateTo] = useState(affterTomorrow);
    const [roomSize, setRoomSize] = useState('0');
    

    const makeApiCall = () => {
        axios.get('https://localhost:7147/api/Room/GetRoomBySearchParameters', {
            params: {
                dateFrom: dateFrom,
                dateTo: dateTo,
                roomSize: roomSize
            }
        })
        .then(response => {
            console.log(response.data);
            setRoomData(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    };

    useEffect(() => {
        axios.get("https://localhost:7147/api/Room/GetAllRooms")
            .then((response) => {
                console.log(response.data);
                setRoomData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching room data:", error);
            });
    }, []);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#556cd6',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: '#red',
            },
            background: {
                default: '#f5f5f5',
            },
        },
    });

    return (
        <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <NavBar />
            <FilterBar
            dateFrom={dateFrom}
            setDateFrom={setDateFrom}
            dateTo={dateTo}
            setDateTo={setDateTo}
            roomSize={roomSize}
            setRoomSize={setRoomSize}
            makeApiCall={makeApiCall}
        />
            <ThemeProvider theme={theme}>
                <div style={{ backgroundColor: '#f5f5f5', marginRight: '30px' }}>
                    <RoomGrid rooms={roomData} />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Rooms;
import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RoomGrid from './RoomGrid';
import NavBar from '../NavBar';
import axios from 'axios';
const Rooms = () => {
    const [roomData, setRoomData] = useState([]);

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
            <ThemeProvider theme={theme}>
                <div style={{ backgroundColor: '#f5f5f5', marginRight: '30px' }}>
                    <RoomGrid rooms={roomData} />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Rooms;
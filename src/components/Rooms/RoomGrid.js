import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const RoomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: '#ffffff',
  borderRadius: '30px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.02)',
    '& $RoomFooter': {
      height: '100%',
      opacity: 1,
    },
  },
}));

const RoomImage = styled('div')(({ picture }) => ({
  backgroundImage: `url(${picture})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '400px',
  borderRadius: '8px',
}));

const RoomFooter = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: '0',
  left: '0',
  width: '100%',
  padding: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  height: 'auto',
  opacity: 1,
  transition: '0.3s',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
}));

const RoomFooterContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#ffffff',
});

const RoomFooterText = styled(Typography)({
  marginBottom: '8px',
});

const RoomFooterWrapper = ({ room }) => {
  return (
    <RoomFooter>
      <RoomFooterContent>
        <RoomFooterText variant="body2">{room.name}</RoomFooterText>
        <RoomFooterText variant="body2">{room.description}</RoomFooterText>
        <RoomFooterText variant="body2">Price: {room.price}</RoomFooterText>
      </RoomFooterContent>
    </RoomFooter>
  );
};

  const RoomGrid = ({ rooms }) => {
    const [hoveredRoomId, setHoveredRoomId] = useState(null);

  const handleRoomHover = (roomId) => {
    setHoveredRoomId(roomId);
  };

  const navigate = useNavigate();
  const redirectToRoomPage = (roomId) => {
    navigate(`/room/${roomId}`);
  };


  return (
    <div>
      <Grid container spacing={3}>
        {rooms.map((room) => (
          <Grid item key={room.id} xs={12} sm={6} md={4} lg={3}>

            <RoomPaper onMouseEnter={() => handleRoomHover(room.id)} 
                       onMouseLeave={() => handleRoomHover(null)}
                       onClick={() => redirectToRoomPage(room.id)}>

            <RoomImage picture={room.images} />
            {hoveredRoomId === room.id && ( <RoomFooterWrapper room={room} /> )}

            </RoomPaper>

          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default RoomGrid;
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface DisasterEvent {
  title: string;
  date: string;
  location: string;
  magnitude: number;
  intensity: string;
}

const DisasterInfo: React.FC<{ events: DisasterEvent[] }> = ({ events }) => {
  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        最新の災害情報速報
      </Typography>
      {events.map((event, index) => (
        <Paper key={index} elevation={1} sx={{ p: 2, mb: 2, '&:hover': { bgcolor: 'grey.100' } }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.date} 発生
          </Typography>
          <Typography variant="body2" color="text.secondary">
            震源地: {event.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            マグニチュード: {event.magnitude}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            最大震度: {event.intensity}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default DisasterInfo;
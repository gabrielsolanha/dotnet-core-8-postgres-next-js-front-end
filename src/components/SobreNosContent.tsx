import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function SobreNosContent() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '70vh',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Filmelier
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi corporis sint quis, asperiores aliquid soluta nesciunt, sed ducimus mollitia porro nihil explicabo numquam eum? Cumque perspiciatis vitae quae maxime nemo.
          </Typography>
          <Typography variant="body1">Desde 2020.</Typography>
        </Container>
      </Box>
  );
}
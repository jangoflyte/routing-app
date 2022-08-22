import { Container } from '@mui/material';

const style = {
  color: lightgrey,
  border: '2px solid black',
}

const NewContainer = () => (
  <Container maxWidth='md' sx={style}>
    Content to be displayed centered horizontally.
  </Container>
)
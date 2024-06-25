import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

export default function VideoPlayerModal( { proy } ) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant='plain' color='neutral' type="submit" onClick={() => setOpen(true)}>
        Abrir
      </Button>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 800,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {proy.nombre}
          </Typography>
          <video src={`http://177.222.103.79:3000/videos/${proy.codigo}`} controls ></video>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
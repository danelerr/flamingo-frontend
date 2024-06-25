import * as React from 'react';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';


export default function EliminarProyectoModal({idProy}) {


  const [open, setOpen] = React.useState(false);

  const EliminarProyecto = async (e) => {

      e.preventDefault();

      const res = await fetch(`http://177.222.103.79:3000/eliminar-proyecto/${idProy}`, {
          method: 'DELETE',
          headers: {
              "Content-Type": "application/json"
          }
      });
      const data = await res.json();
      console.log(data);
      console.log('eliminado');
      setOpen(false);
  }


  return (

    <React.Fragment>
      <Button
        type="submit"
        variant="plain"
        color="danger"
        sx={{
          color: 'red'
        }}
        endDecorator={<DeleteForever />}
        onClick={() => {
          setOpen(true)
        }}
      >
        Eliminar Proyecto
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog variant="outlined" role="alertdialog">
          <DialogTitle>
            <WarningRoundedIcon />
            ¿Realmente quieres borrar este proyecto?
          </DialogTitle>
          <Divider />
          <DialogContent>
            Recuerda que si borras este proyecto no podras recuperarlo, ni sus programas ni sus guiones
          </DialogContent>
          <DialogActions>
            <Button variant="solid" color="danger" onClick={EliminarProyecto}>
              Confirmar
            </Button>
            <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
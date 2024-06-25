import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Textarea from '@mui/joy/Textarea';

export default function CambiarNombreVideoModal({idProy, nombreProy, descProy}) {

    const [open, setOpen] = React.useState(false);

    const [nombre, setNombre] = React.useState({});

    const handleChange = (e) => {    
        setNombre({...nombre, [e.target.name]: e.target.value});
        console.log(nombre);

    }
    const CambiarNombreProyecto = async (e) => {

        e.preventDefault();
  
        const res = await fetch(`http://177.222.103.79:3000/actualizar-nombre-descripcion-proyecto/${idProy}`, {
            method: 'PUT',
            body: JSON.stringify(nombre),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        setOpen(false);
        window.location.reload();
    }
  

    return (
        <React.Fragment>

            <Button
                type='submit'
                variant='plain'
                color='neutral'
                onClick={() => {
                    setOpen(true);
                }}
            >
                Cambiar nombre y/o descripción
            </Button>


            <Modal open={open} 
                onClose={() => {setOpen(false)}}>
                <ModalDialog>
                    <DialogTitle> Cambiar el nombre al proyecto  </DialogTitle>
                    <DialogContent> Nombre actual: {nombreProy} </DialogContent>
                    <DialogContent> Descripción actual: {descProy} </DialogContent>
                    <form
                        onSubmit={CambiarNombreProyecto}
                    >   
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Nuevo Nombre </FormLabel>
                                <Input name='nombre'  autoFocus required onChange={handleChange} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Nueva Descripción </FormLabel>
                                <Textarea minRows={2} name='descripcion'  autoFocus required onChange={handleChange} />
                            </FormControl>
                            <Button 
                                type="submit"
                             color='primary'
                             sx={{ 
                                background: 'var(--degree, linear-gradient(253deg, #F5546B 14.48%, #588AFE 84.94%))', 
                                color: 'black', 
                                fontWeight: 'bold', 
                                width: '100%' 
                            }}
                            >
                                Actualizar datos
                            </Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}


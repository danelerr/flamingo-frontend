import { useState, Fragment } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import IconButton from '@mui/joy/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Stack from '@mui/joy/Stack';
import { Transition } from 'react-transition-group';
import EliminarVideoModal from './EliminarVideoModal.jsx'
import CambiarNombreVideoModal from './CambiarNombreVideoModal.jsx';
import ObtenerDetallesVideo from './ObtenerDetallesVideo.jsx';
import CambiarImagenVideoModal from './CambiarImagenVideoModal.jsx';
import VideoPlayerModal from './VideoPlayerModal.jsx';

function MenuVideosModal({ proy }) {

    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <IconButton
                style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%' }}
                onClick={() => {
                    setOpen(true)
                }}
            >
                <MoreHorizIcon />
            </IconButton>
            <Transition in={open} timeout={400}>
                {(state) => (
                    <Modal
                        keepMounted
                        open={!['exited', 'exiting'].includes(state)}
                        onClose={() => {
                            setOpen(false)
                        }}
                        slotProps={{
                            backdrop: {
                                sx: {
                                    opacity: 0,
                                    backdropFilter: 'none',
                                    transition: `opacity 400ms, backdrop-filter 400ms`,
                                    ...{
                                        entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                                        entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                                    }[state],
                                },
                            },
                        }}
                        sx={{
                            visibility: state === 'exited' ? 'hidden' : 'visible',
                        }}
                    >
                        <ModalDialog
                            layout="center"
                            sx={{
                                opacity: 0,
                                transition: `opacity 300ms`,
                                ...{
                                    entering: { opacity: 1 },
                                    entered: { opacity: 1 },
                                }[state],
                            }}
                        >
                            {/* <DialogTitle>Project 1</DialogTitle>
                            <DialogContent>Esta es la descripcion de los proyectos.</DialogContent> */}
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    setOpen(false);
                                }}
                            >
                                <Stack spacing={2} >

                                    <VideoPlayerModal proy={proy}/>

                                    <CambiarNombreVideoModal idProy={proy.id} nombreProy={proy.nombre} descProy={proy.descripcion} />

                                    {/* <Button style={{ backgroundColor: 'white', color: 'black', width: '100%' }} type="submit">Cambiar Miniatura </Button> */}


                                    <CambiarImagenVideoModal idProy={proy.id} />


                                    <ObtenerDetallesVideo idProy={proy.id} />


                                    {/* <Button style={{ backgroundColor: 'white', color: 'black', width: '100%' }} type="submit">Detalles del proyecto </Button> */}

                                    <EliminarVideoModal idProy={proy.id} />
                                </Stack>
                            </form>
                        </ModalDialog>
                    </Modal>
                )}
            </Transition>


        </Fragment>
    );
}


export default MenuVideosModal;



import Box from '@mui/joy/Box';
import MenuVideosModal from './modals/MenuVideosModal.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import zIndex from '@mui/material/styles/zIndex.js';


export default function VideoComponent({ proy }) {

    const navigate = useNavigate();

    const [miniatura, setMiniatura] = useState(null);

    // let imagenURL;
    // if (proy.imagen) {
    //     const blob = new Blob([new Uint8Array(proy.imagen.data)], { type: 'image/png' });
    //     imagenURL = URL.createObjectURL(blob);
    // }

    useEffect(() => {
        
        const fx = async () => {
            try {
                const response = await fetch(`http://177.222.103.79:3000/miniatura/${proy.codigo}`);
                if (response.ok) {
                    const blob = await response.blob();
                    setMiniatura(URL.createObjectURL(blob));
                } else {
                    console.error('Failed to fetch miniatura:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching miniatura:', error);
            }
        }
        fx();
    }, [])




    const handleClick = (event) => {

        let x = event.target.className;
        // console.log(x);
        if (typeof (x) == 'string' && x.indexOf('clasePROXXX111') != -1) {
            // navigate(`/generador/${proy.id}`);
        }
    };

    return (
        <Box
            className="clasePROXXX111"
            sx={{
                border: '2px solid white',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '250px',
                minHeight: '250px',
                margin: '10px',
            }}
            onClick={(e) => handleClick(e)}
        >
            <Box
                sx={{ backgroundColor: 'none', height: '160px' }}
                className="clasePROXXX111"
            >
                <img style={{ 
                    marginRight: '0.5rem',
                    position: 'relative', 
                    top: '1px', 
                    borderRadius:'10%',
                    // borderTopRightRadius: '10%',
                    // borderTopLeftRadius: '10%' 
                }} width="100%" height="100%" className="clasePROXXX111" src={miniatura} alt="nombre" />
            </Box>
            <Box
                sx={{
                    flex: '1', width: '100%',
                    backgroundColor: '#101622', display: 'flex',
                    alignItems: 'center',
                    maxWidth: '100%',
                    zIndex: '1',
                    justifyContent: 'space-between',
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}
                className="clasePROXXX111"
            >

                <Box style={{ height: 'auto', paddingLeft: '10px', overflow: 'hidden', wordWrap: 'break-word', fontFamily: '"Roboto"', }}
                    className="clasePROXXX111">
                    <p className="clasePROXXX111">
                        {proy.nombre}
                    </p>
                </Box>

                <Box style={{ height: 'auto', paddingRight: '10px' }}>
                    <MenuVideosModal proy={proy} />
                </Box>
            </Box>
        </Box>
    );
}
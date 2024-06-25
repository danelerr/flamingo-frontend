import Box from '@mui/joy/Box';
import VideoComponent from "./VideoComponent.jsx";
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import ColorLens from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

export default function Videos() {

    const [proyectos, setProyectos] = useState([]);

    const [search, setSearch] = useState('');

    const cargarProyectos = async () => {
        const res = await fetch(`http://177.222.103.79:3000/obtener-videos-usuario/${localStorage.getItem('id')}`);
        const data = await res.json();
        setProyectos(data);
        console.log(data);
    }

    useEffect(() => {
        cargarProyectos();
    }, []);

    let arrayFilter;
    if (search.length == 0) {
        arrayFilter = proyectos;
    } else {
        arrayFilter = proyectos.filter(proy => {
            const proyText = proy.nombre.toLowerCase();
            const searchText = search.toLowerCase();
            return proyText.includes(searchText);
        });
    }

    const buscarProyectos = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    return (
        <Box >
            <Input
                placeholder='Busca un proyecto'
                size="lg"
                sx={{
                    width: '500px',
                    borderRadius: '20px',
                    margin: '10px',
                    '&::before': {
                        display: 'none',
                    },
                    '&:focus-within': {
                        outline: '2px solid #5A87FD',
                        outlineOffset: '2px'
                    },
                    '&:focus': {
                        borderColor: 'pink', // Cambia este color al que desees
                        outline: 'none', // Elimina el borde predeterminado
                      },
                }}

                endDecorator={<ColorLens />}
                onChange={buscarProyectos}
            >
            </Input>

            
            <Typography 
                level="h1"
                sx={{ margin: '10px'}}
            >   Mis videos 
            </Typography>
            
            <Box style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                maxHeight: '86vh', // Usar minHeight en lugar de height
                overflowY: 'auto',
                alignItems: 'stretch',
                boxSizing: 'border-box'
            }}>
                {arrayFilter.map((proy) => (

                    <VideoComponent
                        key={proy.id}
                        proy={proy}
                    />

                ))}
            </Box>
        </Box>
    );
}

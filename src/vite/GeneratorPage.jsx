import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { makeid } from './Functions.js';
import SelectIAGroup from './SelectIAGroup.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'; 

export default function GeneratorPage() {

    const navigate = useNavigate();

    const [cargando, setCargando] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [videoSrc, setVideoSrc] = useState(null);
    const [videoBlob, setVideoBlob] = useState(null);
    const [guardado, setGuardado] = useState(false);

    const [nombreVideo, setNombreVideo] = useState("");

    useEffect(() => {
        const log = localStorage.getItem('id') !== null;
        if (!log) {
          navigate("/welcome");
        }
      }, []);
      
    const handlePrompt = (e) => {
        setPrompt(e.target.value);
        setGuardado(false);
    }

    const handleIA = async () => {
        setCargando(true);
        const namex = makeid(10);

        const queryJSON = { prompt: prompt, name: namex };
        try {
            const response = await fetch('http://177.222.103.79:5050/generar', {
                method: 'POST',
                body: JSON.stringify(queryJSON),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                console.log("ASI LLEGAAAAAAAAAA")
                console.log(response)
                const videoBlob1 = await response.blob();
                console.log("LUEGO DEL BLOOOOOOOOOOOOOOOOOOOBBBBBBBBBBBBBBBB")
                console.log(videoBlob1);
                const videoURL = URL.createObjectURL(videoBlob1);
                console.log("AHORA LA COCHINA URL")
                console.log(videoURL);
                setNombreVideo(namex);
                setVideoBlob(videoBlob1);
                setVideoSrc(videoURL);
            } else {
                console.error('Error al cargar el video');
            }
        } catch (error) {
            console.error('Error de red:', error);
        } finally {
            setCargando(false);
        }
    }

    const handleGuardar = async () => {
        if (!videoSrc || guardado) return; // No guarda si no hay video o ya se ha guardado
        console.log(videoSrc);
        try {
            const formData = new FormData();
            formData.append('archivo', videoBlob, nombreVideo+'.mp4'); // Cambia 'nombre_archivo.mp4' por el nombre que desees para el archivo
    
            const response1 = await fetch('http://177.222.103.79:3000/subir-video', {
                method: 'POST',
                body: formData,
            });
    

            // Subir video al endpoint /subir-video-bd
            const response2 = await fetch('http://177.222.103.79:3000/subir-video-bd', {
                method: 'POST',
                body: JSON.stringify({ nombre: nombreVideo, id: localStorage.getItem('id')}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response1.ok && response2.ok) {
                console.log('Videos guardados con éxito');
                setGuardado(true); // Marcar como guardado después de la solicitud exitosa
            } else {
                console.error('Error al guardar los videos');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }


    return (
        <Box sx={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>


            {/* Parte del generador de prompts */}
            <Box sx={{ paddingTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <Input
                    sx={{
                        border: 'none',
                        color: 'white',
                        backgroundColor: '#101622',
                        width: '80%',
                        height: '50px',
                        '&::before': { display: 'none' },
                        '&:focus-within': { outline: '2px solid #F5546B', outlineOffset: '2px' },
                        '&:focus': { borderColor: 'pink', outline: 'none' }
                    }}
                    onChange={handlePrompt}
                    placeholder='Escribe tu idea'
                />
                <Button
                    sx={{
                        borderRadius: '11px',
                        color: 'black',
                        height: '50px',
                        width: '150px',
                        background: 'var(--degree, linear-gradient(253deg, #F5546B 14.48%, #588AFE 84.94%))'
                    }}
                    loading={cargando}
                    onClick={handleIA}
                >
                    Generar
                </Button>
            </Box>

            {/* Parte de configuracion del modelo */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: '30px' }}>
                <SelectIAGroup />
            </Box>

            {cargando && (
                <Box sx={{ width: '100%' }}>
                    <LinearProgress color="primary" variant="solid" />
                    <br />
                    <LinearProgress color="neutral" variant="solid" />
                    <br />
                    <LinearProgress color="danger" variant="solid" />
                    <br />
                    <LinearProgress color="success" variant="solid" />
                    <br />
                    <LinearProgress color="warning" variant="solid" />
                    <LinearProgress color="primary" variant="solid" />
                    <br />
                    <LinearProgress color="neutral" variant="solid" />
                    <br />
                    <LinearProgress color="danger" variant="solid" />
                    <br />
                    <LinearProgress color="success" variant="solid" />
                    <br />
                    <LinearProgress color="warning" variant="solid" />
                    <LinearProgress color="primary" variant="solid" />
                    <br />
                    <LinearProgress color="neutral" variant="solid" />
                    <br />
                    <LinearProgress color="danger" variant="solid" />
                    <br />
                    <LinearProgress color="success" variant="solid" />
                    <br />
                    <LinearProgress color="warning" variant="solid" />
                </Box>
            )}

            {/* Parte del video */}

            {!cargando && (
                <Box sx={{ height: '700px', width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <video src={videoSrc} controls width="512px" height="512px"></video>
                    <Button color='success' disabled={!videoSrc || guardado}  onClick={handleGuardar}>
                        Guardar resultado en mi cuenta
                    </Button>
                </Box>
            )}
        </Box>
    )
}

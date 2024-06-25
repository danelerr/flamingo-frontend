import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null)
  const [prompt, setPrompt] = useState("");
  console.log(image)
  const loadImage = async () => {
    const req = await fetch(`http://177.222.103.79:5000/image/${encodeURIComponent(prompt)}`);
    const blobData = await req.blob();
    const img = URL.createObjectURL(blobData);
    setImage(img);
    // console.log(img);
  }

  return (
    <>
    <h2>
    🦩Flamingo API - Test🦩
    </h2>
    <div className='head'> 
        <input placeholder='ponga su prompt' type="text" name="input1" id="in1" onChange={(e)=>{setPrompt(e.target.value)}} onKeyDown ={async (e)=>{
          if (e.key == 'Enter') {
            await loadImage();
          }
        }} />
        <button type='submit' onClick={loadImage} >Generar</button>
    </div>
    <div id="d1">

     {image && <img src={image} alt="" /> }
    </div>
    <footer>
      @by Daniel Cueto
    </footer>
    </>
  )
}

export default App

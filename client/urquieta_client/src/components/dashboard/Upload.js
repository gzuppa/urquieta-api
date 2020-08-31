import React, { useState } from 'react'

export default function Upload() {

    const [fileInputState, setFileInputState] = useState('')
    const [previewSource, setPreviewSource] = useState()
    const [selectedFile, setSelectedFile] = useState('')
    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
    }
    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = (e) => {
        console.log("submitting")
        e.preventDefault()
        if(!previewSource) return
        uploadImage(previewSource)
    }

    const uploadImage = (base64EncodedImage) => {
        console.log(base64EncodedImage)
    }

    return(
        <div>
             <h1>Subir una imagen a carrusel de Landing Page</h1>
            <form onSubmit={handleSubmitFile}>
              <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState} />
              <button type="submit">Submit</button>
            </form>
            {previewSource && (
                <img src={previewSource} alt="chosen" style={{ height: '300px' }}/>
            )}
        </div>
    )
}
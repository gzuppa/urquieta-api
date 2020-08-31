import React, {useState, useEffect} from 'react'

export default function Home() {
    const [imageIds, setImageIds] = useState()

    const loadImages = async () => {
        try{
            const res = await fetch('/api/images')
            const data = await res.json()
            console.log(data)
            setImageIds(data)
        } catch(error) {
            console.error(error)
        }
    }
    useEffect(()=> {
        loadImages()
    }, [])
    return(
         <div>
             <h1>Home</h1>
         </div>
    )
}
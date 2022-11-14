import { useState, useEffect } from "react";

const ImageTest = () => {
    const [path, setPath] = useState('')

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/rent/image');
            const blob = await response.blob()
            setPath(URL.createObjectURL(blob))
        }

        fetchData()
    }, [])

    return (
        <>
            <img src={path} />
        </>
    )
  };
  
export default ImageTest;
  
"use client";

import { useEffect, useState } from "react";

const GetMongoImage = () => {
    const [images, setImages] = useState([]); // Initialize to an empty array
    const [error, setError] = useState(null); // For error handling

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/upload-mongo-img');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log({ result });

                if (result.status === 200) { // Assuming your API returns a status
                    setImages(result.images); // Store images in state
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                console.error(error); // Log error for debugging
                setError('Failed to fetch images. ' + error.message); // Set error state
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            <h2>Get Images From MongoDB</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
            {images.length === 0 ? (
                <p>No images found.</p> // Message if no images
            ) : (
                <ul>
                    {images.map((image, index) => (
                        <li key={index}>
                            <h3>{image.name}</h3>
                            <img 
                                src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`} 
                                alt={image.name} 
                                style={{ width: '100px', height: '100px' }} 
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GetMongoImage;

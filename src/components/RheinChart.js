import React, {useState, useEffect} from 'react';

const ImageComponent = () => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        // URL der API, die das PNG-Bild liefert
        const apiEndpoint = 'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/a6ee8177-107b-47dd-bcfd-30960ccc6e9c/w/measurements.png';

        // Abrufen des Bildes
        fetch(apiEndpoint)
            .then(response => {
                if (response.ok) {
                    return response.blob();
                }
                throw new Error('Netzwerkantwort war nicht ok.');
            })
            .then(blob => {
                const imageObjectUrl = URL.createObjectURL(blob);
                setImageUrl(imageObjectUrl);
            })
            .catch(error => {
                console.error('Fehler beim Laden des Bildes:', error);
            });

        // Bereinigungsfunktion, um den erstellten Object URL freizugeben
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, []); // Leeres Abhängigkeitsarray, damit der Effekt nur beim Mounten ausgeführt wird

    if (!imageUrl) {
        return <div>Lädt...</div>;
    }

    return <img src={imageUrl} alt="Geladenes Bild"/>;
};

export default ImageComponent;

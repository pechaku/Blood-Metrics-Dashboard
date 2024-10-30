import React, { useState, useEffect } from 'react';

function Analyze() {

    const [metrics] = useState([
        {
            id: '001',
            date: '2023-07-01',
            a1c: 5.6,
            ldl: 120,
            vitaminD: 18,
            bloodPressure: '120/80',
            glucose: 98,
        },
        {
            id: '002',
            date: '2023-06-15',
            a1c: 6.1,
            ldl: 145, 
            vitaminD: 25, 
            bloodPressure: '130/85', 
            glucose: 110,
        },
        {
            id: '003',
            date: '2023-05-10',
            a1c: 6.4, 
            ldl: 160, 
            vitaminD: 15, 
            bloodPressure: '140/90', 
            glucose: 126, 
        },
    ]);
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:11434/api/generate',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            model: "llama2",
                            prompt: "Given the following data, analyze the health risk of each patient in different paragraphs: " + JSON.stringify(metrics),
                            stream: false
                        })
                    });
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : data ? (
                <p>Analysis: {data.response}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Analyze;
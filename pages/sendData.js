const sendDataToApi = async (data) => {
    try {
        const response = await fetch('./api/post-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }), // Assuming 'data' is an object
        });

        if (!response.ok) {
            throw new Error('Failed to send data');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error sending data:', error);
        return null;
    }
};

export default sendDataToApi;

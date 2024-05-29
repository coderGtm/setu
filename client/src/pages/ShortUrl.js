import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PageNotFound from './PageNotFound';
import Redirecting from '../components/Redirecting';

const ShortUrlRedirect = () => {
    const { isFinding, setIsFinding } = useState(true);
    const { shortId } = useParams();

    useEffect(() => {
        const handleRedirect = async () => {
            try {
                const response = await axios.get(`/visit/${shortId}`);
                window.location.href = response.data.redirectURL;
            } catch (err) {
                console.error("Error redirecting", err);
                // Optionally, handle the error, e.g., show an error message to the user
                if (err.response && err.response.status === 404) {
                    // render the PageNotFound page
                    setIsFinding(false);
                }
            }
        };

        handleRedirect();
    }, [shortId, setIsFinding]);

    return (
        isFinding ? <Redirecting /> : <PageNotFound />
    );
};

export default ShortUrlRedirect;
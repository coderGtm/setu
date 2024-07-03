import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageNotFound from "./PageNotFound";
import Redirecting from "../components/Redirecting";

const ShortUrlRedirect = () => {
  const { shortId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const response = await axios.get(`api/url/visit/${shortId}`);
        window.location.href = response.data.redirectURL;
      } catch (err) {
        // Optionally, handle the error, e.g., show an error message to the user
        if (err.response && err.response.status === 404) {
          // render the PageNotFound page
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    handleRedirect();
  }, [shortId]);

  if (loading) {
    return <Redirecting />;
  }

  if (error) {
    return <PageNotFound />;
  }

  return null;
};

export default ShortUrlRedirect;

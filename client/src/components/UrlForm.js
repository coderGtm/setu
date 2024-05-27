import React, {useState} from 'react';
import axios from "axios";

function UrlForm() {
    const token = localStorage.getItem("authToken");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token || ""
    };

    const [url, setUrl] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/url/new", {
                url
            }, {headers});
            console.log(response);
            const shortId = response.data.id;
            alert("Short URL created: " + window.location.origin + "/" + shortId);
        } catch (err) {
            console.log(err);
            alert(err.response.data.msg);
        }
    }

    if (token === null) {
        return <p>Please login to create short urls</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="url" value={url} onChange={(e)=>setUrl(e.target.value)} />
            <button type="submit">Create Short Url</button>
        </form>
    )
}

export default UrlForm;
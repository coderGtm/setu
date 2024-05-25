import React, {useState} from 'react';

function UrlForm() {
    const [url, setUrl] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(url);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="url" value={url} onChange={(e)=>setUrl(e.target.value)} />
            <button type="submit">Create Short Url</button>
        </form>
    )
}

export default UrlForm;
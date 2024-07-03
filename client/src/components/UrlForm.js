import React, {useState} from 'react';
import axios from "axios";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";


import {
  Card,
  Col,
  Row,
  Typography,
  Input,
  Button,
} from "antd";



function UrlForm() {
    const { Title } = Typography;  
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
      <>
        <div className="layout-content">
  
          <Row gutter={[24, 0]}>
            
            <Col xs={24} md={12} sm={24} lg={12} xl={10} className="mb-24">
              <Card bordered={false} className="criclebox card-info-2 h-full">
                <div className="col-content">
                  <div className="card-content">
                    <Title level={5}>Enter URL to shorten:</Title>
                    <form onSubmit={handleSubmit}>
                        <Input placeholder='Enter long url...' type='url' value={url} onChange={(e)=>setUrl(e.target.value)} />
                        <Button className='my-3' type="primary" htmlType='submit'>Create Short Url</Button>
                    </form>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default UrlForm;
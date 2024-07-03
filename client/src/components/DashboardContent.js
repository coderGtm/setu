import { useState } from "react";
import "../assets/styles/main.css";
import "../assets/styles/responsive.css";

import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";


import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava4 from "../assets/images/logo-spotify.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";

function DashboardContent() {
  const { Title } = Typography;


  const list = [
    {
      img: ava1,
      Title: "https://www.shopify.com/",
      bud: <Paragraph>14</Paragraph>,
      progress: <Paragraph>12 Jun 2023</Paragraph>,
      member: <Paragraph>setu.com/skid</Paragraph>,
    },
    {
      img: ava2,
        Title: "https://www.atlassian.com/",
        bud: <Paragraph>5</Paragraph>,
        progress: <Paragraph>16 Jun 2023</Paragraph>,
        member: <Paragraph>setu.com/ehsi</Paragraph>,
    },
    {
      img: ava3,
        Title: "https://www.slack.com/",
        bud: <Paragraph>8</Paragraph>,
        progress: <Paragraph>20 Jun 2023</Paragraph>,
        member: <Paragraph>setu.com/rmxg</Paragraph>,
    },
    {
      img: ava4,
        Title: "https://www.spotify.com/",
        bud: <Paragraph>10</Paragraph>,
        progress: <Paragraph>24 Jun 2023</Paragraph>,
        member: <Paragraph>setu.com/dhxj</Paragraph>,
    },
    {
      img: ava5,
        Title: "https://www.jira.com/",
        bud: <Paragraph>7</Paragraph>,
        progress: <Paragraph>28 Jun 2023</Paragraph>,
        member: <Paragraph>setu.com/ehsi</Paragraph>,
    },

    {
      img: ava6,
        Title: "https://www.invisionapp.com/",
        bud: <Paragraph>3</Paragraph>,
        progress: <Paragraph>30 Jun 2023</Paragraph>,
        member: <Paragraph>setu.com/ehsi</Paragraph>,
    },
  ];



  return (
    <>
      <div className="layout-content">
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="my-24 mx-auto">
            <Card bordered={false} className="criclebox cardbody h-full">
              <div className="project-ant">
                <div>
                  <Title level={5}>My Setus</Title>
                </div>
              </div>
              <div className="ant-list-box table-responsive">
                <table className="width-100">
                  <thead>
                    <tr>
                      <th>Long URL</th>
                      <th>Short URL</th>
                      <th>Visits</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((d, index) => (
                      <tr key={index}>
                        <td>
                          <h6>
                            <img
                              src={d.img}
                              alt=""
                              className="avatar-sm mr-10"
                            />{" "}
                            {d.Title}
                          </h6>
                        </td>
                        <td>{d.member}</td>
                        <td>
                          <span className="text-xs font-weight-bold">
                            {d.bud}{" "}
                          </span>
                        </td>
                        <td>
                          <div className="percent-progress">{d.progress}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default DashboardContent;

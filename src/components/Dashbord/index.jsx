import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Col from 'react-bootstrap/Col';
import { CreateDevice } from '../Devices/CreateDevice';
import { CreatePort } from '../Ports/CreatePort';
import DeviceGroups from '../DeviceGroups/Index';
import Ports from '../Ports';
import Row from 'react-bootstrap/Row';
import SelectDevices from '../Devices/SelectDevices';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Dashboard = () => {
  const { device } = useContext(AppContext);
  return (
    <>
      <div className="mx-5">
        <div className="row">
          <Col md={2}>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col sm={12} className="d-flex justify-content-end">
                    <p className="mx-2">Dispositivos creados</p>
                    <CreateDevice className="" />
                    <CreatePort />
                  </Col>
                  <Col sm={12}>
                    <SelectDevices />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col md={10}>
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                {device && (
                  <DeviceGroups device_groups={device.device_groups} />
                )}
              </Tab>
              <Tab eventKey="profile" title="Profile">
                {device ? <Ports /> : null}
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <p>t</p>
              </Tab>
            </Tabs>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

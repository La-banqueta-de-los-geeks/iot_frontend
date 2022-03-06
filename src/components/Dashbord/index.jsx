import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';
import Col from 'react-bootstrap/Col';
import { CreateDevice } from '../Devices/CreateDevice';
import DeviceGroups from '../DeviceGroups/Index';
import Ports from '../Ports';
import Row from 'react-bootstrap/Row';
import SelectDevices from '../Devices/SelectDevices';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Dashboard = () => {
  const {
    device,
    setDeviceGroup,
    device_group,
    registerDeviceGroup,
    addDeviceGroups,
    device_groups,

    registerDeviceSequence,
    addDeviceSequence,
    deviceSequences,
    setDeviceSequences,
    organization,
    deviceSequence,
    setDeviceSequence,
    registerNewPortValue,
    getAllPortValues,
    portValues,
    getAllSequences,
    device_ports,
    setSequence,
    sequence,
    registerSequence,
  } = useContext(AppContext);
  return (
    <>
      <div className="mx-5">
        <div className="row">
          <Col md={2}>
            <div className="card">
              <div className="card-body">
                <Row>
                  <Col sm={12}>
                    <p className="mx-2">Dispositivos creados</p>
                  </Col>
                  <Col sm={12}>
                    <CreateDevice />
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
                  <DeviceGroups
                    registerSequence={registerSequence}
                    portValues={portValues}
                    setDeviceSequence={setDeviceSequence}
                    devicePorts={device_ports}
                    addDeviceSequence={addDeviceSequence}
                    deviceGroup={device_group}
                    deviceSequences={deviceSequences}
                    setDeviceSequences={setDeviceSequences}
                    deviceGroups={device_groups}
                    device={device}
                    setDeviceGroup={setDeviceGroup}
                    addDeviceGroups={addDeviceGroups}
                    registerDeviceGroup={registerDeviceGroup}
                    registerDeviceSequence={registerDeviceSequence}
                    deviceSequence={deviceSequence}
                  />
                )}
              </Tab>
              <Tab eventKey="profile" title="Profile">
                {device ? (
                  <Ports
                    portValues={portValues}
                    registerNewPortValue={registerNewPortValue}
                    getAllPortValues={getAllPortValues}
                  />
                ) : null}
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

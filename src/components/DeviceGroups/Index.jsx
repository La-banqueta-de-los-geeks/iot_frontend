import React, { useContext, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Sequences } from '../Sequences/Index';
import { getDeviceSequences } from '../../services/resources/device_sequences';
import { CreateGroup } from './CreateGroup';

const DeviceGroups = ({
  device_groups,
  device,
  addDeviceGroups,
  setDeviceGroup,
  device_group,
  device_sequences,
  setDeviceSequences,
  registerDeviceGroup,
}) => {
  useEffect(() => {
    if (!device_group) return;
    getDeviceSequences(device_group.id).then((response) => {
      let { device_sequences } = response;
      setDeviceSequences(device_sequences);
    });
  }, [device_group]);

  return (
    <Row>
      {device_groups.length !== 0 ? (
        <Row>
          <Col sm={3} md={2}>
            <CreateGroup
              device={device}
              setDeviceGroup={setDeviceGroup}
              addDeviceGroups={addDeviceGroups}
              registerDeviceGroup={registerDeviceGroup}
            />
            <div className="menu-main-device_groups">
              <ListGroup className="content-device_groups">
                {device_groups.map((device_group) => (
                  <ListGroup.Item
                    className="display-pointer"
                    key={device_group.id}
                    onClick={() => {
                      setDeviceGroup(device_group);
                    }}
                  >
                    {device_group.name}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
          <Col sm={9} md={10}>
            <Row>
              {device_sequences.length !== 0 ? (
                device_sequences.map((device_sequence) => (
                  <Col sm={12} md={4} key={device_sequence.id}>
                    <Sequences name={device_sequence.name} />
                  </Col>
                ))
              ) : (
                <p>no hay nada we</p>
              )}
            </Row>
          </Col>
        </Row>
      ) : (
        <p>No existen secuencias</p>
      )}
    </Row>
  );
};

export default DeviceGroups;

import React, { useEffect } from 'react';
import { Form, Button, Card, Row, Col, ListGroup } from 'react-bootstrap';
import { Sequences } from '../DeviceSequences/Index';
import { getDeviceSequences } from '../../services/resources/device_sequences';
import { CreateGroup } from './CreateGroup';
import { NewSequence } from '../DeviceSequences/NewDeviceSequence';
import { CustomModal } from '../Utils/Modal';
import { setChangeValue } from '../../config/utils';

const DeviceGroups = ({
  deviceGroups,
  device,
  addDeviceGroups,
  setDeviceGroup,
  deviceGroup,
  deviceSequences,
  addDeviceSequence,
  setDeviceSequences,
  registerDeviceGroup,
  registerDeviceSequence,
  devicePorts,
  portValues,
  deviceSequence,
  setDeviceSequence,
  registerSequence,
}) => {
  useEffect(() => {
    if (!deviceGroup) return;
    getDeviceSequences(deviceGroup.id).then((response) => {
      let { device_sequences } = response;
      setDeviceSequences(device_sequences);
    });
  }, [deviceGroup]);
  const elementON = (device_group) => {
    let classname = 'display-pointer';
    if (device_group && deviceGroup && device_group.id === deviceGroup.id)
      return `${classname} bg-primary text-white `;
    return classname;
  };

  const [showModalNewSequence, setShowModalNewSequence] = React.useState(false);
  const handleClose = () => setShowModalNewSequence(false);
  const handleShow = (deviceSequence) => {
    setDeviceSequence(deviceSequence);
    setShowModalNewSequence(true);
  };

  const [newSequence, setNewDeviceSequence] = React.useState({});
  const [selectPortValue, setSelectPortValue] = React.useState({});

  React.useEffect(() => {
    const value = portValues.find((portValue) => {
      return newSequence.port_value_id == portValue.id;
    });
    setSelectPortValue(value);
  }, [newSequence]);

  return (
    <Row>
      {deviceGroups ? (
        <Row>
          <Col sm={3} md={2}>
            <div className="menu-main-device_groups">
              {deviceGroups.length > 0 ? (
                <ListGroup className="content-device_groups">
                  {deviceGroups.map((device_group) => (
                    <ListGroup.Item
                      className={elementON(device_group)}
                      key={device_group.id}
                      onClick={() => {
                        setDeviceGroup(device_group);
                      }}
                    >
                      {device_group.name}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <p>Registra un grupo primero</p>
              )}
            </div>
          </Col>
          <Col sm={9} md={10}>
            <Row>
              <Col sm={12}>
                <Card className="px-1 py-1 mb-1">
                  <Row>
                    <Col sm={{ offset: 0, span: 4 }}>
                      <CreateGroup
                        offsetSpanColButton="0"
                        spanColButton="12"
                        device={device}
                        setDeviceGroup={setDeviceGroup}
                        addDeviceGroups={addDeviceGroups}
                        registerDeviceGroup={registerDeviceGroup}
                      />
                    </Col>
                    {deviceGroup?.id && (
                      <Col sm={{ offset: 0, span: 4 }}>
                        <NewSequence
                          offsetSpanColButton="0"
                          spanColButton="12"
                          deviceGroup={deviceGroup}
                          device={device}
                          addDeviceSequence={addDeviceSequence}
                          registerDeviceSequence={registerDeviceSequence}
                        />
                      </Col>
                    )}
                  </Row>
                </Card>
              </Col>
              {deviceSequences.length !== 0 ? (
                deviceSequences.map((device_sequence) => (
                  <Col sm={12} md={4} key={device_sequence.id}>
                    <Sequences
                      name={device_sequence.name}
                      componentButtonAction={() =>
                        devicePorts && (
                          <Button
                            onClick={() => {
                              handleShow(device_sequence);
                            }}
                          >
                            Registrar nueva secuencia
                          </Button>
                        )
                      }
                      componentButtonSecondary={() => (
                        <Button>Ver secuencias</Button>
                      )}
                    />
                  </Col>
                ))
              ) : (
                <p>No hay nada we</p>
              )}
              <CustomModal
                buttonActionText="Crear secuencias"
                buttonActionVariant="primary"
                ModalTitle="Agregar Secuencia"
                show={showModalNewSequence}
                hiddenButtonAction={true}
                handleClose={handleClose}
              >
                {devicePorts && portValues && (
                  <>
                    <Form.Select
                      className="my-1"
                      name="device_port_id"
                      onChange={(e) =>
                        setChangeValue(e, newSequence, setNewDeviceSequence)
                      }
                      aria-label="Default select example"
                    >
                      {devicePorts.map((devicePort) => (
                        <option key={devicePort.id} value={devicePort.id}>
                          {devicePort.port}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Select
                      className="my-1"
                      name="port_value_id"
                      onChange={(e) => {
                        setChangeValue(e, newSequence, setNewDeviceSequence);
                      }}
                      aria-label="Default select example"
                    >
                      {portValues.map((portValue) => (
                        <option key={portValue.id} value={portValue.id}>
                          {`${portValue.name}`}
                        </option>
                      ))}
                    </Form.Select>
                    {selectPortValue && (
                      <div className="my-1 px-3 py-3 bg-secondary" sm={12}>
                        <p> {selectPortValue.value} </p>
                      </div>
                    )}
                    {newSequence?.port_value_id && newSequence?.device_port_id && (
                      <Button
                        onClick={() => {
                          const payload = newSequence;
                          payload.device_sequence_id = deviceSequence.id;
                          registerSequence(
                            device,
                            deviceGroup,
                            deviceSequence,
                            payload
                          );
                        }}
                      >
                        Registrar
                      </Button>
                    )}
                  </>
                )}
              </CustomModal>
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

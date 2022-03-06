import { ButtonDashboard, PortsContainer } from '../../styles';
import React, { useContext, useEffect } from 'react';
import { Col, Card, Row, Button } from 'react-bootstrap';
import AppContext from '../../context/AppContext';
import portsEnpoints from '../../services/resources/ports';
import { setAuthUserToken } from '../../services/ApiInstance';
import { CreatePort } from './CreatePort';
import { PortValue } from '../PortValues/PortValue';
import { CustomModal } from '../Utils/Modal';
import { NewPortValue } from '../PortValues/NewPortValue';

const Ports = ({ registerNewPortValue, getAllPortValues, portValues }) => {
  const { device, device_ports, setDevicePorts } = useContext(AppContext);
  const { device_token } = device;
  const [devicePort, setDevicePort] = React.useState(null);
  setAuthUserToken(device_token);
  const filterPorts = (device_port, ports) => {
    return ports.map((port) => {
      if (port.id === device_port.id) return device_port;
      else return port;
    });
  };
  const handleClick = (device_port) => {
    portsEnpoints
      .updatePort(device_port.id, {
        device_port: {
          status: device_port.status == 'ON' ? 'OFF' : 'ON',
        },
      })
      .then((result) => {
        setDevicePorts(filterPorts(result.data.device_port, [...device_ports]));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showIndexModal, setShowIndexModal] = React.useState(false);
  const handleClose = () => setShowIndexModal(false);
  const handleShow = () => setShowIndexModal(true);
  const [showNewModal, setShowNewModal] = React.useState(false);
  const handleNewClose = () => setShowNewModal(false);
  const handleNewShow = (devicePort) => {
    setDevicePort(devicePort);
    setShowNewModal(true);
  };
  useEffect(() => {
    getAllPortValues();
  }, [device]);
  return (
    <div className="row">
      <Col sm={12}>
        <Card className="px-1 py-1 mb-1">
          <Row>
            <Col sm={{ offset: 0, span: 4 }}>
              <CreatePort />
            </Col>
            <Col sm={{ offset: 0, span: 4 }}>
              <NewPortValue registerNewPortValue={registerNewPortValue} />
            </Col>
            <Col sm={{ offset: 0, span: 4 }}>
              <CustomModal
                buttonActionText="Ver values"
                buttonActionVariant="primary"
                ModalTitle="Values Disponibles"
                show={showIndexModal}
                handleClose={handleClose}
                handleShow={handleShow}
              >
                {portValues &&
                  portValues.map((portValue) => (
                    <PortValue portValue={portValue} key={portValue.id} />
                  ))}
              </CustomModal>
            </Col>
          </Row>
        </Card>
      </Col>

      {device_ports && device_ports.length !== 0 ? (
        device_ports.map((device_port) => (
          <div className="col-sm-3 col-md-2 py-2 " key={device_port.id}>
            <Card className="px-1 py-1">
              <p>{`Port ${device_port.port}`}</p>
              <Button
                className="mb-1"
                as={Col}
                md={{ span: 12 }}
                variant="primary"
                onClick={() => {
                  handleClick(device_port);
                }}
              >
                {device_port.status}
              </Button>
              <Button
                className="mb-1"
                as={Col}
                md={{ span: 12 }}
                variant="primary"
                onClick={() => {
                  handleNewShow(device_port);
                }}
              >
                Agregar nuevo value
              </Button>
            </Card>
          </div>
        ))
      ) : (
        <p>No existen puetos registrados</p>
      )}
    </div>
  );
};
export default Ports;

import React from 'react';
import Ports from './Ports';
import { DashboardContainer, ButtonDashboard } from '../styles';

const DashBoard = () => (
  <>
    <DashboardContainer>
      <aside className="dashboard-sidemenu">
        <form action="" method="post">
          <select className="device-select" name="Devices" id="device">
            <option value="">Elige tu dispositivo</option>
            <option value="device1">Device 1</option>
            <option value="device2">Device 2</option>
            <option value="device3">Device 3</option>
          </select>
        </form>
        <div className="dashboard-device">
          <div className="device-tittle">
            <h2>Raspberry A</h2>
            <ButtonDashboard className="fix" type="button">
              E
            </ButtonDashboard>
          </div>
          <p>Trabajando</p>
          <ButtonDashboard type="button">Agregar Puerto</ButtonDashboard>
        </div>
      </aside>
      <div className="dashboard-ports-container">
        <Ports />
        <Ports />
        <Ports />
      </div>
    </DashboardContainer>
  </>
);

export default DashBoard;

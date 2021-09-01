import React, { useContext } from 'react';
import Ports from '../Ports';
import SelectDevices from '../Devices/SelectDevices';
import Device from '../Devices/Device';
import AppContext from '../../context/AppContext';
import { DashboardContainer } from '../../styles';


const Dashboard = () => {
  const { device } = useContext(AppContext);
  return (
    <>
      <DashboardContainer>
        <aside className="dashboard-sidemenu">
          <SelectDevices />
          {device && <Device device={device} />}
        </aside>
        <div className="dashboard-ports-container">
          {device ? <Ports /> : null}
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

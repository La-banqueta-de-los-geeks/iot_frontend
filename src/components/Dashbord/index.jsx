import React, { useContext } from 'react';
import Ports from '../Ports';
import '../../assets/styles/components/Dashboard.scss';
import SelectDevices from '../Devices/SelectDevices';
import Device from '../Devices/Device';
import AppContext from '../../context/AppContext';

const Dashboard = () => {
  const { device } = useContext(AppContext);
  return (
    <>
      <section className="dashboard">
        <aside className="dashboard-sidemenu">
          <SelectDevices />
          <Device device={device} />
        </aside>
        <div className="dashboard-ports-container">
          {device ? <Ports /> : null}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

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
      <div className="mx-5">
        <div className="row">
          <div className="col-md-3">

            <div className="card">
              <div className="card-body">
                <SelectDevices />
                
                {device && <Device device={device} />}
              </div>
            </div></div>
          <div className="col-md-9">
            {device ? <Ports /> : null}
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;

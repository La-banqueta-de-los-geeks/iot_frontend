import React, { useContext } from 'react';
import Ports from '../Ports';
import SelectDevices from '../Devices/SelectDevices';
import { CreateDevice } from '../Devices/CreateDevice';
import Device from '../Devices/Device';
import AppContext from '../../context/AppContext';


const DashboardDevices = () => {
  const { device } = useContext(AppContext);
  return (
    <>
      <div className="mx-5">
        <div className="row">
          <div className="col-md-3">

            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-10">
                    <SelectDevices />
                  </div>
                  <div className="col-sm-2 py-2">
                    <CreateDevice />
                  </div>
                </div>

                {device && <Device device={device} />}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {device ? <Ports /> : null}
          </div>

        </div>
      </div>
    </>
  );
};

export default DashboardDevices;

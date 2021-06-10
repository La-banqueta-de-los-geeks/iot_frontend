import React from 'react'
import Ports from './Ports'
import '../assets/styles/components/Dashboard.scss'



const Dashboard = () => (
  <>
    <section className='dashboard'>
      <aside className='dashboard-sidemenu'>
        <form action="" method="post">
          <select className='device-select' name="Devices" id="device">
            <option value="">Elige tu dispositivo</option>
            <option value="device1">Device 1</option>
            <option value="device2">Device 2</option>
            <option value="device3">Device 3</option>
          </select>
        </form>
        <div className="dashboard-device">
          <div className="device-tittle">
            <h2>Raspberry A</h2>
            <button className='button-style fix' type='button'>E</button>
          </div>
          <p>Trabajando</p>
          <button type='button' className='button-style'>Agregar Puerto</button>
        </div>
      </aside>
      <div className='dashboard-ports-container'>
        <Ports />
        <Ports />
        <Ports />
     
      </div>
    </section>
  </>
)

export default Dashboard
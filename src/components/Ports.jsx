import React from 'react'
import { Ports , ButtonDashboard} from '../styles'

export default () => (
  <Ports>
    <p>Puerto 8</p>
    <form action="" method="post">
      <select className='options-select minimal' name="options" id="options">
        <option value="options1">Option 1</option>
        <option value="options2">Option 2</option>
        <option value="options3">Option 3</option>
      </select>
    </form>
    <ButtonDashboard type="button">Send</ButtonDashboard>
  </Ports>
)




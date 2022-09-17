import React from 'react'

import { Accordion, Section, Section2 } from 'coolbiej'
import 'coolbiej/dist/index.css'
import {FAQ} from './dummyData'

const App = () => {
 

return <>
    <Accordion data={FAQ} />
    <Section>CSS Module with normal name</Section>
    <Section2>CSS Module</Section2>
  </>
}

export default App
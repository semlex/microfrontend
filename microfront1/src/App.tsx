import React, { FC, ReactElement } from 'react'
import Increment from './components/Increment'
import './index.css'

const App: FC = (): ReactElement => (
  <div>
    <Increment />
  </div>
)

export default App

import React, { FC, ReactElement } from 'react'
import { useStore } from 'shell/useStore'

import './styles.css'

const Increment: FC = (): ReactElement => {
  const { increment } = useStore()

  return (
    <button className="increment-button" onClick={increment}>
      Increment
    </button>
  )
}

export default Increment
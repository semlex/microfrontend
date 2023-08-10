import React, { FC, ReactElement } from 'react'
import { useStore } from 'shell/useStore'

import './styles.css'

const Decrement: FC = (): ReactElement => {
  const { decrement } = useStore()

  return (
    <button className="decrement-button" onClick={decrement}>
      Decrement
    </button>
  )
}

export default Decrement
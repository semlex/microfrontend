import React, { FC, ReactElement, Suspense } from 'react'
import { useAppSelector } from './hooks/useAppSelector'
import './index.css'

const Increment = React.lazy(() => import('microfront1/Increment'))
const Decrement = React.lazy(() => import('microfront2/Decrement'))

const App: FC = (): ReactElement => {
  const count = useAppSelector((state) => state.counter.value)

  return (
    <>
      <header className="header">
        <h1 className="count">Счетчик: {count}</h1>
      </header>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Increment />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <Decrement />
        </Suspense>
      </div>
    </>
  )
}

export default App

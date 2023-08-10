import React, { FC, ReactElement, ReactChild } from 'react'
import { store } from '../store/store'
import { Provider } from 'react-redux'

type Props = {
  children: ReactChild
}

export const StoreProvider: FC<Props> = ({ children }: Props): ReactElement => (
  <Provider store={store}>{children}</Provider>
)

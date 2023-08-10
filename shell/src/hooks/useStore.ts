import { useAppSelector } from './useAppSelector'
import { useAppDispatch } from './useAppDispatch'
import { decrement, increment } from '../store/counter/counterSlice'

export const useStore = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}

import { useDispatch, useSelector } from 'react-redux'
import type { TRootState, TAppDispatch } from '../store'


// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<TAppDispatch>()   // for dispatching actions
export const useAppSelector = useSelector.withTypes<TRootState>()  // for reading/subscribing state
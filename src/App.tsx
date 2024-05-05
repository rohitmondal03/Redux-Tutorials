import { useAppDispatch, useAppSelector } from './redux/hooks'
import { increment, decrement } from './redux/slices/counter';
import MyComp from './MyComp';
import "./App.css"


export default function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <h1>Count is {count}</h1>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>

      <MyComp />
    </>
  )
}

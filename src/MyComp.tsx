import { useAppSelector } from "./redux/hooks"


export default function MyComp() {
  const count = useAppSelector(state => state.counter);

  return (
    <h1>My comp: {count}</h1>
  )
}

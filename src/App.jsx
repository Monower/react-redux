import { useSelector } from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <div>
        <h1>Counter App</h1>
        { counter }
      </div>
    </>
  )
}

export default App

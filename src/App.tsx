import useRouteElements from "./hooks/useRouteElements"

function App() {
  const routeElements = useRouteElements()

  return <div>
    {routeElements}
  </div>
}

export default App


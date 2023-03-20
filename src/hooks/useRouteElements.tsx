import { useRoutes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: <HomePage />,
    }
  ])
  return routeElements
}

export default useRouteElements

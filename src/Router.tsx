import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Issue } from './pages/Issue'

export function Router() {
  const location = useLocation()

  // Update body height when the route changes
  useEffect(() => {
    window.scrollTo(0, 0) // Reset scroll position when navigating
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:issueNumber" element={<Issue />} />
      </Route>
    </Routes>
  )
}

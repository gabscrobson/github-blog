import { Outlet } from 'react-router-dom'

import { LayoutContainer, LayoutContent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <img src="/background.jpg" alt="background" />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}

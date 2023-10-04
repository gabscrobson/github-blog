import { Profile } from '../../Components/Profile'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile username="gabscrobson" />
      <h1>Home</h1>
    </HomeContainer>
  )
}

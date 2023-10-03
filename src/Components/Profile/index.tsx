import { ProfileContainer, ProfileInfoContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/89519105?v=4"
        alt="profile image"
      />
      <ProfileInfoContainer>
        <h2>Gabriel Accetta</h2>
        <p>teste</p>
        <p>teste</p>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}

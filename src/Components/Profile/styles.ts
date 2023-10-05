import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme.baseProfile};
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  > img {
    width: 10rem;
    height: 10rem;
    border-radius: 8px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
      width: 8rem;
      height: 8rem;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`

export const ProfileInfoContainer = styled.div`
  flex: 1;
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
`

export const ProfileInfoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2 {
    color: ${(props) => props.theme.baseTitle};
  }
`

export const GithubLink = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.baseLink};
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.2s;
  border-bottom: 1px solid transparent;

  svg {
    margin-top: -0.2rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.baseLink};
  }
`

export const TagListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

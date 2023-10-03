import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
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

    @media screen and (max-width: 768px) {
      width: 8rem;
      height: 8rem;
    }
  }
`

export const ProfileInfoContainer = styled.div`
  flex: 1;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`

import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`

export const LayoutContent = styled.div`
  max-width: 1280px;
  width: 90%;
  min-height: 100vh;
  margin: -5rem auto;

  background: ${(props) => props.theme['gray-800']};
`

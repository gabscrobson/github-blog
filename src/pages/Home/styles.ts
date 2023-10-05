import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseBorder};
  color: ${(props) => props.theme.white};
  transition: 0.2s;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.baseLink};
  }

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
`

export const PostContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PostListContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

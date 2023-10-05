import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const IssueHeaderContainer = styled.div`
  background: ${(props) => props.theme.baseProfile};
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    padding: 1rem;
  }

  > h2 {
    color: ${(props) => props.theme.baseTitle};
  }
`

export const IssueHeaderLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const BackLink = styled(NavLink)`
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

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const IssueContentContainer = styled.div`
  padding: 1.5rem 2rem;

  > * {
    margin-bottom: 1rem;
  }

  > h3 {
    color: ${(props) => props.theme.baseTitle};
  }

  ol,
  ul {
    margin-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(NavLink)`
  background: ${(props) => props.theme.basePost};
  text-decoration: none;
  color: ${(props) => props.theme.baseText};
  padding: 2rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.2s;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    align-items: top;
    justify-content: space-between;

    > h3 {
      color: ${(props) => props.theme.white};
    }

    > span {
      color: ${(props) => props.theme.baseLabel};
      font-size: 0.9rem;
      margin-left: 0.5rem;
      white-space: nowrap;
    }
  }

  > p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.baseLabel};
  }
`

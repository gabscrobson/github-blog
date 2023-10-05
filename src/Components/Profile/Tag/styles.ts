import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    color: ${(props) => props.theme.baseLabel};
    width: 1.3rem;
    height: 1.3rem;
  }
`

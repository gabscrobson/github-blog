import { TagContainer } from './styles'

interface TagProps {
  children: string
  icon: JSX.Element
}

export function Tag({ children, icon }: TagProps) {
  return (
    <TagContainer>
      {icon}
      <span>{children}</span>
    </TagContainer>
  )
}

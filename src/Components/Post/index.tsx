import { PostContainer } from './styles'

interface PostProps {
  title: string
  date: string
  content: string
}

export function Post({ title, date, content }: PostProps) {
  return (
    <PostContainer>
      <div>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </PostContainer>
  )
}

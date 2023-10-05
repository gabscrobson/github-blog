import { PostContainer } from './styles'

interface PostProps {
  title: string
  date: string
  content: string
  number: number
}

export function Post({ title, date, content, number }: PostProps) {
  return (
    <PostContainer to={`/${number}`}>
      <div>
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      <p>{content}</p>
    </PostContainer>
  )
}

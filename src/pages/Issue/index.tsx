import {
  ArrowLeft,
  ArrowSquareOut,
  CalendarBlank,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { Tag } from '../../Components/Tag'
import {
  BackLink,
  GithubLink,
  IssueContainer,
  IssueContentContainer,
  IssueHeaderContainer,
  IssueHeaderLinksContainer,
  TagListContainer,
} from './styles'
import { username } from '../../constants/constants'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'

interface IssueData {
  title: string
  body: string
  dateRelativeToNow: string
  comments: number
  hmtl_url: string
}

export function Issue() {
  const [issueData, setIssueData] = useState<IssueData>({
    title: 'Issue title',
    body: '',
    dateRelativeToNow: '',
    comments: 0,
    hmtl_url: '',
  })
  const { issueNumber } = useParams()

  // Load issue data on component mount
  useState(() => {
    fetchIssueData()
  })

  // Fetch issue data from GitHub API
  async function fetchIssueData() {
    const { data } = await api.get(
      `repos/${username}/github-blog/issues/${issueNumber}`,
    )

    setIssueData({
      title: data.title,
      body: data.body,
      dateRelativeToNow: formatDistanceToNow(new Date(data.created_at)),
      comments: data.comments,
      hmtl_url: data.hmtl_url,
    })
    console.log(issueData)
  }

  return (
    <IssueContainer>
      <IssueHeaderContainer>
        <IssueHeaderLinksContainer>
          <BackLink to="/">
            <ArrowLeft size={20} weight="regular" />
            RETURN
          </BackLink>
          <GithubLink href={issueData.hmtl_url} target="blank">
            GITHUB
            <ArrowSquareOut size={20} weight="bold" />
          </GithubLink>
        </IssueHeaderLinksContainer>
        <h2>{issueData.title}</h2>
        <TagListContainer>
          <Tag icon={<GithubLogo weight="fill" />}>{username}</Tag>
          <Tag icon={<CalendarBlank weight="fill" />}>
            {issueData.dateRelativeToNow}
          </Tag>
          <Tag icon={<ChatCircle weight="fill" />}>
            {`${issueData.comments.toString()} comments`}
          </Tag>
        </TagListContainer>
      </IssueHeaderContainer>
      <IssueContentContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {issueData.body}
        </ReactMarkdown>
      </IssueContentContainer>
    </IssueContainer>
  )
}

import { useEffect, useState } from 'react'
import { Post } from '../../Components/Post'
import { Profile } from '../../Components/Profile'
import {
  HomeContainer,
  PostContainerHeader,
  PostListContainer,
  PostsContainer,
  SearchInput,
} from './styles'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
}

const username = 'gabscrobson'

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([])
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  // Load issues on component mount
  useEffect(() => {
    fetchIssues()
  }, [])

  // Filter issues by search query
  useEffect(() => {
    const filtered = issues.filter((issue) => {
      const title = issue.title.toLowerCase()
      const body = issue.body.toLowerCase()
      const query = searchQuery.toLowerCase()

      return title.includes(query) || body.includes(query)
    })

    setFilteredIssues(filtered)
  }, [searchQuery, issues])

  // Fetch issues from GitHub API
  async function fetchIssues() {
    const response = await api.get(`search/issues`, {
      params: {
        q: `repo:${username}/github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  // Handle search input change
  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value)
  }

  return (
    <HomeContainer>
      <Profile username={username} />

      <PostsContainer>
        <PostContainerHeader>
          <h2>Posts</h2>
          <p>{filteredIssues.length} posts</p>
        </PostContainerHeader>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <PostListContainer>
          {filteredIssues.map((issue) => (
            <Post
              key={issue.id}
              title={issue.title}
              content={issue.body}
              date={formatDistanceToNow(new Date(issue.created_at), {
                locale: ptBr,
                addSuffix: true,
              })}
            />
          ))}
        </PostListContainer>
      </PostsContainer>
    </HomeContainer>
  )
}

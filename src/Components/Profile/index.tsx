import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { Tag } from './Tag'
import {
  GithubLink,
  ProfileContainer,
  ProfileInfoContainer,
  ProfileInfoTitle,
  TagListContainer,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface UserData {
  name: string
  bio: string
  company: string
  followers: number
  avatarUrl: string
  htmlUrl: string
}

interface ProfileProps {
  username: string
}

export function Profile({ username }: ProfileProps) {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    bio: '',
    company: '',
    followers: 0,
    avatarUrl: '',
    htmlUrl: '',
  })

  // Load user data on component mount
  useEffect(() => {
    fetchUserData()
  })

  // Fetch user data from GitHub API
  async function fetchUserData() {
    const { data } = await api.get(`users/${username}`)

    setUserData({
      name: data.name,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      avatarUrl: data.avatar_url,
      htmlUrl: data.html_url,
    })
  }

  return (
    <ProfileContainer>
      <img src={userData.avatarUrl} alt="profile image" />
      <ProfileInfoContainer>
        <ProfileInfoTitle>
          <h2>{userData.name}</h2>
          <GithubLink href={userData.htmlUrl} target="blank">
            GITHUB
            <ArrowSquareOut size={20} weight="bold" />
          </GithubLink>
        </ProfileInfoTitle>
        <p>{userData.bio}</p>
        <TagListContainer>
          <Tag icon={<GithubLogo weight="fill" />}>{username}</Tag>
          <Tag icon={<Buildings weight="fill" />}>empresa</Tag>
          <Tag icon={<Users weight="fill" />}>
            {userData.followers.toString()}
          </Tag>
        </TagListContainer>
      </ProfileInfoContainer>
    </ProfileContainer>
  )
}

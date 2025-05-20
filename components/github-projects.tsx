"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitForkIcon, StarIcon } from "lucide-react"
import Link from "next/link"

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
}

export function GithubProjects({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.status}`)
        }

        const data = await response.json()
        setRepos(data)
        setError(null)
      } catch (err) {
        console.error("Error fetching GitHub repositories:", err)
        setError("Failed to load GitHub repositories. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [username])

  if (loading) {
    return (
      <div className="w-full grid place-items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full text-center py-12">
        <p className="text-red-500">{error}</p>
        <p className="mt-2">Please make sure you've entered a valid GitHub username.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto mt-8">
      {repos.map((repo) => (
        <Card key={repo.id} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-xl truncate">{repo.name}</CardTitle>
            {repo.language && (
              <Badge variant="outline" className="w-fit">
                {repo.language}
              </Badge>
            )}
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="line-clamp-3 h-[4.5rem]">
              {repo.description || "No description provided."}
            </CardDescription>
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
                {repo.topics.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{repo.topics.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4" />
                <span className="text-sm">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1">
                <GitForkIcon className="h-4 w-4" />
                <span className="text-sm">{repo.forks_count}</span>
              </div>
            </div>
            <Link href={repo.html_url} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">
                View Project
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

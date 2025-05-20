import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Project {
  slug: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl: string
  year: number
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Link href={`/projects/${project.slug}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
        <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
          <Button variant="default" size="sm" className="w-full">
            GitHub
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

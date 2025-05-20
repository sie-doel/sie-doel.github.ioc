import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality, team collaboration features, and real-time updates.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/task-app",
    githubUrl: "https://github.com/yourusername/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts for multiple locations using data from a weather API.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["JavaScript", "HTML/CSS", "Chart.js", "Weather API"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    featured: true,
  },
]

export function FeaturedProjects() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto mt-8">
      {projects.map((project) => (
        <Card key={project.id} className="flex flex-col h-full overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="mb-4">{project.description}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between gap-2">
            {project.demoUrl && (
              <Link href={project.demoUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  Live Demo
                </Button>
              </Link>
            )}
            <Link href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
              <Button variant="default" size="sm" className="w-full">
                View Code
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

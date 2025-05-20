import { ProjectCard } from "./project-card"

// This would typically come from a database or CMS
const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
    year: 2023,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality, team collaboration features, and real-time updates.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com/task-app",
    githubUrl: "https://github.com/yourusername/task-manager",
    year: 2022,
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts for multiple locations using data from a weather API.",
    image: "/placeholder.svg?height=300&width=600",
    technologies: ["JavaScript", "HTML/CSS", "Chart.js", "Weather API"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    year: 2021,
  },
]

export function DetailedProjects() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto mt-8">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

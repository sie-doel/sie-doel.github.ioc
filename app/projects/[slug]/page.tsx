import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, GithubIcon, ExternalLinkIcon } from "lucide-react"

// This would typically come from a database or CMS
const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    longDescription: `
      This e-commerce platform was built to provide a complete online shopping experience. The application includes:
      
      - User authentication and profile management
      - Product catalog with search and filtering
      - Shopping cart and checkout process
      - Payment processing with Stripe
      - Order history and tracking
      - Admin dashboard for product and order management
      
      The frontend is built with Next.js and Tailwind CSS, providing a responsive and intuitive user interface. The backend uses Node.js with Express, and data is stored in MongoDB. User authentication is handled with NextAuth.js, and payments are processed through Stripe.
      
      This project demonstrates my ability to build complex, full-stack applications with modern technologies and best practices.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    features: [
      "Responsive design for all devices",
      "Server-side rendering for improved SEO",
      "Secure payment processing",
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart with persistent storage",
      "Order management and tracking",
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/ecommerce",
    year: 2023,
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A productivity application for managing tasks and projects with drag-and-drop functionality, team collaboration features, and real-time updates.",
    longDescription: `
      This task management application was designed to help teams organize and track their work efficiently. Key features include:
      
      - Task creation, editing, and deletion
      - Project organization and categorization
      - Drag-and-drop interface for task prioritization
      - Team collaboration with shared projects
      - Real-time updates using WebSockets
      - User roles and permissions
      - Activity tracking and notifications
      
      The frontend is built with React and uses React DnD for the drag-and-drop functionality. The backend is powered by Node.js and Express, with PostgreSQL for data storage. Real-time updates are implemented using Socket.io.
      
      This project showcases my skills in building interactive web applications with complex state management and real-time features.
    `,
    image: "/placeholder.svg?height=600&width=1200",
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    features: [
      "Intuitive drag-and-drop interface",
      "Real-time collaboration",
      "Project and task organization",
      "User roles and permissions",
      "Activity tracking and notifications",
      "Responsive design for desktop and mobile",
      "Dark and light mode support",
    ],
    demoUrl: "https://example.com/task-app",
    githubUrl: "https://github.com/yourusername/task-manager",
    year: 2022,
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/#projects"
        className="inline-flex items-center mb-8 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        Back to all projects
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="prose max-w-none dark:prose-invert mb-8">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <div className="whitespace-pre-line">{project.longDescription}</div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
                <p>{project.year}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-2">
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                    <Button variant="default" className="w-full flex items-center justify-center">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}

                <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full flex items-center justify-center">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

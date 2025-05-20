import Link from "next/link"
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FeaturedProjects } from "@/components/featured-projects"
import { WorkExperience } from "@/components/work-experience"
import { DetailedProjects } from "@/components/detailed-projects"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">My Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="w-9 px-0">
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="w-9 px-0">
                <LinkedInLogoIcon className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Your Name</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Software Developer passionate about building impactful applications. I specialize in web development
                    and love creating elegant solutions to complex problems.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#projects">
                    <Button>View My Work</Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Me</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="h-64 w-64">
                  <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Your Name" />
                  <AvatarFallback>YN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm a software developer with a passion for creating intuitive and efficient applications. With a
                  background in computer science, I've developed a strong foundation in software development principles
                  and practices.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                      <span>5+ years of development experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                      <span>Worked on 20+ successful projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                      <span>Contributed to open source projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="flex h-2 w-2 rounded-full bg-primary"></div>
                      <span>Bachelor's in Computer Science</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div id="skills" className="space-y-2">
                    <h3 className="text-xl font-bold">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>JavaScript</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>React</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>Node.js</Badge>
                      <Badge>Express</Badge>
                      <Badge>MongoDB</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Git</Badge>
                      <Badge>Docker</Badge>
                      <Badge>AWS</Badge>
                      <Badge>CI/CD</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  My professional journey and the companies I've worked with.
                </p>
              </div>
              <WorkExperience />
            </div>
          </div>
        </section>

        <section id="featured-projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of my best projects that showcase my skills and expertise.
                </p>
              </div>
              <FeaturedProjects />
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of my recent work. Click on a project to view more details.
                </p>
              </div>
              <DetailedProjects />
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex justify-center space-x-4">
                  <Link href="mailto:your.email@example.com" className="flex items-center space-x-2">
                    <EnvelopeClosedIcon className="h-5 w-5" />
                    <span>your.email@example.com</span>
                  </Link>
                </div>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <GitHubLogoIcon className="h-5 w-5" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <LinkedInLogoIcon className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Your Name. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#projects">
            Projects
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

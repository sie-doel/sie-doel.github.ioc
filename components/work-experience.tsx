import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface WorkExperience {
  id: number
  company: string
  position: string
  duration: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    company: "Tech Company Inc.",
    position: "Senior Frontend Developer",
    duration: "Jan 2022 - Present",
    description: "Leading the frontend development team in building and maintaining the company's main product.",
    responsibilities: [
      "Architected and implemented new features for the company's SaaS platform",
      "Led the migration from a legacy codebase to a modern React-based architecture",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with design and product teams to improve user experience",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Digital Agency XYZ",
    position: "Full Stack Developer",
    duration: "Mar 2019 - Dec 2021",
    description: "Worked on various client projects, developing both frontend and backend solutions.",
    responsibilities: [
      "Developed responsive web applications for clients across various industries",
      "Built RESTful APIs and integrated third-party services",
      "Implemented authentication and authorization systems",
      "Optimized application performance and improved load times",
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React", "SCSS"],
  },
  {
    id: 3,
    company: "Startup Labs",
    position: "Junior Developer",
    duration: "Jun 2017 - Feb 2019",
    description: "Contributed to the development of the company's main product as part of an agile team.",
    responsibilities: [
      "Implemented UI components based on design specifications",
      "Fixed bugs and improved existing features",
      "Participated in daily stand-ups and sprint planning",
      "Wrote unit tests for frontend components",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
  },
]

export function WorkExperience() {
  return (
    <div className="space-y-6 w-full max-w-4xl mx-auto mt-8">
      {experiences.map((exp) => (
        <Card key={exp.id} className="overflow-hidden">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <CardTitle className="text-xl">{exp.position}</CardTitle>
                <CardDescription className="text-lg font-medium">{exp.company}</CardDescription>
              </div>
              <Badge variant="outline" className="w-fit md:text-sm">
                {exp.duration}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{exp.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import ProjectCard from "@/components/ui/project-card";
import TechStack from "@/components/ui/tech-stack";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section id="about" className="px-12 py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I'm Pattapon Vichanukroh 👋
            </h1>
            <p className="text-sm mx-auto max-w-[700px] text-gray-500 sm:text-based md:text-lg lg:text-xl dark:text-gray-400">
              I'm a Computer Engineering senior at Chulalongkorn University with
              experience in software development, cloud infrastructure, and data
              engineering. Through internships at SalaryHero, TechX, and SCB
              DBank, I’ve built scalable web apps, optimized CI/CD pipelines,
              and developed predictive models. Passionate about problem-solving
              and innovation, I’m eager to contribute to impactful projects.
            </p>

            <div className="space-x-4">
              <Link to="https://github.com/codingManatee" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                to="https://www.linkedin.com/in/pattapon-vichanukroh-45868229b"
                target="_blank"
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link to="https://www.instagram.com/pttzx_/" target="_blank">
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link to="mailto:pattapon.vichanukroh@outlook.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12 text-center">
              Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="HMPIS - Herbal Medicine Product Inventory System"
                description="A medicine management platform built with Next.js, NestJS, and PostgreSQL."
                image="/HMPIS.jpg"
                link="https://github.com"
                tags={["Next.js", "NestJS", "PostgreSQL"]}
              />
              <ProjectCard
                title="PIC-KEEPER"
                description="A real-time task management application with team collaboration features."
                image="/PIC-KEEPER.jpg"
                link="https://github.com"
                tags={["React", "TailwindCSS", "Express", "Websocket"]}
              />
              <ProjectCard
                title="Bucket-Counter Project"
                description="A real-time object detection with monitoring and logging web console."
                image="/BUCKET-COUNTER.jpg"
                link="https://github.com"
                tags={["YoloV11", "OpenCV", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>
        {/* 
        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section> */}
      </main>

      <footer className="border-t">
        <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Pattapon.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            {/* <Link className="text-xs hover:underline underline-offset-4" to="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" to="#">
              Privacy
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

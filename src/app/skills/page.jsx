import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import allSkills from "@/data/skillsdata";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Skills | Simran Vishwakarma - Front End Developer",
  description:
    "Explore simran  technical skills and expertise in web development, including frontend, backend, and DevOps technologies.",

});



export default function SkillsPage() {
  return (
    <main
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
      aria-label="Skills and Certifications Page of simran vishwakarma "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header
          className="text-center space-y-4 mb-16"
          aria-label="Skills Page Header"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
I work with a wide range of modern technologies and tools to build scalable, high-performance web applications.

          </p>
        </header>

        {/* Skills Grid */}
        <section
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 mb-16"
          aria-label="List of Technical Skills"
        >
          {allSkills.map((skill, index) => (
            <Card
              key={index}
              className="group relative hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label={`${skill.name} skill card`}
            >
              <CardContent className="flex flex-col items-center p-6">
                <div
                  className={`p-4 rounded-lg mb-4 ${skill.color}`}
                  aria-hidden="true"
                >
                  {skill.icon}
                </div>
                <span className="font-medium text-gray-900 text-center text-sm">
                  {skill.name}
                </span>
              </CardContent>
              {/* Optional subtle gradient bottom line */}
              <div className="absolute bottom-3 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></div>
            </Card>
          ))}
        </section>

        {/* Certifications */}
       
      </div>
    </main>
  );
}

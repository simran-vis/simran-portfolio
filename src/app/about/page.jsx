import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";
import { generateMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const metadata = generateMetadata({
  title: "About |Simran vishwakarma - Front End Developer",
  description:
    "Front-End Developer with around 2 years of experience in building responsive, scalable, and user-friendly web applications using modern web technologies. Proficient in React.js, JavaScript, HTML, CSS, Tailwind CSS, and Redux, with a strong understanding of component-based architecture and state management. Currently working at Intugratic Solution Pvt. Ltd., contributing to the development of dynamic web applications and admin dashboards. Experienced in implementing features like data tables, filtering, sorting, form handling, and API integration. Skilled in creating clean UI/UX, optimizing performance, and writing maintainable, reusable code.",
url:"",
  });

const experiences = [
  {
    title: "Front End Developer ",
    company: "Intugratic Solution pvt ldt",
    period: "May 2024 - Present",
    description:
"I worked on a CRM-based web application where I developed and maintained responsive user interfaces using React.js and Tailwind CSS. My responsibilities included building reusable components, integrating REST APIs, handling dynamic data, and collaborating with the team to improve usability and overall performance."

  },
  {
    title: "Freelance Web Developer",
    company: "",
    period: "March -June 2024",
    description:
" Developed responsive UI for TheKiddles.com, improving layout and interaction for better engagement across devices.  Worked on the True Tree project, implementing clean and performance-focused front-end features using modern technologies."
  },
 
];

const education = [
  {
    degree: "Master of Computer Application",
    school: "Lakshmi Narain College of Technology, Bhopal MP",
    period: "2022 - 2024",
    cgpa:
"8.75"  },
  
  {
    degree: "Bachelor of Commerce Computer Application.-(b.com)",
    school: " Govt. Maharani Laxmi Bai Girls P.G. Autonomous College Bhopal MP.",
    period: "2019-2022",
    cgpa:"76.8%"
  },
 
  {
    degree: "Higher Secondary School (HSC)",
    school: "ST Mariya Convent H.S School",
    period: "2018 - 2019",
    cgpa: "74.4%",
  },
  {
    degree: "Secondary School (SSC)",
    school: "ST Mariya Convent H.S School",
    period: "2016 - 2017",
    cgpa: "65%",
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className=" space-y-12">
        {/* Hero Section */}
        <section
          aria-label="About simran vishwakarma"
          className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 overflow-hidden text-center rounded-lg"
        >
          {/* Decorative soft gradient shapes */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-tr from-blue-500/10 via-indigo-500/20 to-transparent blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-indigo-500/10 via-purple-500/20 to-transparent blur-3xl rounded-full pointer-events-none" />

          <div className="relative space-y-8 max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/simran-image.png"
                alt="simran vishwakarma - Front Developer Profile Picture"
                width={160}
                height={160}
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
              />
              {/* Accent ring around image */}
              <div className="absolute -inset-1 rounded-full border-2 border-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 opacity-30 animate-pulse"></div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
             <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
  I'm a passionate{" "}
  <span className="font-semibold text-blue-600 dark:text-indigo-400">
    Front-End Developer
  </span>{" "}
 with ~2 years of experience building responsive and user-friendly web applications. Skilled in React.js, JavaScript, HTML, CSS, Tailwind CSS, and Redux. Currently working at Intugratic Solution Pvt. Ltd., developing dynamic UIs and admin dashboards with features like API integration, data handling, and performance optimization. Passionate about learning and growing in the MERN stack and Data Structures & Algorithms.
</p>

            </div>

            {/* Optional CTA or Highlight */}
            <div className="mt-6">
              <p className="text-gray-600 dark:text-gray-400 italic">
“Crafting clean, scalable code and seamless user experiences is my strength.”

              </p>
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section aria-label="Personal Information">
          <Card className="relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Optional Decorative Gradient */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-blue-200/20 via-indigo-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-gradient-to-br from-purple-200/20 via-indigo-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <CardHeader className="border-b border-slate-200 dark:border-slate-700 px-6 py-4">
              <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <MapPin className="h-6 w-6 text-blue-600" />
                Personal Information
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 px-6 py-6">
              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                  Bhopal M.P
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Experience
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">2 Years</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Specialization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                  Front End Development
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Availability
                  </h3>
                  <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    Available for hire
                  </Badge>
                </div>
              </div>

              {/* About Section */}
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
When I’m not coding, I enjoy exploring new technologies, improving my development skills, and staying updated with the latest industry trends and best practices.

                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section aria-label="Work Experience">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <article key={index} className="group">
                <Card className="h-full border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm border-slate-300 dark:border-slate-700 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="mt-1 text-blue-600 font-medium">
                      {exp.company}
                    </p>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </CardContent>

                  {/* Subtle Bottom Accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </Card>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section aria-label="Education Background">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <article key={index} className="group">
                <Card className="h-full border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm border-slate-300 dark:border-slate-700 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="mt-1 text-blue-600 font-medium">
                      {edu.school}
                    </p>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium">
  <span className="text-sm">CGPA / Percentage:</span>
  <span className="text-gray-900 dark:text-white">
    {edu.cgpa}
  </span>
</div>

                  </CardContent>
                  <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </Card>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

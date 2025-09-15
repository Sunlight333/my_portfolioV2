import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import SkillsSection from "@/components/SkillsSection";
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  CheckCircle2,
  Brain,
  Cpu,
  Database,
  Globe,
  GitBranch,
  Palette,
  Wrench,
  Target,
  Bot
} from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("skills");

  const education = [
    {
      institution: "Tunku Abdul Rahman University of Management and Technology",
      degree: "Bachelor of Software System Development",
      field: "Software Development",
      duration: "2012 - 2016",
      gpa: "N/A",
      location: "Malaysia",
    },
  ];

  const experience = [
    {
      position: "Full Stack Engineer",
      company: "Mighty Jaxx",
      duration: "2022 - Present",
      description: "Developing scalable applications and optimizing system performance for a leading collectibles company.",
      responsibilities: [
        "Developed scalable applications using React.js, Next.js, Node.js, and Redis",
        "Optimized application performance and enhanced CI/CD pipelines",
        "Integrated SaaS subscription systems with Stripe and PayPal",
        "Collaborated with product and design teams to deliver high-quality solutions"
      ]
    },
    {
      position: "Software Engineer (Freelance / Contract)",
      company: "Remote",
      duration: "2019 - 2022",
      description: "Designed and implemented SaaS platforms with AI integration and cloud-native solutions for various clients.",
      responsibilities: [
        "Designed and implemented SaaS platforms with role-based access and subscription tiers",
        "Integrated AI models (OpenAI, Claude, Gemini) for chatbots and automation",
        "Migrated clients to cloud-native environments using React, Node.js, and AWS",
        "Developed e-commerce and marketplace applications",
        "Partnered with clients for end-to-end solution delivery"
      ]
    },
    {
      position: "Software Engineer",
      company: "Tech Solutions",
      duration: "2016 - 2019",
      description: "Built enterprise-grade systems and introduced modern development practices to legacy environments.",
      responsibilities: [
        "Built enterprise-grade systems using .NET, SOAP APIs, and SQL Server",
        "Designed and optimized REST APIs for better performance",
        "Maintained and enhanced existing PHP systems",
        "Introduced Agile workflows and Git-based version control"
      ]
    },
  ];

  const projects = [
    {
      title: "Enterprise Order Platform",
      description: "Developed a comprehensive order management platform with payment integration, inventory synchronization, and advanced reporting capabilities.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      duration: "2023 - 2024",
      type: "Enterprise Project",
      accomplishments: [
        "Built scalable React frontend with real-time order tracking",
        "Implemented secure payment processing with Stripe integration",
        "Created automated inventory synchronization system",
        "Developed comprehensive reporting dashboard with analytics"
      ]
    },
    {
      title: "AI Chat Assistant",
      description: "Integrated multiple LLMs (OpenAI, Claude, Gemini) to create an intelligent customer support and product discovery system.",
      technologies: ["OpenAI", "Claude", "Gemini", "Node.js", "React"],
      duration: "2022 - 2023",
      type: "AI Integration",
      accomplishments: [
        "Integrated multiple AI models for enhanced response quality",
        "Implemented context-aware conversation management",
        "Created product recommendation engine using AI",
        "Achieved 95% customer satisfaction rate"
      ]
    },
    {
      title: "Multi-tenant SaaS MVP",
      description: "Built a complete SaaS platform with subscription billing, tenant isolation, and custom admin console for client management.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      duration: "2021 - 2022",
      type: "SaaS Platform",
      accomplishments: [
        "Implemented secure multi-tenant architecture",
        "Built subscription billing system with Stripe integration",
        "Created tenant isolation and data segregation",
        "Developed custom admin console for client management"
      ]
    },
  ];

  const certifications = [
    {
      name: "API Prototyping Learning Path",
      issuer: "Postman",
      date: "December 2024",
      skills: "API Prototyping, API Testing, API Documentation",
      credential: "PST-APL-2024"
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "November 2024",
      skills: "Generative AI, Prompt Engineering, LLM Applications",
      credential: "MSLI-GAI-2024"
    },
    {
      name: "Learning Microsoft Power BI",
      issuer: "Infosys Springboard",
      date: "November 2024",
      skills: "Microsoft Power BI, Data Visualization, Business Intelligence",
      credential: "ISB-PBI-2024"
    },
    {
      name: "Neural Networks and Deep Learning",
      issuer: "Great Learning",
      date: "January 2024",
      skills: "Neural Networks, Deep Learning, AI Architecture",
      credential: "GL-NNDL-2024"
    },
    {
      name: "Real Life Machine Learning and Data Science Projects",
      issuer: "Udemy",
      date: "November 2022",
      skills: "Machine Learning, Data Science, Practical Implementation",
      credential: "UC-e1c70903-b810-4b6b-8749-eebd3345715"
    },
  ];

  const softSkills = [
    { skill: "Cross-functional Team Collaboration", description: "Experienced in working with product, design, and engineering teams" },
    { skill: "Remote-first Work", description: "Proven ability to deliver high-quality work in distributed team environments" },
    { skill: "Business Alignment", description: "Balancing technical excellence with business growth objectives" },
    { skill: "System Performance", description: "Recognition for improving system performance and scalability" },
    { skill: "Client Partnership", description: "End-to-end solution delivery with client satisfaction focus" },
    { skill: "Agile Methodology", description: "Introduction and implementation of modern development practices" },
  ];

  const resumeHighlights = [
    { 
      title: "SaaS Platform Specialist", 
      description: "Expert in building scalable multi-tenant SaaS platforms with subscription billing and tenant isolation",
      icon: <Globe className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "AI/LLM Integration Expert", 
      description: "Specialized in integrating OpenAI, Claude, and Gemini for chatbots, automation, and product discovery",
      icon: <Bot className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Payment Workflow Developer", 
      description: "Experienced in implementing secure payment systems with Stripe and PayPal integration",
      icon: <Target className="h-8 w-8 text-brand-purple" />
    },
    { 
      title: "Full-Stack Engineer", 
      description: "9+ years building secure, scalable web applications with React, Node.js, and modern cloud technologies",
      icon: <Code className="h-8 w-8 text-brand-purple" />
    },
  ];

  const tabContent = {
    skills: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-lg flex items-start backdrop-blur-md border border-white/10"
            >
              <div className="mr-4 bg-brand-purple/10 p-3 rounded-full">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-white">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SkillsSection />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-6 text-white">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-medium text-lg mb-1">{item.skill}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    education: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <GraduationCap className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <div className="text-lg mt-1">{edu.institution}</div>
                    <div className="text-muted-foreground mt-1">{edu.field}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end text-right">
                <div className="px-3 py-1 rounded-full text-sm bg-brand-purple/10 text-brand-purple">
                  {edu.gpa}
                </div>
                <div className="text-sm text-muted-foreground mt-2">{edu.duration}</div>
                <div className="text-sm text-muted-foreground mt-1">{edu.location}</div>
              </div>
            </div>
            <div className="mt-4 pl-4 border-l-2 border-brand-purple/30">
              <h4 className="font-medium mb-2">Key Courses:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {edu.institution.includes("Presidency") ? (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Artificial Intelligence & Machine Learning
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Data Structures & Algorithms
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Vision Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Web Development
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Database Management Systems
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Deep Learning
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Physics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Chemistry
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Mathematics
                    </li>
                    <li className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 bg-brand-purple rounded-full mr-2"></span>
                      Computer Science
                    </li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.position}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-start">
                  <div className="bg-brand-purple/10 p-2 rounded-full mr-4 hidden md:block">
                    <Briefcase className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="text-lg mt-1">{exp.company}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground md:text-right">
                {exp.duration}
              </div>
            </div>
            <p className="text-muted-foreground mb-4 pl-0 md:pl-12">{exp.description}</p>
            <div className="pl-0 md:pl-12">
              <h4 className="font-medium mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    projects: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs py-1 px-3 bg-brand-purple/10 text-brand-purple rounded-full">
                  {project.type}
                </span>
                <span className="text-xs text-muted-foreground">
                  {project.duration}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            
            <div className="mb-4">
              <h4 className="font-medium mb-2">Key Accomplishments:</h4>
              <ul className="space-y-2">
                {project.accomplishments.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs py-1 px-3 bg-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    certifications: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-lg"
          >
            <div className="flex items-start">
              <div className="bg-brand-purple/10 p-2 rounded-full mr-4 flex-shrink-0">
                <Award className="h-5 w-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <div className="text-sm text-muted-foreground mb-2">
                  {cert.issuer} • {cert.date}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {cert.skills.split(', ').map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-secondary inline-block rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                {cert.credential && (
                  <div className="text-xs text-muted-foreground">
                    Credential ID: {cert.credential}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <AnimatedText text="Professional Experience" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                I'm an aspiring developer specializing in web development, AI, and machine learning.
                My goal is to leverage these technologies to create innovative solutions for real-world problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <PrintableResume />
          </motion.div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { id: "skills", icon: <Code className="h-5 w-5" />, label: "Skills" },
                { id: "education", icon: <GraduationCap className="h-5 w-5" />, label: "Education" },
                { id: "experience", icon: <Briefcase className="h-5 w-5" />, label: "Experience" },
                { id: "projects", icon: <Code className="h-5 w-5" />, label: "Projects" },
               // { id: "certifications", icon: <Award className="h-5 w-5" />, label: "Certifications" }//,
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors backdrop-blur-sm border ${
                    activeTab === tab.id
                      ? "bg-brand-purple text-white border-brand-purple/50"
                      : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40 border-white/10"
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="min-h-[400px]">
            {tabContent[activeTab as keyof typeof tabContent]}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;

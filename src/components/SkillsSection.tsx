
import { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const skills = [
    { name: "React", category: "Frontend", color: "#61DAFB", bgColor: "bg-cyan-500/20" },
    { name: "Next.js", category: "Frontend", color: "#000000", bgColor: "bg-gray-900/20" },
    { name: "Vue", category: "Frontend", color: "#4FC08D", bgColor: "bg-green-500/20" },
    { name: "Nuxt", category: "Frontend", color: "#00DC82", bgColor: "bg-green-400/20" },
    { name: "Node.js", category: "Backend", color: "#339933", bgColor: "bg-green-600/20" },
    { name: "Express", category: "Backend", color: "#000000", bgColor: "bg-gray-900/20" },
    { name: "Django", category: "Backend", color: "#092E20", bgColor: "bg-green-800/20" },
    { name: ".NET", category: "Backend", color: "#512BD4", bgColor: "bg-purple-600/20" },
    { name: "PostgreSQL", category: "Database", color: "#336791", bgColor: "bg-blue-600/20" },
    { name: "MongoDB", category: "Database", color: "#47A248", bgColor: "bg-green-500/20" },
    { name: "Redis", category: "Database", color: "#DC382D", bgColor: "bg-red-600/20" },
    { name: "Supabase", category: "Database", color: "#3ECF8E", bgColor: "bg-green-400/20" },
    { name: "AWS", category: "Cloud", color: "#FF9900", bgColor: "bg-orange-500/20" },
    { name: "Vercel", category: "Cloud", color: "#000000", bgColor: "bg-gray-900/20" },
    { name: "Netlify", category: "Cloud", color: "#00C7B7", bgColor: "bg-cyan-500/20" },
    { name: "Railway", category: "Cloud", color: "#0B0D0E", bgColor: "bg-gray-900/20" },
    { name: "Render", category: "Cloud", color: "#46E3B7", bgColor: "bg-green-400/20" },
    { name: "OpenAI", category: "AI/ML", color: "#412991", bgColor: "bg-purple-700/20" },
    { name: "Claude", category: "AI/ML", color: "#FF6B35", bgColor: "bg-orange-500/20" },
    { name: "Gemini", category: "AI/ML", color: "#4285F4", bgColor: "bg-blue-500/20" },
    { name: "Stripe", category: "Payments", color: "#635BFF", bgColor: "bg-indigo-500/20" },
    { name: "PayPal", category: "Payments", color: "#00457C", bgColor: "bg-blue-800/20" },
    { name: "Jest", category: "Tools", color: "#C21325", bgColor: "bg-red-600/20" },
    { name: "Git", category: "Tools", color: "#F05032", bgColor: "bg-red-500/20" },
    { name: "CI/CD", category: "Tools", color: "#2088FF", bgColor: "bg-blue-500/20" },
    { name: "Agile", category: "Tools", color: "#FF6B6B", bgColor: "bg-red-400/20" },
  ];

  const categories = ["All","Frontend", "Backend", "Database", "Cloud", "AI/ML", "Payments", "Tools"];

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => {
        if (activeFilter === "Frontend") return skill.category === "Frontend";
        if (activeFilter === "Backend") return skill.category === "Backend";
        if (activeFilter === "Database") return skill.category === "Database";
        if (activeFilter === "Cloud") return skill.category === "Cloud";
        if (activeFilter === "AI/ML") return skill.category === "AI/ML";
        if (activeFilter === "Payments") return skill.category === "Payments";
        if (activeFilter === "Tools") return skill.category === "Tools";
        return skill.category === activeFilter;
      });

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      "React": "devicon-react-original",
      "Next.js": "devicon-nextjs-original",
      "Vue": "devicon-vuejs-plain",
      "Nuxt": "devicon-nuxtjs-original",
      "Node.js": "devicon-nodejs-plain",
      "Express": "devicon-express-original",
      "Django": "devicon-django-plain",
      ".NET": "devicon-dotnetcore-original",
      "PostgreSQL": "devicon-postgresql-plain",
      "MongoDB": "devicon-mongodb-plain",
      "Redis": "devicon-redis-plain",
      "Supabase": "devicon-supabase-original",
      "AWS": "devicon-amazonwebservices-original",
      "Vercel": "devicon-vercel-original",
      "Netlify": "devicon-netlify-original",
      "Railway": "devicon-railway-original",
      "Render": "devicon-render-original",
      "OpenAI": "devicon-openai-original",
      "Claude": "devicon-openai-original",
      "Gemini": "devicon-google-original",
      "Stripe": "devicon-stripe-original",
      "PayPal": "devicon-paypal-original",
      "Jest": "devicon-jest-plain",
      "Git": "devicon-git-plain",
      "CI/CD": "devicon-githubactions-original",
      "Agile": "devicon-git-plain",
    };

    return iconMap[name] || "devicon-code-plain";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div
              className={`relative w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-brand-purple/50 transition-all duration-300`}
              whileHover={{ 
                boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.4)",
              }}
            >
              <i className={`${getSkillIcon(skill.name)} text-3xl`} style={{ color: skill.color }}></i>
              
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.span
              className="text-xs font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors max-w-20"
              whileHover={{ scale: 1.05 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No skills found in this category.</p>
        </div>
      )}
    </motion.div>
  );
};

export default SkillsSection;

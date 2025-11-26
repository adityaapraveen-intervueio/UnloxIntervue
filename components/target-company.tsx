import { ChevronDown } from "lucide-react"
import { CompanySection } from "./company-section"

const faangCompanies = [
  {
    name: "Microsoft",
    logo: "M",
    logoStyle: "bg-transparent text-[#00A4EF] border border-[#00A4EF]",
    description:
      "Microsoft's hiring process for technical roles involves online assessments, on-site assessments, and 4-5 interview rounds. Candidates face specific skills for senior roles. Interview types cover: DSA, Front-end work, System Design, LLD, design, communication skills, and leadership abilities and aptitude-testing.",
    skills: ["DSA", "System Design", "HLD", "System Basics"],
  },
  {
    name: "Google",
    logo: "G",
    logoStyle: "bg-transparent",
    isGoogle: true,
    description:
      "Google's process starts with a phone assessments, and involves around 4 interviews. Includes DSA, system design for technical roles like SDE. Candidates' proficiency is assessed directly from onsite rounds. Interview types cover: DSA, Front-end work, System Design, LLD, design, communication skills, and leadership abilities.",
    skills: ["DSA", "System Design", "HLD / React", "Machine Coding"],
  },
  {
    name: "Apple",
    logo: "🍎",
    logoStyle: "text-2xl",
    description:
      "Apple's hiring process for technical roles involves online assessments, on-site assessments, and 4 to 5 interviews. Resume screening, coding assessments on a web editor, and oral conversation rounds covering technical assessment with machine design and behavioral related discussions, and fullstack roles.",
    skills: ["System Design", "Machine Coding"],
  },
  {
    name: "Meta",
    logo: "∞",
    logoStyle: "bg-[#0668E1] text-white",
    description:
      "Meta's process starts with recruiter screen, with 2-4 interviews covering coding, system assessments on for 6-12 rounds. Candidates face specific skills for senior roles interview types cover: DSA, HLD with senior with more focus on Machine Coding, problem solving, design, communication skills, and leadership and aptitude abilities.",
    skills: ["DSA", "System Design", "Machine Coding"],
  },
  {
    name: "Netflix",
    logo: "N",
    logoStyle: "bg-[#E50914] text-white",
    description:
      "Netflix's hiring process for technical roles involves online assessments, and 4 rounds. Candidates face specific skills for senior roles interview types cover: DSA, Front-end work, System Design, LLD, design. with three prerequisites: Day to day work simulation, problem-solving ability, and culture fit assessment.",
    skills: ["DSA", "System Design"],
  },
  {
    name: "Amazon",
    logo: "a",
    logoStyle: "bg-[#FF9900] text-white font-bold",
    description:
      "Amazon's hiring process for technical roles involves online assessments, on-site assessments and 4-5 interview. Focus on LP's, leadership principals. Candidates face specific skills for senior roles. Interview types cover: DSA, Front-end work, System Design, LLD, design, communication skills, and aptitude and leadership abilities.",
    skills: ["System Design", "Machine Coding", "Guesstimate"],
  },
]

const productCompanies = [
  {
    name: "Razorpay",
    logo: "R",
    logoStyle: "bg-[#072654] text-white",
    description:
      "Razorpay's hiring process for technical roles involves online assessments, on-site assessments, and 4-5 interviews. Candidates face specific skills for senior roles. Interview types cover: DSA, system design problem-solving, design, communication skills and aptitude abilities.",
    skills: ["DSA", "System Design", "HLD", "Machine Coding"],
  },
  {
    name: "Zoho",
    logo: "Z",
    logoStyle: "bg-[#C8202B] text-white",
    description:
      "Zoho's hiring process for technical roles involves online assessments, and multiple rounds. Focus on C++, Java, Salary career track with specific skills. Interview types cover: DSA, System Design, LLD, design, communication skills, problem-solving abilities.",
    skills: ["C/C++", "System Basics", "Machine Coding"],
  },
  {
    name: "Postman",
    logo: "P",
    logoStyle: "bg-[#FF6C37] text-white",
    description:
      "Postman's hiring process for technical roles involves online assessments, on-site assessments and 4-5 interviews. Candidates face specific skills for senior roles with a focus on machine coding, problem-solving design, and aptitude abilities.",
    skills: ["System Design", "Machine Coding", "Guesstimate"],
  },
  {
    name: "Freshworks",
    logo: "F",
    logoStyle: "bg-gradient-to-br from-blue-500 to-green-500 text-white",
    description:
      "Freshworks's hiring process involves assessments with a combination of OOPS, and big-data design. System design takes more importance at senior level interviews for all the technical roles.",
    skills: ["DSA", "System Design", "HLD Flipkart"],
  },
  {
    name: "Flipkart",
    logo: "F",
    logoStyle: "bg-[#FFEB3B] text-[#2874F0]",
    description:
      "Flipkart's hiring process for technical roles involves online assessments covering Includes 2-3 Rounds: 2 technical rounds + 1 HM round. Candidates face specific skills for senior roles. Interview types cover: DSA, LLD, problem-solving, design, system.",
    skills: ["DSA", "System Design", "HLD Based"],
    viewAll: true,
    viewAllCount: 213,
  },
]

const itCompanies = [
  {
    name: "TCS",
    logo: "tcs",
    logoStyle: "text-[#1a1a2e] font-bold text-lg",
    isText: true,
    description:
      "TCS's hiring process for technical roles involves online assessments, on-site assessments, and 4-5 interviews. Focus is on Verbal ability, Quantitative ability, and System Basics. Interview types cover: DSA, communication skills, and aptitude abilities.",
    skills: ["Aptitude", "System Design", "DSA"],
  },
  {
    name: "HCLTech",
    logo: "HCL",
    logoStyle: "text-[#0070AD] font-bold",
    isText: true,
    description:
      "HCL's hiring process for technical roles involves online assessments, on-site assessments, and 3-4 interviews. Focus on behavioral and logical assessment. Interview types cover: problem-solving, design, and communication abilities.",
    skills: ["DSA", "HLD Master", "System Design", "Machine Coding"],
  },
  {
    name: "Infosys",
    logo: "Infosys",
    logoStyle: "text-[#0070AD] font-bold text-lg",
    isText: true,
    description:
      "Infosys's hiring process involves online assessments, and 3-4 interviews. Focuses on Verbal ability, Quantitative ability, and System abilities on behavioral system design, communication skills and aptitude abilities.",
    skills: ["DSA Based", "System Design", "DSA"],
  },
  {
    name: "Mphasis",
    logo: "M",
    logoStyle: "bg-[#1a1a2e] text-white",
    description:
      "Mphasis's hiring process for technical roles involves multiple phases covering written test in aptitude domain, an assessment for technical evaluation, and personal interview and team discussion for verbal skills.",
    skills: ["DSA", "System Design", "Aptitude"],
  },
  {
    name: "Tech Mahindra",
    logo: "TM",
    logoStyle: "text-[#E31937] font-bold",
    isText: true,
    description:
      "Tech Mahindra process involves an online written test on aptitude, with 2-3 rounds covering system design, with 3-4 HLD, OOB based questions. More focus on behavioral skills.",
    skills: ["DSA", "System Design"],
    viewAll: true,
    viewAllCount: 200,
  },
]

export function TargetCompany() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e]">
            Target your <span className="text-[#FF6B5B]">dream</span> company
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Select a role and map out competitive analysis for an interview tailored to hire specific requirements
          </p>
        </div>

        {/* Search Dropdown */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-500 text-sm">
            Search by company
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* FAANG / Big Tech */}
        <CompanySection title="FAANG / Big Tech" companies={faangCompanies} />

        {/* Product Based Enterprise */}
        <CompanySection title="Product based enterprise" companies={productCompanies} />

        {/* IT Services */}
        <CompanySection title="IT Services" companies={itCompanies} />
      </div>
    </section>
  )
}

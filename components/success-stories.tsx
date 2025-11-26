import { Play, Users, Target, TrendingDown } from "lucide-react"

const testimonials = [
  { name: "Bharat", handle: "@bharat_dev", platform: "youtube", bgColor: "bg-red-500" },
  { name: "Shyprinth", handle: "@shyprinth", platform: "youtube", bgColor: "bg-orange-500" },
  { name: "Yogesh", handle: "@yogesh_code", platform: "youtube", bgColor: "bg-green-600" },
  { name: "Sharanya", handle: "@sharanya", platform: "instagram", bgColor: "bg-pink-500" },
]

const filters = ["All stories", "Students", "Product roles", "IT roles", "Working aspirants"]

const stats = [
  { icon: TrendingDown, value: "3x", label: "Salary increment", color: "text-green-500" },
  { icon: Target, value: "98%", label: "Mock to real interview similarity", color: "text-blue-500" },
  { icon: Users, value: "5K+", label: "Mock interviews conducted", color: "text-purple-500" },
  {
    icon: TrendingDown,
    value: "78%",
    label: "Interview anxiety level decreased",
    color: "text-orange-500",
    prefix: "to",
  },
]

export function SuccessStories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-2">Success stories</h2>
          <p className="text-gray-500 text-sm">
            Hear from candidates who aced their interviews after preparing with our mock sessions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter, idx) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0 ? "bg-[#1a1a2e] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {testimonials.map((person) => (
            <div key={person.name} className="relative rounded-2xl overflow-hidden aspect-[4/5] group cursor-pointer">
              <img
                src={`/.jpg?height=400&width=300&query=${person.name} professional headshot`}
                alt={person.name}
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className={`w-12 h-12 ${person.bgColor} rounded-full flex items-center justify-center`}>
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
              </div>
              {/* Name Tag */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                  <div className={`w-6 h-6 ${person.bgColor} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs">▶</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">{person.name}</p>
                    <p className="text-[10px] text-gray-500">{person.handle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3 ${stat.color}`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-baseline justify-center gap-1">
                {stat.prefix && <span className="text-sm text-gray-500">{stat.prefix}</span>}
                <span className={`text-3xl md:text-4xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

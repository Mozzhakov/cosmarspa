import Image from "next/image"

interface TeamProps {
  dictionary: {
    team: {
      title: string
      subtitle: string
    }
  }
}

export default function Team({ dictionary }: TeamProps) {
  const { title, subtitle } = dictionary.team

  // Mock team data
  const team = [
    {
      id: 1,
      name: "Emily Johnson",
      role: "Founder & Lead Cosmetologist",
      bio: "With over 15 years of experience in the beauty industry, Emily founded our salon with a vision to provide exceptional beauty services that enhance natural beauty.",
      image: "/placeholder.svg?height=400&width=400&text=EJ",
    },
    {
      id: 2,
      name: "David Chen",
      role: "Hair Stylist",
      bio: "David is a master hair stylist with expertise in cutting-edge techniques and trends. His creative approach to hair styling has earned him recognition in the industry.",
      image: "/placeholder.svg?height=400&width=400&text=DC",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Skincare Specialist",
      bio: "Sophia specializes in advanced skincare treatments and has a deep understanding of various skin types and conditions. Her personalized approach ensures optimal results.",
      image: "/placeholder.svg?height=400&width=400&text=SR",
    },
    {
      id: 4,
      name: "Marcus Williams",
      role: "Nail Technician",
      bio: "Marcus is a certified nail technician with a passion for nail art and design. His attention to detail and precision make him a favorite among our clients.",
      image: "/placeholder.svg?height=400&width=400&text=MW",
    },
  ]

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl mb-4">{title}</h2>
        <p className="text-zinc-700 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-square relative">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl mb-1">{member.name}</h3>
              <p className="text-[#B7BBAC] font-medium mb-3">{member.role}</p>
              <p className="text-zinc-700">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

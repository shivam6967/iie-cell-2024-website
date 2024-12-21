import React from "react";
import { Roboto } from 'next/font/google'
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Card className="py-4 w-72 bg-[#04071D] text-white rounded-xl border-[#18181B] border-2">
      <CardHeader className="pb-2 pt-4 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-medium text-[#75747D] ">
            {member.role}
          </p>
        <h4 className="font-bold text-lg">{member.name}</h4>
        <div className="flex text-[#75747D]">
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-fill"></i>
            <i className="ri-mail-open-fill"></i>
        </div>
      </CardHeader>
      <CardBody className="py-2 px-4 flex justify-center ">
        <img
          className="object-cover rounded-lg h-48 w-60 "
          src={member.image}
          width={220}
          height={220}
        />
      </CardBody>
    </Card>
  );
};

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/74/9e/57/749e57988e53c05250cfc4a325d2e0d8.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shravan Jare",
      role: "President",
      image:
        "https://i.pinimg.com/736x/8f/0d/c8/8f0dc836ce619ffdb30798adc8ce4506.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Yashwant Mule",
      role: "President",
      image:
        "https://i.pinimg.com/736x/45/04/a7/4504a7ba5e1ea251624a70bbc42589c4.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/1f/ad/12/1fad1272a6e5309cd249bc868ebbb39f.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/f5/49/55/f549558887c20ba0a03d9a328353af57.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/86/9f/0f/869f0f26c887b4faee29e1dab378b8f0.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/b6/dd/fd/b6ddfdf96c15baf422b1fa4c64518a0e.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    {
      name: "Shivam Mathapati",
      role: "President",
      image:
        "https://i.pinimg.com/736x/53/f7/c9/53f7c9f083a09284cf34654dc7492e92.jpg",
      description:
        "Leading innovation and entrepreneurship initiatives with 15+ years of experience.",
    },
    
  ];

  return (
    <section className="relative min-h-screen w-full py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
            Our Team
          </p>
          <TextGenerateEffect
            words="Meet the Innovators Behind IIE CELL"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

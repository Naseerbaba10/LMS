import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "HTML Complete Course 2024",
      instructor: "Naseer baba",
      level: "Advance",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/HTML5.svg",    navigateTo: "/html1",
    },
    {
      id: 2,
      title: "CSS Complete Course 2024",
      instructor: "Naseer baba",
      level: "Beginner",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/CSS3.svg",   navigateTo: "/css1",
    },
    {
      id: 3,
      title: "JavaScript Complete Course 2024",
      instructor: "Naseer baba",
      level: "Advance",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",   navigateTo: "/javascript",
    },
    {
      id: 4,
      title: "React JS Complete Course 2024",
      instructor: "Naseer baba",
      level: "Beginner",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/React.svg",  navigateTo: "/react1",
    },
    {
      id: 5,
      title: "Tailwind CSS Complete Course 2024",
      instructor: "Naseer baba",
      level: "Beginner",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",  navigateTo: "/tailwind",
    },
    {
      id: 6,
      title: "Next JS complete Course 2024",
      instructor: "Naseer baba",
      level: "Advanced",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png", navigateTo: "/nextjs",
    },
    {
      id: 7,
      title: "Node.js Complete Course 2024",
      instructor: "Naseer baba",
      level: "Intermediate",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/Node.js.svg",  navigateTo: "/node",
    },
    {
      id: 8,
      title: "Express.js Complete Course 2024",
      instructor: "Naseer baba",
      level: "Intermediate",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/png-shadow-512/Express.png", navigateTo: "/express",
    },
    {
      id: 9,
      title: "MongoDB Complete Course 2024",
      instructor: "Naseer baba",
      level: "Intermediate",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",  navigateTo: "/mongodb",
    },
    {
      id: 10,
      title: "Docker Complete Course 2024",
      instructor: "Naseer baba",
      level: "Advanced",
      price: "₹Free",
      img: "https://icon.icepanel.io/Technology/svg/Docker.svg",
      navigateTo: "/docker",
    }
    
  ];

  return (
    <div className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-content-center">
      {courses.map((course) => (
        <div key={course.id} onClick={() => navigate(course.navigateTo)}>
          <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img
                src={course.img}
                alt="course"
                className="w-full h-36 object-contain rounded-t-lg"
              />
            </div>
            <CardContent className="px-5 py-4 space-y-3">
              <h1 className="hover:underline font-bold text-lg truncate">
                {course.title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h1 className="font-medium text-sm">{course.instructor}</h1>
                </div>
                <Badge
                  className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full"
                >
                  {course.level}
                </Badge>
              </div>
              <div className="text-lg font-bold">
                <span>{course.price}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Course;

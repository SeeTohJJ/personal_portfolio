import React from "react";

const experienceData = [
  {
    company: "Urban Redevelopment Authority",
    role: "Software and Data Engineer Intern",
    duration: "Jul 2025 - Dec 2025",
  },
  {
    company: "Republic of Singapore Air Force",
    role: "Flight Line Crew (Weapons)",
    duration: "May 2021 - May 2023",
  },
  {
    company: "Temasek Polytechnic Aviation Research Centre (TP-ARC)",
    role: "Student Intern",
    duration: "Oct 2020 - Mar 2021",
  }
];

const educationData = [
  {
    school: "Nanyang Technological University",
    degree: "BSc in Computer Science",
    duration: "2023 - 2027",
  },
  {
    school: "Temasek Polytechnic",
    degree: "Diploma in Aerospace Electronics",
    duration: "2018 - 2021",
  },
];

const TimelineItem = ({
  title,
  subtitle,
  duration,
  active,
  extras,
}) => {
  return (
    <div className="relative pl-10 pb-14">
      {/* Timeline Line */}
      <div className="absolute left-[9px] top-0 h-full w-[2px] bg-zinc-700" />

      {/* Dot */}
      <div
        className={`absolute left-0 top-2 h-5 w-5 rounded-full border-4 ${
          active
            ? "bg-green-400 border-black"
            : "bg-zinc-400 border-black"
        }`}
      />

      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-3xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-xl text-zinc-300">{subtitle}</p>

          {extras && (
            <p className="mt-4 text-sm text-zinc-400">{extras}</p>
          )}
        </div>

        <span className="whitespace-nowrap text-lg text-slate-400">
          {duration}
        </span>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="min-h-screen bg-black px-10 py-14 text-white">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
            Experience
            <div className="mt-3 h-1 w-20 bg-zinc-500" />
          </h2>

          <div>
            {experienceData.map((item, index) => (
              <div key={index}>
                <TimelineItem
                  title={item.company}
                  subtitle={item.role}
                  duration={item.duration}
                  active={item.active}
                />

                {item.subRole && (
                  <div className="ml-10 -mt-10 pb-10">
                    <div className="flex justify-between">
                      <p className="text-xl text-zinc-300">
                        {item.subRole}
                      </p>

                      <span className="text-lg text-slate-400">
                        {item.subDuration}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#3b82f6] to-[#5DCCAB] bg-clip-text text-transparent leading-right">
            Education
            <div className="mt-3 h-1 w-20 bg-zinc-500" />
          </h2>

          <div>
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.school}
                subtitle={item.degree}
                duration={item.duration}
                extras={item.extras}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
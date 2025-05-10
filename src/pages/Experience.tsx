const experiences = [
    {
      title: "Backend Developer",
      company: "PT Bank Rakyat Indonesia (Persero) Tbk",
      duration: "Jun 2022 - Present · 3 yrs",
      location: "Kantor Pusat",
      description: "Pemrograman Berorientasi Objek (OOP), Gin, and other backend technologies.",
    },
    {
      title: "Frontend Developer",
      company: "PT Bank Rakyat Indonesia (Persero) Tbk",
      duration: "May 2020 - May 2022 · 2 yrs 1 mo",
      location: "Indonesia",
      description: "Worked in Divisi TCD Tribe MSE using Bootstrap, Tailwind CSS, and other frontend frameworks.",
    },
    {
      title: "Fullstack PHP Developer",
      company: "BNI Corporate University",
      duration: "Dec 2018 - Apr 2020 · 1 yr 5 mos",
      location: "Jakarta Raya, Indonesia · On-site",
      description: "Developed learning applications as part of a contract role.",
    },
    {
      title: "Web Programmer",
      company: "Freelance Programming",
      duration: "May 2015 - Dec 2018 · 3 yrs 8 mos",
      location: "Pandeglang",
      description: "Worked on various freelance web programming projects.",
    },
    {
      title: "Graphic Designer",
      company: "Notre Avenir",
      duration: "Jan 2012 - Dec 2012 · 1 yr",
      location: "Jakarta Barat",
      description: "Designed graphics and visual content for various projects.",
    },
  ];
  
  const Experience = () => {
    return (
      <div className="bg-slate-800 py-4 px-4 sm:px-32 text-white" >
        <h1 className="text-4xl font-bold mb-8 text-center" id="experiences">Experience</h1>
        <ul className="grid sm:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-2 ">
            <div className="border rgba(255, 255, 255, 0.2) border-b-2 px-3 py-2 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-semibold">{exp.title}</h2>
              <p className="text-sm sm:text-lg">{exp.company}</p>
              <p className="text-sm sm:text-lg italic">{exp.duration}</p>
              <p className="text-sm sm:text-lg">{exp.location}</p>
              <p className="text-sm sm:text-lg">{exp.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          For more details, visit my{" "}
          <a
            href="https://www.linkedin.com/in/mvadly"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            LinkedIn profile
          </a>
          .
        </p>
      </div>
    );
  };
  
  export default Experience;
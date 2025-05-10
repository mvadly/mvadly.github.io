const About = () => {
  return (
    <div className="bg-orange-500 h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center px-4 text-center">
        <h1 className="text-4xl font-extrabold text-slate-100 text-center">
          About Me
        </h1>
        <div className="text-slate-300 mt-6 text-justify leading-relaxed space-y-6 text-xl sm:mx-32">
          <p className="bg-slate-700 p-4 rounded-lg shadow-lg">
            I am a highly motivated and passionate <strong className="text-orange-300">Backend Developer</strong> with over 5
            years of experience in software development, specializing in <strong className="text-orange-300">Golang,
            Typescript, and PHP</strong>. My expertise spans object-oriented programming
            (OOP), microservices architecture, REST APIs, and web application
            development.
          </p>
          <p className="bg-slate-700 p-4 rounded-lg shadow-lg">
            Currently, I contribute my skills at <strong className="text-orange-300">PT Bank Rakyat Indonesia
            (Persero) Tbk</strong>, where I have played a pivotal role in backend
            development, enhancing system efficiency, and streamlining
            processes. Previously, I worked as a Frontend Developer, gaining
            valuable experience in Bootstrap, Tailwind CSS, and other modern
            front-end frameworks. My journey also includes full-stack
            development, where I built and maintained applications using
            Next.js, CodeIgniter, PHP, and Go.
          </p>
          <p className="bg-slate-700 p-4 rounded-lg shadow-lg">
            Beyond coding, I have a strong foundation in graphic design,
            proficient in tools like Adobe Photoshop and Figma, which complement
            my understanding of user-centric design. I am always eager to expand
            my skill set, collaborate with like-minded professionals, and
            contribute to innovative technological solutions.
          </p>
          <p className="font-semibold text-2xl text-center mt-6 text-white">
            Let’s build something great together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

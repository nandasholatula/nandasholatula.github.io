import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />

      <header className="flex items-center justify-between p-5 bg-gray-800">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-400">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto p-5">
        <section className="my-20 text-center">
          <h1 className="bg-gradient-to-r from-gray-500 to-slate-400 dark:bg-gradient-to-l dark:from-blue-800 dark:to-primary">
            Hello, folks!
          </h1>
          <p className="text-2xl">
            Discover my stories and creative ideas.
          </p>
        </section>

        <section id="about" className="my-20 text-center">
          <h2 className="text-4xl font-semibold mb-5">About Me</h2>
          <p className="text-lg">
            Hi, I'm [Your Name], a software developer passionate about building amazing applications and learning new technologies.
          </p>
        </section>

        <section id="projects" className="my-10">
          <h2 className="text-4xl font-semibold mb-5 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">Project 1</h3>
              <p className="mt-2">Description of Project 1.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">Project 2</h3>
              <p className="mt-2">Description of Project 2.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg">
              <h3 className="text-2xl font-bold">Project 3</h3>
              <p className="mt-2">Description of Project 3.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="my-10 text-center">
          <h2 className="text-4xl font-semibold mb-5">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me at <a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@example.com</a>.
          </p>
        </section>
      </main>

      <footer className="text-center p-5 bg-gray-800">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

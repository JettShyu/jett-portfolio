export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white px-6 py-24">
      <section className="max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Hey, I'm <span className="text-blue-500">Jett</span>
        </h1>
        <p className="text-2xl mb-4 text-gray-300">
        DevOps Engineer dedicated to mastering automation, seamless API integration, and scaling infrastructure that just works. Breaking down silos, one deployment at a time.
        </p>
        <p className="text-lg text-gray-400">
          CI/CD • Cloud Architecture • Kubernetes • Docker • Monitoring • IaC
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
          >
            🚀 View My Projects
          </a>
          <a
            href="/resume"
            className="px-6 py-3 border border-gray-300 text-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            📄 View Resume
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto mt-28 text-left space-y-6 text-gray-300">
        <h2 className="text-3xl font-semibold text-white border-b border-gray-700 pb-2">👋 About Me</h2>
        <p>
          I'm a DevOps Engineer based in Dallas, TX, with a passion for building resilient infrastructure,
          automated pipelines, and scalable systems that support fast, reliable deployments.
        </p>
        <p>
          I’ve worked with Docker, Kubernetes, GitHub Actions, Azure Pipelines, Terraform, AWS, and Coolify to
          build and manage production-grade systems. My goal is to create clean, maintainable deployment pipelines
          that empower dev teams to ship with confidence.
        </p>
        <p>
          Outside of DevOps, I enjoy biking, playing basketball, and constantly learning new tech — always aiming
          to level up both professionally and personally.
        </p>
      </section>
    </main>
  );
}

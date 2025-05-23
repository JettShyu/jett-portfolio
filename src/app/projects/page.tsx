const projects = [
  {
    title: 'CI/CD Pipeline with GitHub Actions',
    description: 'Automated build, test, and deployment pipeline for a Dockerized Node.js app.',
    tags: ['GitHub Actions', 'Docker', 'Next.js'],
  },
  {
    title: 'Terraform AWS Infrastructure',
    description: 'Provisioned EC2, S3, and RDS using Terraform with reusable modules.',
    tags: ['Terraform', 'AWS', 'IaC'],
  },
  {
    title: 'Monitoring Stack',
    description: 'Deployed Prometheus + Grafana with alert rules and dashboards for a Kubernetes cluster.',
    tags: ['Grafana', 'Prometheus', 'Kubernetes'],
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold mb-8">🚀 Projects</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-2">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-800 text-sm px-2 py-1 rounded-md text-blue-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Area:</strong> {project.area}</li>
          <li><strong>Landmark:</strong> {project.landmark}</li>
          <li><strong>Zoning:</strong> {project.zoning}</li>
          <li><strong>Size:</strong> {project.size}</li>
          <li><strong>Cost:</strong> {project.cost}</li>
          <li><strong>ROI:</strong> {project.roi}</li>
        </ul>
        <a
          href={`/projects/${project.id}`}
          className="inline-block mt-4 text-sm font-medium text-purple-600 hover:underline"
        >
          View Details →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

// components/ToolSection.js

import ToolCard from "./ToolCard";

export default function ToolSection({ title, tools }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="max-w-[300px] w-full mx-auto">
            <ToolCard {...tool} />
          </div>
        ))}
      </div>
    </section>
  );
}

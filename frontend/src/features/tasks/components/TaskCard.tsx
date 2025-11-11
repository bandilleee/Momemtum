import React from "react";

type TaskCardProps = {
  id?: string;
  title?: string;
  description?: string;
  completed?: boolean;
};

export default function TaskCard({ title = "Untitled", description, completed = false }: TaskCardProps) {
  return (
    <article className="p-4 border rounded-md shadow-sm bg-white">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <span className={`text-sm ${completed ? "text-green-600" : "text-gray-500"}`}>
          {completed ? "Done" : "Pending"}
        </span>
      </header>
      {description ? <p className="mt-2 text-sm text-gray-600">{description}</p> : null}
    </article>
  );
}

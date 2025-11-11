import React from "react";
import TaskCard from "@/features/tasks/components/TaskCard";

type Task = { id: string; title: string; description?: string; completed?: boolean };
type TaskListProps = { tasks?: Task[] };

export default function TaskList({ tasks = [] }: TaskListProps) {
  if (tasks.length === 0) return <p className="text-sm text-gray-500">No tasks yet</p>;
  return (
    <div className="grid gap-3">
      {tasks.map((t) => (
        <TaskCard key={t.id} title={t.title} description={t.description} completed={t.completed} />
      ))}
    </div>
  );
}

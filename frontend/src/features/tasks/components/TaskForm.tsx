import React from "react";

type TaskFormProps = {
  onSubmit?: (payload: { title: string; description?: string }) => void;
};

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const title = String(fd.get("title") || "");
    const description = String(fd.get("description") || "");
    onSubmit?.({ title, description });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="title" placeholder="Task title" className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Details" className="w-full p-2 border rounded" />
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Add
        </button>
      </div>
    </form>
  );
}

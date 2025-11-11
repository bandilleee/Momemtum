import React from "react";

type TaskModalProps = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function TaskModal({ open = false, onClose, children }: TaskModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded p-4 w-full max-w-md">
        <button onClick={onClose} className="float-right text-sm text-gray-600">
          Close
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

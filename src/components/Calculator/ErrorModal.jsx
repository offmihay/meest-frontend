import React from "react";
import { Button } from "../buttons/BtnSuccess";

export function ErrorModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-md mx-auto error-modal">
        <h2 className="text-lg font-bold mb-4">Помилка</h2>
        <p>{message}</p>
        <div className="flex justify-end mt-4">
          <Button onClick={onClose}>Закрити</Button>
        </div>
      </div>
    </div>
  );
}

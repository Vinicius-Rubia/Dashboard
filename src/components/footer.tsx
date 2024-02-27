import React from "react";

export const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-primary-foreground px-5 h-10 text-gray-400">
      <p className="text-xs">&copy; 2024 Dashboard UI</p>
      <p className="text-xs">Powered by <span className="text-blue-500 hover:underline cursor-pointer">Vinicius rubia</span></p>
    </div>
  );
};

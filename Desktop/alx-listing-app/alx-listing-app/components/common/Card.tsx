import React from "react";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={`border rounded-xl p-4 shadow-md bg-white ${className}`}>
      {title && <h2 className="font-semibold text-lg mb-2">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;

"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface BackButtonProps {
  text?: string;
}

const BackButton: FC<BackButtonProps> = ({ text = "Regresar" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Función para manejar el click y regresar a la página anterior con su paginación y filtros
  const handleBackClick = () => {
    if (window.history.length > 1) {
      router.back(); // Regresa a la página anterior en el historial
    } else {
      // Si no hay historial, vuelve a la lista de planetas con los parámetros actuales
      router.push(`/?${searchParams.toString()}`);
    }
  };

  return (
    <button
      onClick={handleBackClick}
      className="flex items-center justify-center bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300 transform hover:scale-105 shadow-md"
    >
      <FaArrowLeft className="mr-2" />
      {text}
    </button>
  );
};

export default BackButton;

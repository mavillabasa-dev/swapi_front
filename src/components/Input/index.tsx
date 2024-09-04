"use client";
import useForm from "@/hooks/useForm";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
    onSearch: (value: string) => Promise<void>;
  }
export default function SearchBar({ onSearch }: SearchBarProps) {
  const { form, handleChange } = useForm({ value: "" });

  const handleSearch = () => {
    onSearch(form.value);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 placeholder-gray-400 shadow-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        name="value"
      />
      <button
        onClick={handleSearch}
        type="button"
        className="flex items-center justify-center rounded-lg bg-blue-500 p-2 text-white shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
}

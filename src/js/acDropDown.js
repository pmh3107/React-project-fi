import { useState } from "react";

const useDropdownState = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // const imagePaths = [
  //   "Vinfast.png",
  //   "KIA.png",
  //   "Suzuki.png",
  //   "Toyota.png",
  //   "ford.png",
  //   "honda.jpg",
  //   "mazda.png",
  //   "mercedes.jpg",
  // ];

  return {
    isDropdownOpen,
    toggleDropdown,
    handleMouseLeave,
    // imagePaths,
  };
};
export default useDropdownState;

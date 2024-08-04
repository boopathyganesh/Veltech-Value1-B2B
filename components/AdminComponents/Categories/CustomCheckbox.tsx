import { useState, useEffect } from 'react';

interface CustomCheckboxProps {
  isServiceActive: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isServiceActive }) => {
  const [isActive, setIsActive] = useState(isServiceActive);

  useEffect(() => {
    setIsActive(isServiceActive);
  }, [isServiceActive]);

  const handleCheckedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsActive(event.target.checked);
  };

  return (
    <input
      id="isActive"
      type='checkbox'
      className="text-gold-200 border-gold-300 rounded checked:bg-gold-300 checked:outline-none focus:ring-0"
      checked={isActive}
      onChange={handleCheckedChange}
    />
  );
};

export default CustomCheckbox;

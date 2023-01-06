import { useState } from 'react';

export const useInputChange = () => {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [addOn, setAddOn] = useState({
    service: true,
    storage: false,
    profile: false,
  });

  const handleInputValueChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === 'checkbox'
      ? setAddOn((prev) => ({ ...prev, [name]: checked }))
      : setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return { inputValue, addOn, handleInputValueChange, setAddOn };
};

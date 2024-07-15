import React, { useRef, useState } from 'react';

const InputValueDisplay = () => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = () => {
    const value = inputRef.current.value;
    setInputValue(value);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="Type something..."
        className="block w-full border-gray-300 rounded-md px-4 py-3 leading-tight focus:outline-none focus:border-blue-500"
      />
      <p className="mt-4 text-lg font-semibold text-gray-700">Input value: {inputValue}</p>
    </div>
  );
};

export default InputValueDisplay;

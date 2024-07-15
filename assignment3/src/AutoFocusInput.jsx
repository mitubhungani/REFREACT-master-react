import React, { useEffect, useRef } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="mt-4">
      <label htmlFor="autoFocusInput" className="block text-gray-700">Auto Focus Input:</label>
      <input
        id="autoFocusInput"
        type="text"
        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ref={inputRef}
      />
    </div>
  );
};

export default AutoFocusInput;

import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // The element where we'll portal our modal
 

  return (
    // Overlay backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      {/* Modal content container */}
      <div
        className="bg-white rounded shadow p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#10005;
        </button>

        {children}
      </div>
    </div>

  );
}

export default Modal;

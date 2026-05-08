import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    // Log the current path to the console as a 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6 font-sans">
      <div className="text-center max-w-md">
        {/* Visual Element */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <svg
              className="h-24 w-24 text-red-100"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-red-600 font-black text-2xl">
              ?
            </span>
          </div>
        </div>

        <h1 className="mb-2 text-6xl font-black text-gray-900 tracking-tighter">
          404
        </h1>

        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Oops! Page not found
        </h2>

        <p className="mb-8 text-gray-500 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-red-100 active:scale-95"
        >
          <svg 
            className="mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
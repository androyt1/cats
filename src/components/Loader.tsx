const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-12 h-12 text-primary animate-bounce"
      >
        <path d="M12 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zM4 10v4a8 8 0 008 8 8 8 0 008-8v-4h1.5a1.5 1.5 0 001.5-1.5v-.125c0-.94-.76-1.7-1.7-1.7-.7 0-1.333.4-1.625 1H17c0-.67-.396-1.306-1-1.59l-1-.5C14.05 5.836 13.114 5 12 5s-2.05.836-3 1.91l-1 .5c-.604.284-1 .92-1 1.59H3.325C3.033 8.675 2.4 8.275 1.7 8.275c-.94 0-1.7.76-1.7 1.7v.125A1.5 1.5 0 001.5 10H4zm8 11a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8z" />
      </svg>
      <p className="mt-2 text-lg font-semibold text-primary">Loading cats...</p>
    </div>
  );
};

export default Loader;

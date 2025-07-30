
const Header = () => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-purple-700 drop-shadow text-center sm:text-left">
      My To-Do List
    </h1>

    <a
      href="https://github.com/Ishfaqmir1/to-do-app-react-.git"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 group transition hover:text-black text-gray-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 sm:w-9 sm:h-9 fill-current group-hover:scale-110 transition-transform"
        viewBox="0 0 24 24"
      >
        <path d="M12 0.297C5.37 0.297 0 5.67 0 12.297c0 5.29 3.438 9.78 8.205 11.387.6.112.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.24 1.84 1.24 1.07 1.83 2.805 1.3 3.495.995.107-.775.42-1.3.76-1.6-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.302-.535-1.52.115-3.17 0 0 1.005-.322 3.3 1.23a11.4 11.4 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.868.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.102.81 2.222 0 1.604-.015 2.895-.015 3.29 0 .322.21.694.825.576C20.565 22.07 24 17.584 24 12.297 24 5.67 18.63.297 12 .297z" />
      </svg>
      <span className="hidden sm:inline font-medium">GitHub</span>
    </a>
  </div>
);

export default Header;

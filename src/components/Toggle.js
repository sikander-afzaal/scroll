import useDarkMode from "../hooks/useDarkMode";

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  function toggleDarkMode(e) {
    e.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  console.log(colorTheme);

  return (
    <>
      <button
        className="dark:bg-slate-200 dark:text-slate-900 text-white  bg-slate-900"
        onClick={toggleDarkMode}>
        Toggle theme
      </button>
    </>
  );
};

export default Toggle;

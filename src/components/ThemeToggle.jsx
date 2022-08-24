import { createContext } from "react";
export const ThemeContext = createContext();

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App__${theme}`}>
        <Header />
        <ToggleTheme />
        {/* Rest of the app */}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeToggle;

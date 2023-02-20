import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const htmlEl = document.getElementsByTagName("html")[0];

export const SwitchDarkMode = () => {
  const initialThemeMode = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(initialThemeMode);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const updateTheme = (newTheme) => {
    htmlEl.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  return (
    <label htmlFor="switchDarkMode">
      <FontAwesomeIcon icon={faSun} />
      <input
        type="checkbox"
        id="switchDarkMode"
        name="switchDarkMode"
        role="switch"
        style={{
          marginInlineStart: "0.375em",
        }}
        onChange={toggleTheme}
        checked={theme === "dark" ? true : false}
      />
      <FontAwesomeIcon icon={faMoon} />
    </label>
  );
};

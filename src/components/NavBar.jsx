import { SwitchDarkMode } from "./SwitchDarkMode";
export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <strong>Finanzas Personales</strong>
        </li>
      </ul>
      <ul>
        <li>
            <SwitchDarkMode />
        </li>
      </ul>
    </nav>
  );
};

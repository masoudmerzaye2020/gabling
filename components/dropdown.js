import MenuItems from "./menuItems";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
      <style jsx>{`
  


   
/* 
      .arrow::after {
        content: "";
        display: inline-block;
        margin-left: 0.28em;
        vertical-align: 0.09em;
        border-top: 0.42em solid;
        border-right: 0.32em solid transparent;
        border-left: 0.32em solid transparent;
      } */

      .dropdown {
        position: absolute;
        left: 0;
        right: auto;
        box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
          0 4px 6px -2px rgba(71, 63, 79, 0.16);
        font-size: 0.875rem;
        z-index: 9999;
        min-width: 13rem;
        padding: 0.5rem 0;
        list-style: none;
        background-color: #2b3e4c;
        border-radius: 0.2rem;
        display: none;
      }

      .dropdown.show {
        display: block;
      }

      .dropdown .dropdown-submenu {
        position: absolute;
        left: 100%;
        top: -7px;
      },
      @media only screen and (max-width: 600px) {
        .dropdown {
          display: block;
        }
      },




    

      `}</style>
    </ul>
  );
};

export default Dropdown;

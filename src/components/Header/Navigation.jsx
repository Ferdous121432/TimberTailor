/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/apiProduct";
import { frontendURL } from "../../frontendURL/frontendURL";

function Navigation() {
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      console.log(categories.data.categories);
    };
    fetchCategories();
  }, []);

  const navItems = [
    { title: "Home", url: "", id: "66ebd7abb5d3c708b4f5da07" },
    { title: "Products", url: "products", id: "66ebd7abb5d3c708b4f5da07" },
    { title: "Gallery", url: "gallery", id: "66ebd7abb5d3c708b4f5da07" },
    { title: "Blog", url: "blog", id: "671b3c9d7169d20734e36455" },
    { title: "Contact Us", url: "contact-us", id: "671b3cc27169d20734e36456" },
    { title: "About Us", url: "about-us", id: "671b3cf77169d20734e36457" },
  ];

  return (
    <nav className="ml-5 hidden flex-col lg:flex">
      <ul className="text-base my-auto flex items-center justify-center gap-8 self-stretch whitespace-nowrap font-medium text-black">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="group relative hover:border-yellow-primary hover:text-yellow-primary"
          >
            <Link
              to={`${frontendURL()}/${item.url}`}
              className="relative block cursor-pointer py-2 text-sm text-black no-underline transition-all duration-500 ease-in-out md:text-md lg:text-lg xl:text-xl"
            >
              {item.title}
            </Link>
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-yellow-primary transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;

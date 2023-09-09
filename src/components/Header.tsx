import { useState } from "react";
import { Bars4Icon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "flowbite-react";

export default function Header() {
  const BrandNameAnchor = () => {
    return (
      <h1 className="text-pink-600 uppercase text-3xl font-bold">
        <a href={"/"}>MCPR2024</a>
      </h1>
    );
  };

  const MenuBtn = () => {
    return (
      <button
        className="lg:hidden"
        onClick={() => {
          setDrawerState(!drawerState);
        }}
      >
        <Bars4Icon className="text-pink-600 w-8 h-8" />
      </button>
    );
  };

  const NavElement = ({
    label,
    items,
    style,
  }: {
    label: string;
    items: { label: string; path: string }[];
    style?: string;
  }) => {
    return (
      <Dropdown
        label
        placement="bottom"
        inline
        size={"lg"}
        className={` -ml-4 ${style == "nav" ? "bg-white" : "bg-black"}`}
        renderTrigger={() => (
          <button
            className={`${
              style == "nav" ? "text-black text-xl" : "text-white"
            }  flex flex-row w-fit items-center`}
          >
            {label}
            <ChevronDownIcon
              className={`${style == "nav" ? "h-5 w-5" : "h-7 w-7"}`}
            />
          </button>
        )}
      >
        {items.map((item, id) => (
          <Dropdown.Item
            key={id}
            as={"a"}
            href={item.path}
            className={`${
              style == "nav" ? "text-black" : "text-white"
            } text-lg  w-full px-6 py-1 bg-transparent`}
          >
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown>
    );
  };

  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="flex flex-row justify-between px-6 w-full my-3">
      <BrandNameAnchor />
      <MenuBtn />
      <nav
        className={`top-0 absolute transition-all flex flex-col bg-black h-screen w-full px-6 z-50 overscroll-none ${
          drawerState ? "-left-0 " : "-left-[200%]"
        }`}
      >
        <div className="flex flex-row justify-between w-full as-center my-3">
          <BrandNameAnchor />
          <MenuBtn />
        </div>
        <ul className="relative flex flex-col mt-6 text-2xl gap-5 items-end">
          <NavElement label="Main" items={[{ label: "Home", path: "/" }]} />
          <NavElement
            label="Contributions"
            items={[{ label: "Submission Guidelines", path: "/" }]}
          />
          <NavElement
            label="Attendence"
            items={[{ label: "Fees for author", path: "/" }]}
          />

          <NavElement
            label="Previous MCPRs"
            items={[
              { label: "MCPR 2022", path: "/" },
              { label: "MCPR 2021", path: "/" },
              { label: "MCPR 2020", path: "/" },
              { label: "MCPR 2019", path: "/" },
              { label: "MCPR 2018", path: "/" },
              { label: "MCPR 2017", path: "/" },
              { label: "MCPR 2016", path: "/" },
              { label: "MCPR 2015", path: "/" },
              { label: "MCPR 2014", path: "/" },
              { label: "MCPR 2013", path: "/" },
              { label: "MCPR 2012", path: "/" },
              { label: "MCPR 2011", path: "/" },
              { label: "MCPR 2010", path: "/" },
            ]}
          />
        </ul>
      </nav>
      <div className="hidden lg:flex">
        <ul className="flex flex-row text-3xl gap-10">
          <NavElement
            style="nav"
            label="Main"
            items={[{ label: "Home", path: "/" }]}
          />
          <NavElement
            label="Contributions"
            style="nav"
            items={[{ label: "Submission Guidelines", path: "/" }]}
          />
          <NavElement
            label="Attendence"
            style="nav"
            items={[{ label: "Fees for author", path: "/" }]}
          />
          <NavElement
            label="Previous MCPRs"
            style="nav"
            items={[
              { label: "MCPR 2022", path: "/" },
              { label: "MCPR 2021", path: "/" },
              { label: "MCPR 2020", path: "/" },
              { label: "MCPR 2019", path: "/" },
              { label: "MCPR 2018", path: "/" },
              { label: "MCPR 2017", path: "/" },
              { label: "MCPR 2016", path: "/" },
              { label: "MCPR 2015", path: "/" },
              { label: "MCPR 2014", path: "/" },
              { label: "MCPR 2013", path: "/" },
              { label: "MCPR 2012", path: "/" },
              { label: "MCPR 2011", path: "/" },
              { label: "MCPR 2010", path: "/" },
            ]}
          />
        </ul>
      </div>
    </div>
  );
}

import { Fragment, useState } from "react";
import { Bars4Icon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const DropdownButtonSM = ({
    label,
    items,
  }: {
    label: string;
    items: string[];
  }) => (
    <Menu>
      <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 items-center py-2 text-xl font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {label}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5 text-white hover:text-white"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="relative mt-2 w-1/2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {items.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-500 text-white" : "text-gray-900"
                    } group flex justify-center w-full items-center rounded-md px-2 py-2 text-lg`}
                  >
                    {item}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  const DisplayableMenu = () => (
    <div
      className={`absolute z-50 h-screen w-screen top-0 -left-full bg-black  ${
        isMenuOpen && "-left-0"
      }`}
    >
      <div className="w-full flex flex-row items-center justify-between p-6">
        <p className="text-3xl font-bold text-white">Menu</p>
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          <Bars4Icon className="h-10 w-10 text-white" />
        </button>
      </div>

      <ul className="w-full flex flex-col justify-center">
        <li>
          <DropdownButtonSM
            label="Main"
            items={[
              "Home",
              "Call for papers",
              "Paper Awards",
              "Keynote Speakers",
              "Student's Meeting",
            ]}
          />
        </li>
        <li>
          <DropdownButtonSM label="Contributions" items={["Z", "X", "Y"]} />
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="w-screen flex flex-row justify-between p-6 ">
        <h1 className="text-3xl font-bold text-pink-600">MCPR2023</h1>
        <button onClick={() => setMenuOpen(!isMenuOpen)}>
          <Bars4Icon className="h-9 w-9 text-pink-600" />
        </button>
        {isMenuOpen && <DisplayableMenu />}
      </div>
    </>
  );
}

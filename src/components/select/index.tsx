"use client";

import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type SelectProps = {
  value: string;
  handleChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeHolder: string;
  extraClass?: string;
};

const styleSheet = {
  icon: "inline ms-2 text-lg",
};

const Select = ({
  value,
  options,
  placeHolder,
  handleChange,
  extraClass,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      ref={selectRef}
      className={`relative select-none inline-block ${extraClass}`}
    >
      <div
        onClick={toggleOpen}
        className="bg-lightElement dark:bg-darkElement rounded shadow p-2 cursor-pointer text-center capitalize"
      >
        <span>
          {value && options.find((option) => option.value === value)
            ? options.find((option) => option.value === value)?.label
            : placeHolder}
        </span>
        {open ? (
          <MdKeyboardArrowUp className={styleSheet.icon} />
        ) : (
          <MdKeyboardArrowDown className={styleSheet.icon} />
        )}
      </div>
      {open && (
        <ul className="absolute bg-lightElement dark:bg-darkElement rounded shadow z-10 mt-2 w-full cursor-pointer capitalize">
          {options.map((option, index) => (
            <li
              className="py-2 hover:bg-gray-200 dark:hover:bg-slate-600 rounded text-center"
              key={index}
              onClick={() => {
                handleChange(option.value);
                toggleOpen();
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;

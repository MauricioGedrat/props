import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";

interface Props {
  children?: ReactNode;
  onClick?: Function;
  titulo?: string;
  content?: string;
}

const Collapse = (props: Props) => {
  const [state, setState] = useState(false);

  return (
    <div>
      <div className="flex justify-between gap-4 bg-gray-100 w-[60%] m-auto p-2">
        <h1 onClick={() => setState(!state)}>{props.titulo}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setState(!state)}
          className={`${state ? "rotate-90" : "rotate-0"} duration-300`}
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
      <div className="flex justify-center">
        {state && (
          <motion.div
            initial={{ translateY: -10, opacity: 0, scale: 1.5 }}
            animate={{ translateY: 10, opacity: 1, scale: 1 }}
            exit={{ translateY: -10, opacity: 0, scale: 1.5 }}
          >
            {props.content}
          </motion.div>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default Collapse;

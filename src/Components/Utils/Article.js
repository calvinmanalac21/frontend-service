import React from "react";
import { Popover, Transition } from "@headlessui/react";
const Article = (props) => {
  return (
    <div className="m-5 p-5 flex flex-wrap min-w-[100px] min-h-[100px] align-center space-y-6 justify-center max-w-[300px] max-h-[300px] shadow-md hover:bg-slate-100 hover:cursor-pointer to-btnHover">
      <h1 className="text-lg text-teal-800 font-bold uppercase">
        {props.value.title}
      </h1>
      <p className="text-lg text-teal-800 italic">{props.value.description}</p>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={"font-bold text-teal-600 p-2 hover:opacity-[50%]"}
            >
              ARTICLE OPTIONS
            </Popover.Button>

            {/* Use the Transition component. */}
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              {/* Mark this component as `static` */}
              <Popover.Panel static>
                {
                  <div className=" flex-col min-w-[100px] max-w-[200px] shadow-md bg-white ">
                    <p className="px-[2rem] py-[1rem] text-teal-800 italic font-bold hover:text-teal-900 hover:cursor-pointer">
                      View Article
                    </p>
                    <p className="px-[2rem] py-[1rem] text-teal-800 italic font-bold hover:text-teal-900 hover:cursor-pointer">
                      {" "}
                      Like Article
                    </p>
                  </div>
                }
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Article;

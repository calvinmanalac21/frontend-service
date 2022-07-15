import React from "react";

const Article = (props) => {
  return (
    <div className="m-5 p-5 flex flex-wrap min-w-[100px] min-h-[100px] align-center space-y-6 justify-center max-w-[300px] max-h-[300px] shadow-md ">
      <h1 className="text-lg text-teal-800 font-bold uppercase">
        {props.value.title}
      </h1>
      <p className="text-lg text-teal-800 italic">{props.value.description}</p>
    </div>
  );
};

export default Article;

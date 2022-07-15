import React from "react";

const Profile = (props) => {
  return (
    <section>
      <div
        className={` my-10 mx-auto flex flex-col relative  h-[450px] w-[400px] p-5 shadow rounded-lg min-h-[200px]  bg-slate-300 ${props.class}`}
      >
        <img
          src={props.value.imgsrc}
          className="w-full rounded-[2rem]"
          alt={props.value.alt}
        />
        <h1 className="text-teal-700 font-bold text-[2.6rem] uppercase shadow-sm text-center ">
          <pre>{props.value.name} </pre>
        </h1>
        <p className="text-teal-700 text-[1.3rem] tracking-widest">
          {props.value.position}
        </p>
        <p className="italic text-teal-600 text-justify my-2">
          {props.value.description}
        </p>
      </div>
    </section>
  );
};

export default Profile;

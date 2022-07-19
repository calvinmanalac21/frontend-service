import React from "react";
import { motion } from "framer-motion";
import ProfileHelper from "./Utils/ProfileHelper";
const Profile = (props) => {
  console.log(window.innerHeight);
  return (
    <motion.section
      className={`min-h-[${window.innerHeight}px] `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ProfileHelper value={props.value} />
    </motion.section>
  );
};

export default Profile;

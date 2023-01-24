import React, { useContext } from "react";
import av from "../../assets/avatar.jpg";
import { Avatar } from "@mui/material";
import { AppContext } from "../../context/AppContext";
const Comment = () => {
  const { isDark } = useContext(AppContext);
  return (
    <div
      className={`${
        isDark ? "bg-indigo-400" : "bg-neutral-200"
      } rounded-3xl max-w-3xl mx-auto h-max  p-4 shadow-md mt-10 `}
    >
      <div className="flex  ">
        <Avatar sx={{ width: 45, height: 45 }} alt="Remy Sharp" src={av} />

        <div className="pl-4 pb-6">
          <p className=" text-black ">Remy Sharp</p>
          <p className="text-[12px] text-gray-600 ">5 min ago</p>
        </div>
      </div>
      <p className="bg-neutral-100 rounded-2xl p-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nemo
        aliquid autem inventore eum suscipit magni, reiciendis vero praesentium
        enim officiis saepe. Animi nihil illum error ducimus numquam
        cupiditateMagnam nemo aliquid autem inventore eum suscipit magni,
        reiciendis vero praesentium enim officiis saepe. Animi nihil illum error
        ducimus numquam cupiditate enim officiis saepe. Animi nihil illum error
        ducimus numquam cupiditateMagnam nemo aliquid autem inventore eum
        suscipit magni, reiciendis vero praesentium enim officiis saepe. Animi
        nihil illum error ducimus numquam cupiditate
      </p>
    </div>
  );
};

export default Comment;

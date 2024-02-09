import React from "react";
import styles from "./style.module.css";

// eslint-disable-next-line react/prop-types
function Navbar({ data }) {
  // eslint-disable-next-line react/prop-types
  const favoritesCount = data.filter((item) => item.added).length;

  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3 className={`${styles.a}`}>Orange</h3>
      <div className="flex p-3 bg-orange-600 rounded-md text-white text-sm gap-3">
        <h3>Favourites</h3>
        <h4>{favoritesCount}</h4>
      </div>
    </div>
  );
}

export default Navbar;

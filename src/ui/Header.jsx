import React from "react";

function Header() {
  return (
    <div className="w-full bg-primary-300 dark:bg-primary-900 sticky top-0">
      <div className="container mx-auto flex justify-between items-center py-2 px-4  dark:text-white text-secondary-700">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold ">Inventory Management </h1>
        </div>
        {/*! import toggle */}
      </div>
    </div>
  );
}

export default Header;

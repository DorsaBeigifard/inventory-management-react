import React, { useEffect, useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function SearchProduct({
  setSearchQuery,
  setSelectedCategory,
  setSortOrder,
  categories,
}) {
  return (
    <form className="grid gap-4 py-4  sm:grid-cols-2 xl:grid-cols-[3fr_2fr_1fr]">
      <div className="flex items-center gap-2 sm:col-span-2 xl:col-span-1">
        <label htmlFor="search" className="text-sm font-medium">
          Search
        </label>
        <input
          type="text"
          id="search"
          className="text-input"
          placeholder="product name..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          className="text-input"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat.categoryName} value={cat.categoryName}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm font-medium">
          Sort
        </label>
        <select
          id="sort"
          className="text-input"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">-</option>
          <option value="latest">Latest</option>
          <option value="earliest">Earliest</option>
        </select>
      </div>
    </form>
  );
}

export default SearchProduct;

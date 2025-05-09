import React from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";

function SearchProduct() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        className="grid gap-4 py-4  sm:grid-cols-2 xl:grid-cols-[3fr_2fr_1fr]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-2 sm:col-span-2 xl:col-span-1">
          <label
            htmlFor="search"
            className="text-sm font-medium text-secondary-700 dark:text-secondary-200"
          >
            Search
          </label>
          <input
            type="text"
            name="search"
            className="text-input"
            placeholder="product name..."
            {...register("search")}
          />
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-secondary-700 dark:text-secondary-200"
          >
            Category
          </label>
          <select
            id="category"
            className="text-input"
            {...register("category")}
          >
            <option value="">-</option>
            {/* ADD CATEGORIES */}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-sm font-medium text-secondary-700 dark:text-secondary-200"
          >
            Sort
          </label>
          <select id="sort" className="text-input" {...register("sort")}>
            <option value="">-</option>
            <option value="latest">Latest</option>
            <option value="earliest">Earliest</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default SearchProduct;

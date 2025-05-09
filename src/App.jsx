import "./App.css";
import AddProductForm from "./features/product/AddProductForm";
import AddCategoryForm from "./features/category/AddCategoryForm";
import Header from "./ui/Header";
import { useState } from "react";

function App() {
  const [editCategory, setEditCategory] = useState(false);

  return (
    <>
      <Header />
      <div className="main-content container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4">
        <div className="md:col-span-1 space-y-6">
          {!editCategory ? (
            <div>
              <button
                onClick={() => setEditCategory(true)}
                className="text-secondary-500 cursor-pointer"
              >
                Add a new category?
              </button>
            </div>
          ) : (
            <AddCategoryForm setEditCategory={setEditCategory} />
          )}
          <AddProductForm />
        </div>

        <div className="md:col-span-2">
          <div>search</div>
          <div>product list</div>
        </div>
      </div>
    </>
  );
}

export default App;

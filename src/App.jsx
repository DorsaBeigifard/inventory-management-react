import "./App.css";
import AddProductForm from "./features/product/AddProductForm";
import AddCategoryForm from "./features/category/AddCategoryForm";
import Header from "./ui/Header";
import { useState } from "react";
import SearchProduct from "./features/product/SearchProduct";
import ProductTable from "./features/product/ProductTable";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [editCategory, setEditCategory] = useState(false);
  const [categories, setCategories] = useLocalStorage("categories", []);
  const [products, setProducts] = useLocalStorage("products", []);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.productName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortOrder === "earliest") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

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
            <AddCategoryForm
              setEditCategory={setEditCategory}
              setNewCategories={setCategories}
              categories={categories}
            />
          )}
          <AddProductForm
            categories={categories}
            products={products}
            setNewProducts={setProducts}
          />
        </div>

        <div className="md:col-span-2 component-style">
          <h2>Product List</h2>
          <SearchProduct
            setSearchQuery={setSearchQuery}
            setSelectedCategory={setSelectedCategory}
            setSortOrder={setSortOrder}
            categories={categories}
          />
          <ProductTable
            products={filteredProducts}
            updateProducts={setProducts}
            categories={categories}
          />
        </div>
      </div>
    </>
  );
}

export default App;

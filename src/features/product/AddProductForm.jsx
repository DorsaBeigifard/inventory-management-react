import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import SelectField from "../../ui/SelectField";

function AddProductForm({ categories, setNewProducts, products }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...data,
    };
    setNewProducts([...products, newProduct]);
    console.log("Product Added:", data);
    reset();
  };

  return (
    <div className="component-style border-secondary-600 dark:border-white">
      <h2>Product Detail</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Product Name"
            name="productName"
            register={register}
            validationSchema={{
              required: "Product name is required.",
            }}
            errors={errors}
          />
          <div className="flex gap-x-2">
            <TextField
              label="Quantity"
              name="quantity"
              register={register}
              validationSchema={{
                required: "Quantity is required.",
              }}
              type="number"
              errors={errors}
            />

            <TextField
              label="Price $"
              name="price"
              register={register}
              validationSchema={{
                required: "Price is required.",
              }}
              type="number"
              errors={errors}
            />
          </div>
          <SelectField
            label="Category"
            name="category"
            register={register}
            validationSchema={{
              required: "Choose a category",
            }}
            options={categories.map((cat) => ({
              value: cat.categoryName,
              label: cat.categoryName,
            }))}
          />

          <button className="btn btn--primary">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;

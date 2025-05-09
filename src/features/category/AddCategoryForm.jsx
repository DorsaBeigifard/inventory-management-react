import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import TextAreaField from "../../ui/TextAreaField";

function AddCategoryForm({ setEditCategory, setNewCategories, categories }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = {
      id: Date.now(),
      ...data,
    };
    setNewCategories([...categories, newCategory]);
    console.log("Category Added:", data);
    reset();
  };

  return (
    <div className="component-style ">
      <h2>Category Detail</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Name"
            name="categoryName"
            register={register}
            validationSchema={{
              required: "Category name is required.",
            }}
            errors={errors}
          />

          <TextAreaField
            label="Description"
            name="description"
            register={register}
            errors={errors}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setEditCategory(false)}
              className="btn btn--secondary "
            >
              Cancel
            </button>
            <button className="btn btn--primary ">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCategoryForm;

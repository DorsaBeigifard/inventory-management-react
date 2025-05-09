function TextField({
  label,
  name,
  register,
  validationSchema = {},
  type = "text",
  required,
  errors,
}) {
  return (
    <div className="mb-2">
      <label
        className="mb-1 block text-sm font-medium text-secondary-700 dark:text-secondary-200"
        htmlFor={name}
      >
        {label} {required && <span className="text-error">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        autoComplete="off"
        className="text-input"
      />

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;

function SelectField({
  label,
  name,
  register,
  validationSchema = {},
  required,
  options = [],
  errors,
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm font-medium text-secondary-700 dark:text-secondary-200"
      >
        {label} {required && <span className="text-error">*</span>}
      </label>

      <select
        id={name}
        {...register(name, validationSchema)}
        className={`
            w-full rounded-md border border-secondary-300 
            px-3 py-2 text-sm text-secondary-900 
            bg-white placeholder:text-secondary-400 focus:border-primary-500 
            focus:outline-none focus:ring-1 focus:ring-primary-500 
            dark:border-secondary-600 dark:bg-secondary-0 
            dark:text-secondary-50 dark:placeholder:text-secondary-300
          `}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errors && errors[name] && (
        <span className="text-error block text-sm mt-1">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default SelectField;

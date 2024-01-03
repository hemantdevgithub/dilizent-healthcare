const Input = ({
  id,
  label,
  type,
  disabled,
  register,
  required,
  errors,
  validation,
  errorName,
}) => {
  return (
    <div className="w-full relative flex flex-col gap-2">
      {errorName && errorName?.type && (
        <span className="text-rose-600 text-xs absolute top-[-21px]">
          {errorName?.type == "required" && errorName?.message}
          {errorName?.type == "maxLength" && errorName?.message}
          {errorName?.type == "minLength" && errorName?.message}
          {errorName?.type == "matchPattern" && errorName?.message}
          {errorName?.type == "pattern" && errorName?.message}
        </span>
      )}

      <input
        id={id}
        disabled={disabled}
        {...register(id, validation)}
        placeholder=" "
        type={type || "text"}
        className={`
          w-full
          p-2
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-3
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
    </div>
  );
};

export default Input;

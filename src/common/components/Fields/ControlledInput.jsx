import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";

function ControlledInput({
  min = null,
  control,
  name,
  StartIcon,
  label = null,
  type,
  icon,
  defaultValue,
  width = null,
  readOnly = false,
  placeholder,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className="mb-2">
          {label && (
            <label htmlFor={name} className="text-gray-800 text-sm ">
              {label?.substring(0, label?.length - 1)}
              <span
                className={
                  label[label?.length - 1] === "*"
                    ? "text-red-500"
                    : "text-inherit"
                }
              >
                {label[label?.length - 1]}
              </span>
            </label>
          )}

          <Input
            id={name}
            readOnly={readOnly}
            // value={defaultValue}

            type={type}
            className="!border-1 !border-gray-400 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-primary  "
            labelProps={{
              className: "hidden",
            }}
            containerProps={{
              className: width ? `w-[${width}]` : "min-w-[100px]",
            }}
            {...field}
            // defaultValue={defaultValue ? defaultValue : ""}
            placeholder={placeholder}
            icon={icon}
            min={min}
          />

          {fieldState.error?.message && (
            <span className="text-xs text-red-500 ml-1">
              {fieldState.error?.message}
            </span>
          )}
        </div>
      )}
      defaultValue={defaultValue ? defaultValue : ""}
    />
  );
}

export default ControlledInput;

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Props<T> {
  defaltValues: T;
  onSubmit: (values: T) => void;
  validationScheme?: Partial<{
    [key in keyof T]: (value: string | boolean) => string | undefined;
  }>;
}

export const useForm = <T extends { [key: string]: string | boolean }>({
  defaltValues,
  onSubmit,
  validationScheme = {},
}: Props<T>) => {
  type ErrorsType = Partial<Record<keyof T, string | undefined>>;
  const [values, setValues] = useState(defaltValues);
  const [errors, setErros] = useState<ErrorsType>({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
    >
  ) => {
    console.log(event.target);
    const { name, value, type, checked } = event.target;
    setValues((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
    const validateValue = validationScheme[name];
    if (validateValue)
      setErros((state) => ({ ...state, [name]: validateValue(value) }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(values);
  };

  const handleValidate = () => {
    const curErrors = {} as ErrorsType;

    Object.keys(values).map((v: keyof T) => {
      const validateValue = validationScheme[v];
      curErrors[v] = validateValue ? validateValue(values[v]) : undefined;
    });

    setErros(curErrors);
  };

  useEffect(() => {
    setIsValid(!Object.values(errors).some((v) => !!v));
  }, [errors]);

  return {
    values,
    handleChange,
    handleSubmit,
    handleValidate,
    errors,
    isValid,
  };
};

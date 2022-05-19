import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { isObjEmpty } from "../utils/utils";

interface Props<T> {
  defaultValues: T;
  onSubmit: (values: T) => void;
  validationScheme?: Partial<{
    [key in keyof T]: (value: string | boolean) => string | undefined;
  }>;
  validateOnMount?: boolean;
}

export const useForm = <T extends { [key: string]: string | boolean }>({
  defaultValues,
  onSubmit,
  validationScheme = {},
  validateOnMount = false,
}: Props<T>) => {
  type ErrorsType = Partial<Record<keyof T, string | undefined>>;
  const [values, setValues] = useState(defaultValues);
  const [errors, setErros] = useState<ErrorsType>({});

  const isValid = useMemo(() => isObjEmpty(errors), [errors]);

  const handleChange = useCallback(
    (
      event: ChangeEvent<
        HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement
      >
    ) => {
      const { name, value, type, checked } = event.target;
      setValues((state) => ({
        ...state,
        [name]: type === "checkbox" ? checked : value,
      }));
      const validateValue = validationScheme[name];
      if (validateValue) {
        setErros((state) => ({ ...state, [name]: validateValue(value) }));
      }
    },
    [validationScheme]
  );

  const handleValidate = useCallback(() => {
    const curErrors = {} as ErrorsType;

    Object.keys(values).map((v: keyof T) => {
      const validateValue = validationScheme[v];
      curErrors[v] = validateValue ? validateValue(values[v]) : undefined;
    });

    setErros(curErrors);

    return curErrors;
  }, [validationScheme, values]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (isObjEmpty(handleValidate())) {
        onSubmit(values);
      }
    },
    [values, onSubmit, handleValidate]
  );

  const resetForm = useCallback(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  useEffect(() => {
    if (validateOnMount) handleValidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetForm]);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    handleValidate,
    resetForm,
    errors,
    isValid,
  };
};

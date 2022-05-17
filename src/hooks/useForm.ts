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
  defaltValues: T;
  onSubmit: (values: T) => void;
  validationScheme?: Partial<{
    [key in keyof T]: (value: string | boolean) => string | undefined;
  }>;
  validateOnMount?: boolean;
}

export const useForm = <T extends { [key: string]: string | boolean }>({
  defaltValues,
  onSubmit,
  validationScheme = {},
  validateOnMount = false,
}: Props<T>) => {
  type ErrorsType = Partial<Record<keyof T, string | undefined>>;
  const [values, setValues] = useState(defaltValues);
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

    console.log("handleValidate", curErrors);
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

  useEffect(() => {
    if (validateOnMount) handleValidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
    handleValidate,
    errors,
    isValid,
  };
};

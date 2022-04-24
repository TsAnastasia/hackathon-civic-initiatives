import { useEffect } from "react";

export const useDocTitle = (title: string) => {
  useEffect(() => {
    const oldTitle = document.title;
    return () => {
      document.title = oldTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
};

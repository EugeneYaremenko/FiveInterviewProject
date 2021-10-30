import { toast, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (text: string, type: TypeOptions) =>
  toast(text, {
    type,
  });

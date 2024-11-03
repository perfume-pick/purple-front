import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
}

function Portal({ children }: Props) {
  const element =
    typeof window !== "undefined" && document.querySelector(`#portal`);

  return element && children ? ReactDOM.createPortal(children, element) : null;
}

export default Portal;

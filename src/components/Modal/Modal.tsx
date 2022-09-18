import React from "react";
import "./Modal.css";

interface Props {
  open: boolean;
  setOpen: (prevState: boolean) => void;
  children?: React.ReactNode;
  settings?: boolean;
}

const Modal: React.FC<Props> = ({open, setOpen, children, settings}) => {

  const closeModal = () => {
    setOpen(false);
  }

  return(
    <div className="modal">
      {open && <div className="backdrop" onClick={closeModal}/>}
      <dialog open={open} className={settings ? "settings" : ""} >
        {children}
      </dialog>
    </div>
  );
}

export default Modal;
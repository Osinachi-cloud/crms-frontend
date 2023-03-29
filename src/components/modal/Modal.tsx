import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};

const MODAL_STYLES: React.CSSProperties = {
  position: 'absolute',
  // marginTop: '70px',
  marginBottom: '70px',
  left: '78%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  zIndex: 1000,
  width: '40%',
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
};

const OVERLAY_STYLES: React.CSSProperties = {
  position: 'fixed',
  overflowY: 'hidden',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(86, 86, 86, 0.5)',
  zIndex: 1000,
};

const Modal : React.FC<ModalProps> = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="rounded-[20px]">
        <div className="flex justify-between items-center bg-[#e6ebff] rounded-t-[20px] h-[70px] w-full px-[20px]">
          <h1 className="font-bold">Request details</h1>
          <button onClick={onClose}>
            {/* <img src="https://static.thenounproject.com/png/887140-200.png" alt="" /> */}
            <i className="text-[1.5rem] fas fa-times"></i>
          </button>
        </div>
        <div className="h-fit p-[20px]">
          {/* <h4 className="text-center text-[10px]">AMOUNT SETTLED</h4> */}
          {children}
        </div>
      </div>
    </>,
    document.getElementById('portal')!,
  );
};

export default Modal;


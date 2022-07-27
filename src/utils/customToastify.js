import { toast } from 'react-toastify';


export const toastSuccessNotify = (msg) => {
    toast.success(msg, {
        position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
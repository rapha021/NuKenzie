import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const ToastSuccess = (msg) => toast.success(msg)

const ToastError = (msg) => toast.error(msg)

const ToastInfo = (msg) => toast.info(msg)

export { ToastSuccess, ToastError, ToastInfo }

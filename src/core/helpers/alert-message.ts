import Swal from "sweetalert2";

export default class AlertMessage {
  static alertWithTimer(msg: string | undefined, statusCode: number) {
    if (msg)
      Swal.fire({
        position: "top-end",
        icon: statusCode <= 204 ? "success" : "warning",
        title: msg,
        showConfirmButton: false,
        timer: 1500,
      });
  }
}

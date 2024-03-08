import Swal from "sweetalert2";

export const useMessage = () => {
  const successLogin = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Ingresado....",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorLogin = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "credenciales Invalidas",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const succeessRegister = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Registro usuario exitoso",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const errorRegister = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Corre electrónico ya esta registrado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return {
    successLogin,
    errorLogin,
    succeessRegister,
    errorRegister,
  };
};

//* React Router Dom
import { useNavigate } from "react-router-dom";

//* Hooks
import { useAuth, useMessage, useShow } from "../../hooks";

//* NextUI
import { Button, Image, Input, Link } from "@nextui-org/react";

//* React-Hook-Form
import { SubmitHandler, useForm } from "react-hook-form";

//* Interface and Icons
import { IUser } from "../../interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const { isShow, onToggleShow } = useShow();
  const { successLogin, errorLogin } = useMessage();
  const { user, login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = async (data) => {
    try {
      await login(data.email, data.password);
      if (user !== null) {
        successLogin();
        navigate("/home");
      } else {
        errorLogin();
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl border-1 border-gray-300 shadow-lg max-w-3xl">
        <section className="w-1/2 p-2 sm:block hidden">
          <Image
            isBlurred
            isZoomed
            width={900}
            src="https://i.ibb.co/zGS8dL2/login.jpg"
          />
        </section>
        <section className="sm:w-1/2 h-full p-4">
          <h2 className="text-3xl text-center font-bold text-purple-500 px-4 py-8 mb-10 capitalize">
            Welcome
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-center gap-10"
          >
            {/* Email */}
            <Input
              type="text"
              label="Correo electrónico"
              variant="bordered"
              color={!errors.email ? "secondary" : "danger"}
              isInvalid={!errors.email ? false : true}
              errorMessage={!errors.email ? "" : `${errors.email?.message}`}
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo electrónico es requerido",
                },
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "El formato del correo no es válido",
                },
              })}
            />

            {/* Password */}
            <Input
              type={isShow ? "text" : "password"}
              variant="bordered"
              label="Contraseña"
              color={!errors.password ? "secondary" : "danger"}
              isInvalid={!errors.password ? false : true}
              errorMessage={
                !errors.password ? "" : `${errors.password?.message}`
              }
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
              endContent={
                <button
                  className="focus:outline-none pb-1 text-2xl text-default-400"
                  type="button"
                  onClick={onToggleShow}
                >
                  {isShow ? <FaEye /> : <FaEyeSlash />}
                </button>
              }
            />
            <Button
              type="submit"
              className="capitalize text-lg"
              color="secondary"
            >
              sing in
            </Button>
          </form>
          <p className="pt-4 text-center text-lg">
            ¿No tienes cuenta?{" "}
            <Link className="text-lg font-semibold" href="/register">
              Registrate
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

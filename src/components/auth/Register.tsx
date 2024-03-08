//* React Router Dom
import { useNavigate } from "react-router-dom";

//* Hooks
import { useAuth, useMessage, useShow } from "../../hooks/";

//* NextUI
import { Button, Image, Input, Link } from "@nextui-org/react";

//* React-Hook-Form
import { SubmitHandler, useForm } from "react-hook-form";

//* Interface and Icons
import { IRegister } from "../../interfaces";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  const { isShow, isShowTwo, onToggleShow, onToggleShowTwo } = useShow();
  const { succeessRegister } = useMessage();
  const { singup } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegister>();

  const onSubmit: SubmitHandler<IRegister> = async (data) => {
    try {
      await singup(data.email, data.password);
      setTimeout(() => {
        succeessRegister();
        navigate("/home");
      }, 500);
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
            src="https://i.ibb.co/8Nvh3hM/register.jpg"
          />
        </section>
        <section className="sm:w-1/2 h-full p-4">
          <h2 className="text-3xl text-center font-bold text-purple-500 px-4 py-8 mb-4 capitalize">
            Welcome
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-center gap-8"
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
                pattern: {
                  value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,12}$/,
                  message:
                    "La contraseña debe tener  entre 8 y 12 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula",
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
            {/* Password Confirmation */}
            <Input
              type={isShowTwo ? "text" : "password"}
              variant="bordered"
              label="Contraseña"
              color={!errors.passwordTwo ? "secondary" : "danger"}
              isInvalid={!errors.passwordTwo ? false : true}
              errorMessage={
                !errors.passwordTwo ? "" : `${errors.passwordTwo?.message}`
              }
              {...register("passwordTwo", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
                validate: (value) =>
                  value === watch("password") || "Las contraseñas no coinciden",
              })}
              endContent={
                <button
                  className="focus:outline-none pb-1 text-2xl text-default-400"
                  type="button"
                  onClick={onToggleShowTwo}
                >
                  {isShowTwo ? <FaEye /> : <FaEyeSlash />}
                </button>
              }
            />
            {/* Submit button */}
            <Button
              type="submit"
              className="capitalize text-lg"
              color="secondary"
            >
              register
            </Button>
          </form>
          <p className="pt-4 text-center text-lg">
            ¿Ya tienes cuenta?{" "}
            <Link className="text-lg font-semibold" href="/login">
              Ingresar
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

import { Button, Image, Input } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../interfaces/user";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
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
            <Input
              type="email"
              variant="underlined"
              label="Email"
              color={!errors.email ? "secondary" : "danger"}
              isInvalid={!errors.email ? false : true}
              errorMessage={!errors.email ? "" : `${errors.email.message}`}
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
              })}
            />
            <Input
              type="password"
              variant="underlined"
              label="Password"
              color={!errors.password ? "secondary" : "danger"}
              isInvalid={!errors.password ? false : true}
              errorMessage={
                !errors.password ? "" : `${errors.password.message}`
              }
              fullWidth
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
              })}
            />
            <Button
              type="submit"
              className="capitalize text-lg"
              color="secondary"
            >
              sing in
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

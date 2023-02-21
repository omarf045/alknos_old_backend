import * as React from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import swal from "sweetalert2";

export default function Form() {
  const [formValue, setformValue] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const baseURL = "http://127.0.0.1:8000/api/v1.0/login";

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginFormData = new FormData();
    loginFormData.append("username", formValue.username);
    loginFormData.append("password", formValue.password);

    axios
      .post(baseURL, loginFormData)
      .then((response) => {
        console.log(response.data);

        const cookies = new Cookies();
        cookies.set("token", response.data.token, { path: "/" });

        window.location.href = 'http://localhost:3000/deteccion';
        //window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.response.data);

        new swal({
          title: "Error",
          icon: "error",
          text: JSON.stringify(error.response.data)
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll("{", "")
            .replaceAll("}", "")
            .replaceAll(",", "\n")
            .replaceAll('"', ""),
        });
      });
  };

  return (
    <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Bienvenido de vuelta!
          </h2>
        </div>
        <p className="text-sm font-medium text-gray-700">
          Bienvenido, por favor ingresa tus datos.
        </p>
        <div className="mt-8">
          <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre de usuario
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="mavri045"
                    value={formValue.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Password"
                    value={formValue.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <label
                    htmlFor="remember-me"
                    className="block ml-2 text-sm text-gray-900"
                  >
                    Recordarme
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Inicia Sesión
                </button>
              </div>

              <div className="flex items-center justify-center mt-8 text-gray-700">
                <p className="text-sm text-base font-medium">
                  ¿No tienes una cuenta?
                </p>

                <button
                  href="http://localhost:3000/registro"
                  className="ml-2 text-sm text-base font-medium text-green-500"
                >
                  Registrate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

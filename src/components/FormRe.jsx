import * as React from "react";
import axios from "axios";

import swal from "sweetalert2";

export default function FormRe() {
  const [formValue, setformValue] = React.useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const baseURL = "http://127.0.0.1:8000/api/v1.0/register";

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginFormData = new FormData();
    loginFormData.append("username", formValue.username);
    loginFormData.append("first_name", formValue.first_name);
    loginFormData.append("last_name", formValue.last_name);
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);
    loginFormData.append("password2", formValue.password2);

    axios
      .post(baseURL, loginFormData)
      .then((response) => {
        console.log(response.data);

        new swal({
          title: "Usuario registrado",
          icon: "success",
        }).then(() => {
          //window.location.reload(false);
          window.location.href = 'http://localhost:3000/login';
        });
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
            .replaceAll('"', "")                
            .replaceAll('username:A user with that username already exists.',"Ya existe un usuario con ese nombre"),
        });
      });
  };

  return (
    <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="w-full max-w-sm mx-auto lg:w-96">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Crea tu cuenta
          </h2>
        </div>
        <p className="text-sm font-medium text-gray-700">
          Bienvenido, porfavor ingresa tus datos.
        </p>
        <div className="mt-8">
          <div className="mt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
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
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Sebastian"
                    value={formValue.first_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellido
                </label>
                <div className="mt-1">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Mavridis"
                    value={formValue.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electronico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="mavridis.sebastian@gmail.com"
                    value={formValue.email}
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

              <div className="space-y-1">
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Corfirmar contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="Confirm password"
                    value={formValue.password2}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Registrarse
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="http://localhost:3000/login"
                    className="font-medium text-green-600 hover:text-green-500"
                  >
                    Iniciar Sesión
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
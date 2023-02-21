import React from "react";

import NavBar from "./Navbar";
import Footer from "./footer";

import axios from "axios";
import swal from "sweetalert2";

export default function Calculadora() {
  const [formValue, setformValue] = React.useState({
    reactive1: "",
    reactive2: "",
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append(
      "compounds",
      formValue.reactive1 + " + " + formValue.reactive2
    );

    axios
      .post("http://127.0.0.1:8000/api/v1.0/inorganic-reaction", formData)
      .then((response) => {
        console.log(response.data);
        let data = response.data;

        const showProducts = (dataToShow) => {
          new swal({
            title: "Productos",
            text: JSON.stringify(dataToShow[0])
              .replaceAll(",", "\n")
              .replaceAll("[", "")
              .replaceAll("]", "")
              .replaceAll("{", "")
              .replaceAll("}", "")
              .replaceAll('"', "")
              .replaceAll("properties:", "")
              .replaceAll("null", ""),
          }).then(() => {
            //then
            dataToShow.shift();
            if (dataToShow.length >= 1) {
              showProducts(dataToShow);
            }
          });
        };

        showProducts(data);

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
    <>
      {/*<NavBar />*/}

      <div className="hidden pt-8 sm:mb-8 sm:flex sm:justify-center">
        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          <span className="text-gray-600">
            Deteccion de compuestos / Renderizacion 3D.{" "}
            <a
              href="http://localhost:3000/deteccion"
              className="font-semibold text-indigo-600"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Ir <span aria-hidden="true">&rarr;</span>
            </a>
          </span>
        </div>    
      </div>

      <div className="w-full overflow-hidden bg-zinc-800">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-cyan-500 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Reakciones
            </h2>
            <p className="mt-5 text-xl text-gray-200">
              Bienvenido a nuestra calculadora de reacciones químicas
              inorganicas
            </p>
            <br />
            <br />
            <br />
            <table className="w-full text-end">
              <tr>
                <th>
                  <h2 className="text-3xl font-extrabold text-green-400 sm:text-3xl sm:tracking-tight lg:text-3xl">
                    Reaktivos
                  </h2>
                </th>
                <th>
                  <h2 className="text-3xl font-extrabold text-green-400 sm:text-3xl sm:tracking-tight lg:text-3xl">
                    Produktos
                  </h2>
                </th>
              </tr>
            </table>

            <form onSubmit={handleSubmit}>
              <table className="table-fixed">
                <tr>
                  <th>
                    <input
                      type="text"
                      name="reactive1"
                      id="reactive1"
                      className="block w-56 text-white bg-transparent border-0 border-b border-transparent focus:border-transparent focus:ring-0 sm:text-6xl"
                      placeholder="NaOH"
                      maxlength="6"
                      required
                      value={formValue.reactive1}
                      onChange={handleChange}
                    />
                  </th>
                  <th>
                    <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">
                      {" "}
                      +{" "}
                    </h2>
                  </th>
                  <th>
                    <input
                      type="text"
                      name="reactive2"
                      id="reactive2"
                      className="block w-56 text-white bg-transparent border-0 border-b border-transparent focus:border-transparent focus:ring-0 sm:text-6xl"
                      placeholder="HCl"
                      maxlength="6"
                      required
                      value={formValue.reactive2}
                      onChange={handleChange}
                    />
                  </th>
                  <th>
                    <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">
                      →
                    </h2>
                  </th>
                  {/*
                  <th>
                    <h2 className="text-5xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
                      Producto1
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">
                      +
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-5xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
                      Producto2
                    </h2>
                  </th>
                  */}
                </tr>
              </table>
              <br />
              <br />
              <br />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-xl font-medium text-white border border-transparent rounded-md shadow-sm bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Calcula
              </button>
            </form>
          </div>
          <div></div>
        </div>
        <div className="overflow-hidden"></div>
      </div>
      <div className="overflow-hidden bg-white h-36"></div>
      <Footer />
    </>
  );
}

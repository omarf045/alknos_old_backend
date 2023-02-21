import React, { useRef, useState} from "react";

import axios from "axios";

import swal from "sweetalert2";


export default function Deteccion() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [iupac_name, setIupacName] = useState("Nombre IUPAC");
  const[common_name,setCommonName]=useState("")


  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        //console.log(baseURL);
        resolve(baseURL);
      };
    });
  };

  const handleFile = (e) => {
    let file = e.target.files[0];

    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    // store the states in the form data

    getBase64(selectedFile).then((result) => {
      selectedFile["base64"] = result;

      const formData = new FormData();
      formData.append(
        "base64",
        result.replaceAll("data:image/png;base64,", "")
      );


      axios
        .post("http://127.0.0.1:8000/api/v1.0/chem-detection", formData)
        .then((response) => {
          console.log(response.data);
          setIupacName(response.data.iupac_name);
          setCommonName(Object.values(response.data.possible_common_name));
          console.log(common_name);
        })
        .catch((error) => {
          if (error.response.data != null) {
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
          } else {
            new swal({
              title: "Error",
              icon: "error",
              text: "Hubo un error inesperado",
            });
          }
        });
    });
  };


  
  const handleSubmit2 = async () => {
    // store the states in the form data

      const formData = new FormData();
      formData.append( "base64", "")

      axios
        .get("http://127.0.0.1:8000/api/v1.0/chem-detection", formData)
        .then((response) => {
          console.log(response.data);
          

        })
        .catch((error) => {
          if (error.response.data != null) {
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
          } else {
            new swal({
              title: "Error",
              icon: "error",
              text: "Hubo un error inesperado",
            });
          }
        });
  };

  /*
  const handleSubmit = (e) => {
    console.log("PASOOOO");
    const formData = new FormData();
    formData.append("file", selectedFile);
    const cookies = new Cookies();
    console.log(cookies.get("token"))
    axios
      .get(baseURL, formData,{
        headers: {
          'Authorization': `Token ${cookies.get("token")}`
        },
      })
      .then((response) => {
        console.log(response.data.iupac_name);
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data != null) {
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
        } else {
          new swal({
            title: "Error",
            icon: "error",
            text: "Hubo un error inesperado",
          });
        }
      });
  };*/
 
  return (
    <div className="bg-white isolate">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="max-w-3xl pt-16 pb-32 mx-auto sm:pt-20 sm:pb-40">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Deteccion de compuestos / Renderizacion 3D
                </h1>
                {
                  <p className="mt-6 text-xl leading-8 text-gray-600 sm:text-center">
                    {iupac_name}
                  </p>
                }
                  {
                  <p className="mt-6 text-xl leading-8 text-gray-600 sm:text-center">

{Object.values(common_name).map((item , key) =>
  <p key={key}>{item}</p>
)}

                    {console.log(common_name)}
                    
                  </p>
                }
               
                <div className="flex mt-8 gap-x-4 sm:justify-center">
                  <input type="file" onChange={(e) => handleFile(e)} />

                  <button
                    onClick={(e) => handleSubmit(e)}
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Iniciar
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>

              <div className="hidden pt-8 sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Calculadora de reacciones inorganicas.{" "}
                    <a
                      href="http://localhost:3000/calculadora"
                      className="font-semibold text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Ir <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>

              <div className="flex mt-8 gap-x-4 sm:justify-center">
                <a
                  href="C:/Users/Omar Pulido/Desktop/3moltest/3d.html"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Ver en 3D
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>

                <button
                    onClick={(e) => handleSubmit2(e)}
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Iniciar
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
              </div>


              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {
                /*
              <div>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
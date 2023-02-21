import FormRe from "./components/FormRe";

function Registro() {
  return (
    <div className="flex w-full bg-white h-screen">
    <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormRe/>
    </div>
    <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-grey-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-green-400 to-green-900 rounded-full animate-spin"/>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"/>
    </div>
    </div>
  );
}

export default Registro;

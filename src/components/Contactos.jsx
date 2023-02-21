import styles from "../style";
import { Contacto, discount, robot } from "../assets";

const Contactos = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Necesitas <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Contactarnos?</span>{" "}
          </h1>
        </div>
        <br></br>
        <h1 className="font-poppins font-semibold ss:text-[40px] text-[52px] text-white ss:leading-[40.8px] leading-[75px] w-full">
        Hazlo si presentas un problema o necesitas contactarnos por cualquier asunto.
        </h1>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="font-poppins font-semibold ss:text-[40px] text-[52px] text-white ss:leading-[50.8px] leading-[75px] w-full">
        <span className="text-gradient">Contacto</span>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Para esto, envíanos un correo electrónico a la siguiente dirección:
        </p>
        <br></br>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <u><span className="text-gradient">alknoselet@gmail.com</span></u>
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={Contacto} alt="billing" className="w-[90%] h-[80%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient" />
        {/* gradient end */}
      </div>

      
    </section>
  )
}

export default Contactos;
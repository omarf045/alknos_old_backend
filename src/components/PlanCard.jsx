import * as React from 'react';



export default function PlanCard({
    name, 
    description, 
    price, 
    features, 
    color, 
    btnText = 'Start Trial',
}) 
{
    return(
        <div style={{ backgroundColor: color}} 
        className="flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8"
        >
            <h2 className="mb-5 text-xl font-medium">{name}</h2>
            <div className="mb-5 flex items-end text-6lx fotn-black">
                {price ? (
                    <>
                        <div>${price}</div>
                    </>
                ) : (
                    'Gratis'
                )}
            </div>
            <p className="mb-5">{description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">
                {features.map((feature) => (
                    <li className="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#2BC469"/>
                            <g clip-path="url(#clip0_30_173)">
                            <path d="M10.2288 15.6095C9.94497 15.6096 9.67274 15.4968 9.47219 15.2959L7.18461 13.0091C6.93846 12.7629 6.93846 12.3638 7.18461 12.1176C7.43083 11.8714 7.82996 11.8714 8.07618 12.1176L10.2288 14.2702L15.9238 8.57523C16.17 8.32909 16.5692 8.32909 16.8154 8.57523C17.0615 8.82146 17.0615 9.22058 16.8154 9.46681L10.9855 15.2959C10.7849 15.4968 10.5127 15.6096 10.2288 15.6095Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_30_173">
                            <rect width="10" height="10" fill="white" transform="translate(7 7)"/>
                            </clipPath>
                            </defs>
                            </svg>
                        { feature}
                    </li>
                ))}
            </ul>
            <button className="mt-auto rounded-xl bg-black py-3 px-6 text-lg font-medium text-white ">
                {btnText}
            </button>
        </div>
    )     
}
'use client'
import Image from "next/image";
import { useUser } from "../context/useUser";

export default function DashBoard() {
    const {usersData} = useUser();
    console.log(usersData);
    
    return (
        // Dashboard component
        <div className="flex h-screen">

            <div className="flex flex-col flex-grow">
                {/* Contenido de la página */}
                <div className="flex flex-wrap p-14 justify-center m-20">
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Riesgo Inherente</h2>
                        <Image src="/inherente.png" alt="" width={400} height={100} /> 
                    </div>
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Riesgo Inherente Vs Riesgo Residual</h2>
                        <Image src="/inherentevsresidual.png" alt="" width={400} height={100} /> 
                    </div>
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Tratamiento del Riesgo</h2>
                        <Image src="/riesgo.png" alt="" width={400} height={100} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState } from "react";
import { postOcrRequest } from '../api/hooks/index';
import { BsFiletypeCsv, BsFileZipFill } from "react-icons/bs";

export const InicioTemplate = () => {
    const [arquivo, setArquivo] = useState("");

    return (

        
        <div className="border-4 border-indigo-500/50">
            <div>
                <h1>PÁGINA DE CONVERSÃO PRONTUÁRIOS MÉDICOS</h1>
            </div>
        <div className="font-bold">
        Insira o arquivo <span><BsFileZipFill />
        </span>
            <br/>
            <br/>

            <input 
                placeholder="Adicione Aqui o arquivo"
                value={arquivo} 
                onChange={(e) => setArquivo(e.target.value)}
            />
            <button onClick={() => {
                postOcrRequest({arquivo})
            }}>Editar</button>
        </div>

        <br/>

        <div>
            <div className="ms-2 font-bold">
            Arquivo Pronto <span><BsFiletypeCsv /></span>
            </div>
        </div>
        </div>
    );
};

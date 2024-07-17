import React, { useState } from "react";
import { postOcrRequest } from '../api/hooks/index';

export const InicioTemplate = () => {
    const [arquivo, setArquivo] = useState("");

    return (
        <div className="font-bold">
            <h1>Insira o arquivo</h1>
            <input 
                placeholder="Adicione Aqui o arquivo"
                value={arquivo} 
                onChange={(e) => setArquivo(e.target.value)}
            />
            <button onClick={() => {
                postOcrRequest({arquivo})
            }}>Editar</button>
        </div>
    );
};

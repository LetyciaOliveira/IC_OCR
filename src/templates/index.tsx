import React, { useState } from "react";
import { BsFiletypeCsv, BsFileZipFill } from "react-icons/bs";
import Head from 'next/head';
import Tesseract from 'tesseract.js';
import { CSVLink} from "react-csv";
import {Card} from 'react-bootstrap-card';


export const InicioTemplate = () => {
    const [texts, setTexts] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [variavel, setVariavel] = useState('')

    const upload = async (event) => {
      const files = event.target.files;
      const extractedTexts = [];
  
      if (!files.length) {
        setErrorMsg("Erro: Nenhum arquivo selecionado!");
        return;
      }
  
      setErrorMsg('');
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const { data } = await Tesseract.recognize(file, 'por');
        extractedTexts.push(data.text);
      }
  
      setTexts(extractedTexts);
    };
  
    const processDataForCSV = () => {
      const processedData = [];
  
      texts.forEach((text, index) => {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        if (lines.length > 0) {
          const id = index + 1;
          let NOME_DO_PACIENTE = '';
  
          lines.forEach(line => {
            if (line.includes(variavel)) {
              const startIndex = line.indexOf(variavel) + variavel.length;
              NOME_DO_PACIENTE = line.substring(startIndex).trim();
            }
          });
  
          if (NOME_DO_PACIENTE) {
            processedData.push({ id, NOME_DO_PACIENTE });
          }
        }
      });
  
      return processedData;
    };
  
    const csvData = processDataForCSV();
  
    return (
      <Card>
        <div className="border-4 grid grid-cols-2 gap-4 p-4 bg-neutral-600">
          <Head>
            <title>Conversão</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="font-bold">
            <div className="font-bold">
              PÁGINA DE CONVERSÃO PRONTUÁRIOS
            </div>
            <p><BsFileZipFill /> Insira o(s) arquivo(s)</p>
            <input type="file" onChange={upload} multiple />
            {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          </div>
          <div className="font-bold">
            <div className="font-bold">
              Insira o que deseja salvar no arquivo
            </div>
            <input type="text" onChange={(e => setVariavel(e.target.value))}/>
          </div>
          <div>
            <div className="ms-2 font-bold">
              <p><BsFiletypeCsv /> Texto extraído das imagens:</p>
              {texts.map((text, index) => (
                <pre key={index}>{text}</pre>
              ))}
              {texts.length > 0 && (
                <CSVLink data={csvData} filename="Dados_pacientes.csv">
                  Baixar Dados
                </CSVLink>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  };
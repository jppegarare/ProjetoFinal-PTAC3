'use client'
import Image from  "next/image"
import Link from "next/link";
import styles from "./componentes.module.css"
import PaginaErro from "./PaginaErro";
import Loading from "./Loading";
import { useEffect, useState } from "react";

export default function Main() {
    const [listaFilme, setListaFilme] = useState([]);
    const [listaCompleta, setListaCompleta] = useState([]);
    const [pesquisa, setPesquisa] = useState("");
    const [erro, setErro] = useState(false);

    useEffect(() => {
        
        const getFilme = async() =>{
            try{
               const response = await fetch("http://localhost:3000/api");
               const data = await response.json();
               setListaFilme(data)
               setListaCompleta(data)  
        }
            catch{
              setErro(true)
            }
        }
        getFilme()
    },
        [])

        const search = (text) => {
            setPesquisa(text)

            if(text.trim() == ""){
                setListaFilme(listaCompleta)
                return
            }
            const novaLista = listaFilme.filter((filme) =>
                filme.titulo.toUpperCase().trim().includes(pesquisa.toUpperCase())
            )
            setListaFilme(novaLista)
        }

        if(erro == true){
            return <PaginaErro/>
        }
        if(listaCompleta[0] == null){
            return(
                <main classname={styles.main}>
                    <Loading/>
                </main>
            )
        }

    return (
    <>
      <div className={styles.divPesq}>
        <input className={styles.pesquisa} type="text" value={pesquisa} placeholder="Pesquisar Filme" 
         onChange={(event) => search(event.target.value) }/>
      </div>
      <br/>
      <main className={styles.main}>
        {listaFilme.map((movies) =>
            <div className={styles.card}>
                <Image
                width={250}
                height={280}
                src={movies.imagem}
                />
                <h3 className={styles.cardtitle}>
                 {movies.titulo}
                </h3>
                <p className={styles.carddirector}>
                 Diretor: {movies.diretor}
                </p>
                <p className={styles.cardreleaseyear}>
                 Lançamento: {movies.anoEstreia}
                </p>
                <p className={styles.cardgenre}>
                 Gênero: {movies.genero}
                </p>
                <Link href={"/filme/" + movies.id}>
                  <button>Ver Mais</button>
                </Link>

            </div>
        )}
      </main>
      </>
    );
  }
  
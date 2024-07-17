import Image from  "next/image"
import Link from "next/link";
import styles from "./componentes.module.css"

export default async function Main() {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();

    return (
      <main className={styles.main}>
        {data.map((movies) =>
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

            </div>
        )}
      </main>
    );
  }
  
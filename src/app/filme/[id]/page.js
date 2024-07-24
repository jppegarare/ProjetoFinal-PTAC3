import Image from "next/image"
import styles from "./filme.module.css";

export default async function Filme({ params }) {
    const response = await fetch("http://localhost:3000/api/" + params.id, { next:{revalidate:1}})
    const data = await response.json()
    return (
        <div className={styles.filme}> 
            <p className={styles.filmetitulo}>
                {data.titulo}
            </p>
            <p>
                {data.genero} | {data.diretor} | {data.anoEstreia}
            </p>
            <Image
                width={300}
                height={300}
                src={data.imagem}
            />


            <p className={styles.filmesinopse}>
                {data.sinopse}
            </p>
        </div>

    )
}
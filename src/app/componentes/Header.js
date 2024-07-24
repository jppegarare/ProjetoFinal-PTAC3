import Image from 'next/image'
import styles from "./componentes.module.css"
export default async function Header() {
    return (
        <header className={styles.header}> 
            <Image width={60} height={60} src={'/logo.png'}/>
            <p>
                <span className={styles.span1}>Net</span>
                <span className={styles.span2}>Prime</span>
            </p>
            <Image width={60} height={60} src={'/profile.png'}/>
        </header>
    );
  }
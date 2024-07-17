
import Image from 'next/image'
import styles from "./componentes.module.css"

export default async function Footer() {
    return (
        
        <footer className={styles.footer}>
            
           <ul>
                <li>NetPrimeBR</li>
                <li>|</li>
                <li>@netprimeBR</li>
                <li>|</li>
                <li>netprime@emovies.com</li>
            </ul>    
            <p>© 2024 NetPrime.com</p>
        </footer>
    );
  }
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Animations & More</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Transitions and Animations</h1>
      <br/>
      <h2>Button Transition</h2>
      
      <div className={styles.buttonsDiv}>
        <button className={styles.button}>Change Width & Color on Hover</button>
        <button className={styles.buttonTwo}>Scale Up</button>
      </div>
  
      <br/>
  
      <div className={styles.containerTwo}>
        <h2>Effects:</h2>
        <p>Hover on boxes to see them moving</p>
        <div id="ease" className={styles.move}>ease</div> 
        <div id="linear" className={styles.move}>linear</div> 
        <div id="ease-in" className={styles.move}>ease in</div>
        <div id="ease-in-out"className={styles.move}>ease in out</div>
        <div id="ease-out" className={styles.move}>ease out</div>
      </div>
    </div>
  )
}

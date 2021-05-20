import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>30 de fevereiro de 2021</time>
            
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis laborum fugiat ut, dolor possimus dolore dolores dolorum,
              eius inventore exercitationem reiciendis, eaque quaerat quasi natus
              autem. Rerum voluptas eligendi placeat.
            </p>
          </a>

          <a href="#">
            <time>30 de fevereiro de 2021</time>
            
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis laborum fugiat ut, dolor possimus dolore dolores dolorum,
              eius inventore exercitationem reiciendis, eaque quaerat quasi natus
              autem. Rerum voluptas eligendi placeat.
            </p>
          </a>

          <a href="#">
            <time>30 de fevereiro de 2021</time>
            
            <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</strong>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis laborum fugiat ut, dolor possimus dolore dolores dolorum,
              eius inventore exercitationem reiciendis, eaque quaerat quasi natus
              autem. Rerum voluptas eligendi placeat.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
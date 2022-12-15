import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/header'

import styles from '../styles/Home.module.css'

export default function Home() {
  const { t } = useTranslation(["dashboard", "common"])

  const description = t("metaDescription", {
    ns: "common"
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("title", {
          ns: "common"
        })}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t("title.plain")} <a href="https://nextjs.org">{t("title.link")}</a>
        </h1>

        <p className={styles.description}>
        {t("description.plain")}{' '}
          <code className={styles.code}>{t("description.code")}</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>{t("links.link1.title")} &rarr;</h2>
            <p>{t("links.link1.description")}</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>{t("links.link2.title")} &rarr;</h2>
            <p>{t("links.link2.description")}</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>{t("links.link3.title")} &rarr;</h2>
            <p>{t("links.link3.description")}</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>{t("links.link4.title")} &rarr;</h2>
            <p>{t("links.link4.description")}</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer", {
            ns: "common"
          })}{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

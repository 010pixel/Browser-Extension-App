import Head from 'next/head'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import exntensions from '@/shared/data'
import { BrowserExtension } from '@/common/interface'
import { GetServerSideProps } from 'next'
import { extensionActions, EXTENSION_ACTIONS } from '@/common/constants'

const inter = Inter({ subsets: ['latin'] })

function ItemPage() {

  return (
    <>
      <main className={styles.main}>
        redirecting...
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params, query}) => {
  const {page, version } = query as any;
  const slug = (params as any).currentSlug;
  const action = page ? `install` : version ? `update` : ``;

  return {
    redirect: {
      destination: `/item/${slug}/${action}/?version=${version}`,
      permanent: false,
    },
  }

  return {
    props: {
    }
  }
}

export default ItemPage;
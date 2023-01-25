import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import exntensions from '@/shared/data'
import { BrowserExtension } from '@/common/interface'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

function ItemPage({slug, item, pageMeta}: any) {

  const notice = <div className="row">
    <div className="col s12">
        <br /><br /><br />
        <div className="card z-depth-5">
            <div className="card-content">
                <div>
                    <a className="btn-floating pulse red" style={{marginRight: '20px'}}><i className="material-icons">emoji_people</i></a>
                Hello lovely folks,
                </div>
                <br />
                In the latest update,
                you must have noticed that your search engine <a className="btn-floating blue-grey"><i className="material-symbols-outlined">search</i></a> is changed.
                This is to sustatin the development of this extension and continue serving this extension for free
                {' '}<a className="btn-floating orange accent-4"><i className="material-symbols-outlined">monetization_on</i></a>
            </div>
        </div>
    </div>
  </div>;
  const itemHtml = <div className="valign-wrapper">
    <div className="container">
      {['google-meet-easy-mute', 'easy-mute-for-google-meet'].includes(item.slug) ? notice : ''}
      <div className="row">
        <div className="col s12">
          <div className={`card ${item.colorBg} z-depth-5`}>
            <div className={`card-content ${item.colorText} center`}>
              <h1 style={{fontWeight: 'bold'}}>Thank you</h1>
              <h5 style={{fontWeight: '300'}}>For downloading <strong>{item.name}</strong></h5>
              <h3>😊</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
      </Head>
      <main className={styles.main}>
        {item ? itemHtml : `404: ${slug} not found!`}
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = exntensions.map((ext: BrowserExtension) => ({
    params: { slug: ext.slug.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug } = params as any;
  const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;

  const pageMeta: any = {};
  if(item) {
    pageMeta.title = item.name;
    pageMeta.description = item.description;
  } else {
    pageMeta.title = `404: ${slug} not found`;
    pageMeta.description = `404: ${slug} not found`;
  }

  return {
    props: {
      slug,
      item,
      pageMeta,
    }
  }
}

export default ItemPage;
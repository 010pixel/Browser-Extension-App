import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import exntensions from '@/shared/data'
import { BrowserExtension } from '@/common/interface'
import { extensionActions, EXTENSION_ACTIONS, GAEventsByAction } from '@/common/constants'
import { GetStaticProps } from 'next'
import { trackPurchase } from '@/common/utils'

const inter = Inter({ subsets: ['latin'] })

function ActionPage({slug, action, item, actionName, pageMeta, analyticsEventActions}: any) {
  const { query } = useRouter();
  const installMsg = <>
    <h1 style={{fontWeight: 'bold'}}>Thank you</h1>
    <h5 style={{fontWeight: '300'}}>For downloading <strong>{item.name}</strong></h5>
    <h3>😊</h3>
  </>;
  const updateMsg = <>
    <h1 style={{fontWeight: 'bold'}}>Thank you</h1>
    <h5 style={{fontWeight: '300'}}><strong>{item.name}</strong> has been updated to {query.version}</h5>
    <h3>😊</h3>
  </>;
  const uninstallMsg = <>
    <h1 style={{fontWeight: 'bold'}}>So sad</h1>
    <h5 style={{fontWeight: '300'}}>to see you go</h5>
    <h3>😢</h3>
  </>;
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
                {' '}
                <a className="btn-floating orange accent-4"><i className="material-symbols-outlined">monetization_on</i></a>
            </div>
        </div>
    </div>
  </div>;
  const itemHtml = <div className="valign-wrapper">
    <div className="container">
      {['google-meet-easy-mute', 'easy-mute-for-google-meet'].includes(item.slug) ? notice : ''}
      {item?.logo && <div className='center-align'><Image src={item.logo} alt={item.name} width={64} height={64} /></div>}
      <div className="row">
        <div className="col s12">
          <div className={`card ${item.colorBg} z-depth-5`}>
            <div className={`card-content ${item.colorText} center`}>
              <h1 style={{fontWeight: 'bold'}}>Thank you</h1>
              <h5 style={{fontWeight: '300'}}>For downloading <strong><a href={item.links?.[0]?.url} target="_blank" rel="noreferrer">{item.name}</a></strong></h5>
              <h3>😊</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

  useEffect(() => {
    if(item) {
      trackPurchase({
        appName: item.name,
        item_id: item.slug,
        version: query.version,
        analyticsEventActions
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
      </Head>
      <main className={styles.main}>

        {item ? actionName ? itemHtml : `404: ${action} not found!` : `404: ${slug} not found!`}
        
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = exntensions.reduce((acc: any[], ext: BrowserExtension) => {
    const pths = ['install', 'update', 'uninstall'].map((action: string) => {
      return {params: { slug: ext.slug.toString(),  action: action.toString() }};
    });
    return [
      ...acc,
      ...pths
    ]
  }, [])
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug, action } = params as any;
  const item = exntensions.find((e: BrowserExtension) => e.slug === slug) || null;
  const actionName = extensionActions[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;
  const analyticsEventActions = GAEventsByAction[(action as string)?.toUpperCase() as EXTENSION_ACTIONS] || null;
  const pageMeta: any = {};

  if(item && actionName) {
    pageMeta.title = `${item.name}: ${actionName}`;
    pageMeta.description = item.description;
  } else if (!item) {
    // return {
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //   },
    // }
  } else if (!actionName) {
    return {
      redirect: {
        destination: `../${slug}`,
        permanent: false,
      },
    }
  }

  return {
    props: {
      slug,
      action,
      item,
      actionName,
      pageMeta,
      analyticsEventActions,
    }
  }
}

export default ActionPage;
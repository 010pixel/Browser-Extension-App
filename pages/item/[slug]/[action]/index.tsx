import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import exntensions from '@/shared/data'
import { BrowserExtension } from '@/common/interface'
import { extensionActions, EXTENSION_ACTIONS, GAEventsByAction } from '@/common/constants'
import { GetServerSideProps } from 'next'
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
      <div className="row">
        <div className="col s12">
          <div className={`card ${item.colorBg} z-depth-5`}>
            <div className={`card-content ${item.colorText} center`}>
              {
                action === 'install'
                  ? installMsg
                  : action === 'update'
                    ? updateMsg
                    : uninstallMsg
              }
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
  }, []);

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
      </Head>
      <main className={styles.main}>

        {item ? actionName ? itemHtml : `404: ${action} not found` : `404: ${slug} not found`}
        
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
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
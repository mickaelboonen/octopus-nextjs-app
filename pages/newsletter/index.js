import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from './news.module.scss';

export default function Newsletter() {
  const {
    newsletter,
  } = styles;
  // const { state } = useAppStatecontext()
  // console.log(state);
  return (
    <Layout>
      <Head>
        <title>S'abonner à la Newsletter</title>
      </Head>
      <div className={newsletter}>
        Hello {/* {data} */}
      </div>
    </Layout>
  )
}
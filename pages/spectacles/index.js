import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';


// Components
import Layout from '../../components/layout'
import PageTitle from '../../components/page_title';
import lavender from '../../public/images/random/lavender.jpg'

// Actions
import { fetchPlays, setWantedPlay } from '../../app/reducer/play';

import styles from './spectacle.module.scss';

export default function Spectacles() {
  // State
  const { isLoading, plays} = useSelector((state) => state.play);

  // Dispatch to be used when we need to dispatch the actions
  const dispatch = useDispatch();

  // Styles
  const {
    spectacles,
    spectacles__pictures,
    spectacles__pictures__container,
    spectacles__pictures__container__name,
  } = styles;
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchPlays());
  }, [])

  const handleClick = (event) => {
    dispatch(setWantedPlay(event.currentTarget.id));
    router.push(`/spectacles/${event.currentTarget.id}`);
  }

  return (
    <Layout>
      <Head>
        <title>Les Spectacles</title>
      </Head>
      <div className={spectacles}>
        <PageTitle>
          Spectacles
        </PageTitle>
        <div className={spectacles__pictures}>
          {plays.map((spec) => (
            // <Link href={`/spectacles/${spec.name}`}>
            //   <a>
                <div onClick={handleClick} className={spectacles__pictures__container} id={spec.name} style={{'backgroundImage': `url(${lavender.src})`}}>
                  <div className={spectacles__pictures__container__name}>
                    {spec.name}
                  </div>
                </div>
            //   </a>
            // </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from './news.module.scss';
import PageTitle from '../../components/page_title';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Newsletter() {
  const {
    newsletter,
    newsletter__form,
    newsletter__form__input,
    newsletter__form__button,
    newsletter__disclaimer,
    newsletter__error,
  } = styles;
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Layout>
      <Head>
        <title>S'abonner à la Newsletter</title>
      </Head>
      <PageTitle>
        Newsletter
      </PageTitle>
      <div className={newsletter}>
        <p className={newsletter__disclaimer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus molestias quasi unde repellendus voluptatem nesciunt odio perferendis, facilis quam corrupti debitis praesentium? </p>
        <form className={newsletter__form} onSubmit={handleSubmit(onSubmit)}>
          <input
            id="email"
            placeholder="Email"
            className={newsletter__form__input}
            {...register('email', {
              required: "Il nous faut un email ici.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "L'adresse e-mail indiquée n'est pas valide.",
              },
            })}
          />
          <button className={newsletter__form__button} type="submit">S'abonner à la Newsletter</button>
        </form>
        {errors.email && <p className={newsletter__error}>{errors.email.message}</p>}
      </div>
    </Layout>
  )
}
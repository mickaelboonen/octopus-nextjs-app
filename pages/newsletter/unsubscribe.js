import Head from 'next/head'
import Layout from '../../components/layout'
import styles from './news.module.scss';
import PageTitle from '../../components/page_title';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';

// Import Actions
import { getId } from '../../app/reducer/app';
import NewsletterResponse from '../../components/NewsletterResponse';

export default function Newsletter() {
  const {
    errorMessage,
    successMessage
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
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

  // On submit of the form, fetches the id of the given email
  // If there's a match, it will delete the email from the database
  const onSubmit = (data) => {
    dispatch(getId(data));
  };
  return (
    <Layout>
      <Head>
        <title>Se désinscrire de la Newsletter</title>
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
          <button className={newsletter__form__button} type="submit">Se désabonner de la Newsletter</button>
        </form>
        {errors.email && <p className={newsletter__error}>{errors.email.message}</p>}
      </div>
      {(errorMessage !== '' || successMessage !== '') && (
        <NewsletterResponse success={successMessage} error={errorMessage} />
      )}
    </Layout>
  )
}
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import Layout from '../../components/layout';
import PageTitle from '../../components/page_title';
import NewsletterResponse from '../../components/NewsletterResponse';

// Import Styles
import styles from './news.module.scss';

// Import Actions
import { registerEmail, unsubscribe } from '../../app/reducer/app';

export default function Newsletter() {

  // State variables
  const {
    errorMessage,
    successMessage
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // Styles classnames
  const {
    newsletter,
    newsletter__form,
    newsletter__form__input,
    newsletter__form__button,
    newsletter__disclaimer,
    newsletter__error,
    newsletter__unsubscribe,
  } = styles;

  // React Hook Form variables
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  // On form submit, registers the email into the database
  const onSubmit = (data) => {
    dispatch(registerEmail(data));
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
              required: "Merci de renseigner un email valide.",
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
      {(errorMessage !== '' || successMessage !== '') && (
        <NewsletterResponse success={successMessage} error={errorMessage} />
      )}
      <div className={newsletter__unsubscribe}>
        <Link href="/newsletter/unsubscribe">
          <a>
            Se désabonner de la newsletter
          </a>
        </Link>
      </div>
    </Layout>
  )
}
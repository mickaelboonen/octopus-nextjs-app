import Head from 'next/head';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import Layout from '../../components/layout';
import PageTitle from '../../components/page_title';

// Import Styles
import styles from './contact.module.scss';

// Import Actions
import { createTicket } from '../../app/reducer/contact';
import classes from '../../utils/classnames';
import Input from '../../components/Form/input';
import Textarea from '../../components/Form/textarea';

export default function Galerie() {

  // State variables
  const {
    fields,
    textareaSettings,
    responseMessage,
    responseClass,
  } = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  // Styles classnames
  const {
    contact,
    contact__form__button
  } = styles;

  // React Hook Form variables
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm();

  // On form submit, 
  const onSubmit = (data) => {
    dispatch(createTicket(data));
  };
  
  return (
    <Layout>
      <Head>
        <title>Galerie des Pieuvres</title>
      </Head>
      <PageTitle>
        Nous Contacter
      </PageTitle>
      <div className={contact}>
        <form className={classes(styles, 'contact__form')} onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => <Input error={errors} key={field.name} register={register} {...field} error={errors} />)}
          <Textarea register={register} {...textareaSettings}  error={errors} />
          <button className={contact__form__button} type="submit">Envoyer la demande</button>
        </form>
        {responseMessage !== '' && (
          <div className={classes(styles, `contact__response ${responseClass}`)}>{responseMessage}</div>
        )}
      </div>
    </Layout>
  )
}
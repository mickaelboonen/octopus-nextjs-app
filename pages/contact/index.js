import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import Layout from '../../components/layout';
import PageTitle from '../../components/page_title';

// Import Styles
import styles from './contact.module.scss';
import formStyles from '../../components/Form/form.module.scss';

// Import Actions
import { registerEmail, unsubscribe } from '../../app/reducer/app';
import classes from '../../utils/classnames';
import Input from '../../components/Form/input';
import Textarea from '../../components/Form/textarea';

export default function Galerie() {

  // State variables
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();

  // Styles classnames
  const {
    contact,
    contact__form__button
  } = styles;
  
  const fields = [
    {
      name: 'name',
      type: "name",
      label: "Votre Identité :",
      placeholder: "Votre idendité",
      required: {
        required: "Merci de renseigner votre identité."
      },
      constraint: {
        min: 3,
      },
      classname: '',
    },
    {
      name: 'email',
      type: "email",
      label: "Votre Email :",
      placeholder: "Votre email",
      required: {
        required: "Merci de renseigner un email valide."
      },
      constraint: {
        min: 3,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        }, 
      },
      classname: '',
    },
    {
      name: 'subject',
      type: "text",
      label: "Sujet de la demande :",
      placeholder: "Sujet de la demande",
      required: {
        required: "Merci de renseigner le sujet de la demande."
      },
      constraint: {
        min: 3,
      },
      classname: '',
    },
  ];
  const textareaSettings = {
    name: 'ticket',
    label: "Votre Demande :",
    placeholder: "Votre Demande",
    required: {
      required: "Vous n'avez pas formulé votre demande."
    },
    constraint: {
      min: 1,
      rows: 5,
    },
    classname: '',
  };


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
          <button className={contact__form__button} type="submit">S'abonner à la Newsletter</button>
        </form>
      </div>
    </Layout>
  )
}
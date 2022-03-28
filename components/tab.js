import styles from '../pages/galerie/galerie.module.scss';

export default function Tab({ name, id, tabFunction }) {
    const { tab } = styles;
    const handleClick = (event) => {
      tabFunction(event.target.textContent)
    }
    console.log(id);
  return (
    <div className={tab} onClick={handleClick} id={`${id}-tab`}>
        <span>{name}</span>
    </div>
  )
}
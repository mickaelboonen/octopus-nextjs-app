import styles from '../pages/collectif/collectif.module.scss';

export default function TeamMember({ member }) {
    const { 
        teamMemberContainer,
        teamMemberContainer__image,
        teamMemberContainer__name,
        teamMemberContainer__pronouns,
        teamMemberContainer__role,
        teamMemberContainer__description,
      } = styles;
    const { 
      name,
      picture,
      role,
      pronouns,
      description
    } = member;

  return (
    <div className={teamMemberContainer}>
        <img className={teamMemberContainer__image} src={picture.src} alt={`Portrait de ${name}`} />
        <p className={teamMemberContainer__name}>{name}</p>
        <p className={teamMemberContainer__pronouns}>{pronouns}</p>
        <p className={teamMemberContainer__role}>{role}</p>
        <p className={teamMemberContainer__description}>{description}</p>
    </div>
  )
}
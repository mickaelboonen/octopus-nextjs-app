import compStyles from './_member.module.scss';

export default function TeamMember({ name, pronouns, id, image, theaterRoles,  handler }) {
  const { 
    teammember,
    teammember__info,
    } = compStyles;
  return (
    <div className={teammember} style={{'backgroundImage': `url(${image}`}} onClick={handler} id={id}>
      <div className={teammember__info}>
        <span>{name}</span>
        <span>{pronouns}</span>
        <span>{theaterRoles.map((role) => role + ', ')}</span>
      </div>
    </div>
  )
}
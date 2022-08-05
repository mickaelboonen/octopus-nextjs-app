import lavender from '../public/images/photos/bnw1.jpg';
import compStyles from './layout.module.scss';

export default function TeamMember({ name, pronouns, id, theaterRoles,  handler }) {
  const { 
    teammember,
    teammember__info,
    } = compStyles;
    
  return (
    <div className={teammember} style={{'backgroundImage': `url(${lavender.src})`}} onClick={handler} id={id}>
      <div className={teammember__info}>
        <span>{name}</span>
        <span>{pronouns}</span>
        <span>{theaterRoles.map((role) => role + ', ')}</span>
      </div>
    </div>
  )
}
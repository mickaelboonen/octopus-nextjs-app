import alice from '../../public/images/portraits/alice.jpg';
import cobi from '../../public/images/portraits/cobi.jpg';
import fanny from '../../public/images/portraits/fanny.jpg';
import gnousse from '../../public/images/portraits/gnousse.jpg';
import jeanni from '../../public/images/portraits/jeanni.jpg';
import margax from '../../public/images/portraits/margax.jpg';
import oceane from '../../public/images/portraits/oceane.jpg';
import sol from '../../public/images/portraits/sol.jpg';
import zelice from '../../public/images/portraits/zelice.jpg';
import compStyles from '../layout.module.scss';
console.log(alice, cobi, fanny, gnousse, jeanni, margax, oceane, sol, zelice);

export default function TeamMember({ name, pronouns, id, image, theaterRoles,  handler }) {
  const { 
    teammember,
    teammember__info,
    } = compStyles;
    console.log(image);
  return (
    <div className={teammember} style={{'backgroundImage': `url(${image}`}} onClick={handler} id={id}>
      <div className={teammember__info}>
        <span>{name}</span>
        <span>{pronouns}</span>
        {/* <span>{theaterRoles.map((role) => role + ', ')}</span> */}
      </div>
    </div>
  )
}
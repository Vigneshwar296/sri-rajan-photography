import ServiceLanding from '../../components/ServiceLanding';
import {stock,premiumStock as p} from '../../lib/stockImages';
export default function WeddingPhotography(){return <ServiceLanding eyebrow="WEDDING PHOTOGRAPHY" title="The day moves fast." italic="Your memories shouldn't." intro="Candid emotion, meaningful rituals, family portraits and editorial frames — photographed as one complete story." hero={stock.ceremony} sections={[
  {kicker:'CANDID',title:'The moments between the moments.',copy:'We stay alert to the glances, laughter and quiet reactions that make a wedding feel personal long after the day is over.',image:p.bride,position:'center 30%'},
  {kicker:'TRADITION',title:'Rituals deserve context, not just coverage.',copy:'Ceremonies are photographed with respect for their rhythm, people and cultural meaning — without losing visual beauty.',image:stock.henna},
  {kicker:'PORTRAITS',title:'Direction when it helps. Space when it matters.',copy:'Couple and family portraits are guided gently, keeping expressions natural and the experience calm.',image:stock.romantic},
]} gallery={[stock.classicWedding,stock.celebration,p.weddingHands,stock.couple,stock.henna,stock.ceremony]} quote="The photographs should bring back the sound of the room, the people around you and the feeling you had in that exact second."/>}

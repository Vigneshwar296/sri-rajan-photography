import ServiceLanding from '../../components/ServiceLanding';
import {stock,premiumStock as p} from '../../lib/stockImages';
export default function PreWedding(){return <ServiceLanding eyebrow="PRE-WEDDING STORIES" title="A day designed" italic="around the two of you." intro="Relaxed, concept-led couple photography in places and light that feel cinematic without becoming artificial." hero={p.prewide} sections={[
  {kicker:'CONCEPT',title:'A visual idea with your personality inside it.',copy:'We shape location, wardrobe, timing and visual references around the way you want the story to feel.',image:p.preclose},
  {kicker:'DIRECTION',title:'No awkward posing marathon.',copy:'Simple prompts, movement and conversation create photographs that feel composed without looking forced.',image:p.coupleSunset},
  {kicker:'DESTINATION',title:'Make the location part of the story.',copy:'From city streets to coastlines and hill stations, we use place as atmosphere rather than just a backdrop.',image:p.destination},
]} gallery={[p.coupleSunset,stock.couple,stock.romantic,p.preclose,p.prewide,stock.celebration]} quote="A pre-wedding session should feel less like a shoot and more like a really good day that happened to be photographed beautifully."/>}

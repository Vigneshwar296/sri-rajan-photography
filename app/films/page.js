import ServiceLanding from '../../components/ServiceLanding';
import {stock,premiumStock as p} from '../../lib/stockImages';
export default function Films(){return <ServiceLanding eyebrow="CINEMATIC FILMS" title="Not a montage." italic="A memory with a pulse." intro="Wedding films built from voices, ambience, movement, music and the moments that photographs alone cannot carry." hero={p.cinema} sections={[
  {kicker:'STORY',title:'Emotion gives the edit its structure.',copy:'Rather than forcing every wedding into the same template, we build the film around the people, words and energy of the day.',image:stock.film},
  {kicker:'SOUND',title:'What you hear matters as much as what you see.',copy:'Vows, laughter, room tone and meaningful voices give the film texture and make it unmistakably yours.',image:p.filmCamera},
  {kicker:'DELIVERY',title:'Films for the screen — and the phone.',copy:'Alongside the main film, short teasers and vertical edits can be shaped for sharing without losing the premium visual language.',image:stock.celebration},
]} gallery={[p.cinema,stock.film,p.filmCamera,stock.ceremony,stock.celebration,stock.romantic]} quote="The best wedding film does not simply show what happened. It lets you feel the pace, sound and emotion of being there again."/>}

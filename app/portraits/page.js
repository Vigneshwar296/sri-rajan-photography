import ServiceLanding from '../../components/ServiceLanding';
import {stock,premiumStock as p} from '../../lib/stockImages';
export default function Portraits(){return <ServiceLanding eyebrow="PORTRAITS & MILESTONES" title="People change." italic="Photographs let you keep a version." intro="Family, maternity, baby, individual and milestone portraiture created with clean direction and an editorial eye." hero={p.portraitWoman} sections={[
  {kicker:'FAMILY',title:'The photograph everyone will come back to.',copy:'Warm, relaxed family sessions with enough direction to look polished and enough freedom to still feel like you.',image:stock.family},
  {kicker:'MATERNITY + BABY',title:'Small chapters that become enormous memories.',copy:'Gentle, tasteful portrait sessions designed around comfort, simplicity and timeless expressions.',image:stock.maternity},
  {kicker:'INDIVIDUAL',title:'Portraits with presence.',copy:'Editorial-style individual and professional portraiture with thoughtful light, composition and clean retouching.',image:p.portraitMan},
]} gallery={[stock.family,stock.maternity,stock.baby,p.portraitWoman,p.portraitMan,stock.portrait]} quote="A good portrait does more than record how someone looked. It preserves something about who they were in that season of life."/>}

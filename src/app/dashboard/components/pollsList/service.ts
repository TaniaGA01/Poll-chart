import * as SondageAPI from '@/services/api/polls';
import { pollInterface } from '@/services/interfaces/pollInterfaces/poll.interfaces';
import { Router } from 'vue-router';

export default class service {

    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

  getPollsList = async (): Promise<pollInterface[]> => {
      try {
        const response = await SondageAPI.getPoll()
        return response.datas as pollInterface[]
      } catch(error){
        return []
      }
  }

    redirectToDetail = (id: string) => {
        this.router.push({ path: `/gestion-sondage/sondage/${id}` });
    }
}

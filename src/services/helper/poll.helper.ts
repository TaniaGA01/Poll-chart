import * as SondageAPI from '@/services/api/polls';
import { apiErrorInterface } from "../interfaces/error.interfaces";
import { pollStandaloneAPIINterface } from "../interfaces/pollInterfaces/poll.interfaces";

export const pollById = async (id: string): Promise<pollStandaloneAPIINterface | apiErrorInterface> => {
    try {
        const response = await SondageAPI.getPoll()
        const [poll] = response.datas.filter((el) => { // récupérer l'id du poll par url
        return el._id == id
    })
    return {
      status: true,
      datas: poll
    }

  } catch (error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    return {
      status: false,
      message
    }
  }
}

import { answerFaker } from "@/app/dashboard/allFakeData/answersFaker"
import axios from "axios"
import { answerAPIINterface } from "@/services/interfaces/pollInterfaces/answer.interfaces";
import { apiErrorInterface } from "@/services/interfaces/error.interfaces";

export const getAnswers = async (): Promise<answerAPIINterface | apiErrorInterface> =>  {
  try {
    // const response = await poll.get('626bfadff9b23b69c8daad15')
    // return {
    //   status: true,
    //   datas: response.data
    // }
    return {
      status: true,
      datas: answerFaker
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

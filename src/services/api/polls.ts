import { pollFaker } from "@/app/dashboard/allFakeData/pollFaker"
import axios from "axios"
import { apiErrorInterface } from "../interfaces/error.interfaces"
import { pollAPIINterface } from "../interfaces/pollInterfaces/poll.interfaces"
const poll = axios.create({
  baseURL: 'http://localhost:3000/polls/user/'
})

export const getPoll = async (): Promise<pollAPIINterface | apiErrorInterface> =>  {
  try {
    // const response = await poll.get('626bfadff9b23b69c8daad15')
    // return {
    //   status: true,
    //   datas: response.data
    // }
    return {
      status: true,
      datas: pollFaker
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

import { questionsFaker} from "@/app/dashboard/allFakeData/questionsFakers"
import axios from "axios"
import { useRoute } from 'vue-router';
import * as PollsAPI from '@/services/helper/poll.helper';
import { questionAPIINterface } from "@/services/interfaces/pollInterfaces/question.interfaces";
import { apiErrorInterface } from "@/services/interfaces/error.interfaces";
// const question = axios.create({
//   baseURL: 'http://localhost:3000/questions/'
// })

export const getQuestions = async (): Promise<questionAPIINterface | apiErrorInterface> => {


    try {
    // const response = await poll.get('626bfadff9b23b69c8daad15')
    // return {
    //   status: true,
    //   datas: response.data
    // }
        const route = useRoute()
        const response = await PollsAPI.pollById(route.params._id as string)
    return {
        status: true,
        // datas: questionsFaker
        datas: response.datas.questions

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

export const addQuestion = async (e): Promise<questionAPIINterface | apiErrorInterface> => {

  try {
//         const response = await question.post('626bfadff9b23b69c8daad15/add', {
//           name: e,
//           position: 12,
//         })
//         return {
//           status: true,
//           datas:response.data
//         }
    //   const route = useRoute()
    //   const response = await PollsAPI.pollById(route.params._id as string)
    return {
      status: true,
        // datas: response.datas.questions
        datas: questionsFaker
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

export const editQuestion = async (e): Promise<questionAPIINterface | apiErrorInterface> => {

  try {
//         const response = await question.put( e._id ,{
//           name: e.name,
//           position: e.position,
//         })
//   }
    //   const route = useRoute()
    //   const response = await PollsAPI.pollById(route.params._id as string)
    return {
      status: true,
        // datas: response.datas.questions
        datas: questionsFaker
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

export const deleteQuestion = async (q): Promise<questionAPIINterface | apiErrorInterface> => {

  try{
//         const response = await question.delete(q._id )
//         return {
//           status: true,
//           datas:response.data
//         }
    //   const route = useRoute()
    //   const response = await PollsAPI.pollById(route.params._id as string)
    return {
      status: true,
      // datas:response.data
        // datas: response.datas.questions
        datas: questionsFaker
    }
  }catch(error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    return {
      status: false,
      message
    }
  }
}



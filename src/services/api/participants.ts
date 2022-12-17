import { userFaker } from "@/app/dashboard/allFakeData/userFaker"
import axios from "axios"
import { userAPIINterface } from "@/services/interfaces/pollInterfaces/user.interfaces";
import { apiErrorInterface } from "@/services/interfaces/error.interfaces";
const user = axios.create({
  baseURL: 'http://localhost:3000/users/'
})

export const getParticipants = async (): Promise<userAPIINterface | apiErrorInterface> =>{
  try{
    // const response = await user.get('poll/626bfadff9b23b69c8daad15')
    return {
      status: true,
      datas: userFaker,
      message:""
    }
  } catch(error) {
    let message = 'Unknown Error'
    if (error instanceof Error) message = error.message
    return {
      status: false,
      message
    }
  }
}

export const addParticipant = async (e): Promise<userAPIINterface | apiErrorInterface> => {
      try {
        // const response = await user.post('add/', {
        //   name: e,
        //   email: "ludivine@proximite-client.fr",
        //   polls: [
        //     "626bfadff9b23b69c8daad15"
        //   ],
        //   answers: [
        //     // {
        //     //     question: q,
        //     //     choice: c
        //     // },
        //   ]
        // })
        // return {
        //   status: true,
        //   datas: response.data
        // }
        return {
          status: true,
          datas: userFaker,
          message:""
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

export const editParticipant = async (e): Promise<userAPIINterface | apiErrorInterface> => {
  try {
    // const response = await user.put(e._id, {
    //   name: e.name
    // })
    // return {
    //   status: true,
    //   datas: response.data
    // }
    return {
      status: true,
      datas: e,
      message:""
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

export const deleteParticipant = async (e): Promise<userAPIINterface | apiErrorInterface> => {
  try {
    //const response = await user.delete('poll/626bfadff9b23b69c8daad15/remove/' + q._id)
    // return {
        // status: true,
        // datas: response.data
    //}
    // return {
    //   status: true,
    //   datas: response.data
    // }
    return {
      status: true,
      datas: e,
      message:""
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

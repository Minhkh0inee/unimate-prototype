import {User} from '../interface/User'
import {ISignIn} from '../interface/SignIn'
import axios from 'axios';



const API_URL = 'http://localhost:3000/unimate/api'

export const fetchUsers = async (): Promise<User[]> => {
    try {
      const response = await axios.get<User[]>(API_URL + '/user');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch users:', error);
      throw error;
    }
};

export const signIn = async (body: ISignIn): Promise<ISignIn> => {
    try{
        const response = await axios.post<ISignIn>(API_URL + '/auth', body)
        console.log(response);
        return response.data
    }catch (error) {
        console.error('Failed login:', error);
        throw error;
      }
}
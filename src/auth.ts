import CredentialsProvider from 'next-auth/providers/credentials';
import axiosConfig from './axios/axiosconfig';
import { cookies } from 'next/headers';

// type
import type { AuthOptions } from 'next-auth';

const auth:AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials){
        try {
          const res = await axiosConfig.post('/login', credentials)
          if(res?.data){
            console.log(res.data)
            return res.data;
          } else {
            return res
          }
        } catch (error) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login'
  }
}

export default auth;
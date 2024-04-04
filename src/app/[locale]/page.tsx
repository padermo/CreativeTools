import Header from '@/components/landing/Header'
import Search from '@/components/landing/Search'
import Account from '@/components/landing/Account'
import FloatContact from '@/components/contact/FloatContact'

export default function Home(){
  return(
    <>
      <Header/>
      <Search/>
      <Account/>
      <FloatContact/>
    </>
  )
}
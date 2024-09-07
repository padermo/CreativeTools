import Header from '@/components/landing/Header'
import Search from '@/components/landing/Search'
import Account from '@/components/landing/Account'
import FloatContact from '@/components/contact/FloatContact'
import PageLayout from '@/components/ParentComponents/PageLayout'

export default function Home(){
  return(
    <PageLayout>
      <Header/>
      <Search/>
      {/*<Account/>*/}
      {/*<FloatContact/>*/}
    </PageLayout>
  )
}

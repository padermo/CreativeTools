import Header from '@/components/Landing/Header'
import Search from '@/components/Landing/Search'
import Account from '@/components/Landing/Account'
import FloatContact from '@/components/Config/FloatContact'
import PageLayout from '@/components/ParentComponents/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Search />
      <Account/>
      <FloatContact/>
    </PageLayout>
  )
}

import PageLayout from '@/components/parentComponents/PageLayout';
import ItemsProvider from '@/context/ItemsContext';
import Favorites from '@/components/favorites/Favorites';

export default function FavoritePage(){
  return(
    <PageLayout>
      <ItemsProvider>
        <Favorites/>
      </ItemsProvider>
    </PageLayout>
  )
}
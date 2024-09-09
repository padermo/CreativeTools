import PageLayout from '@/components/ParentComponents/PageLayout';
import ItemsProvider from '@/context/ItemsContext';
import Favorites from '@/components/Favorites';

export default function FavoritePage() {
  return (
    <PageLayout>
      <ItemsProvider>
        <Favorites />
      </ItemsProvider>
    </PageLayout>
  )
}

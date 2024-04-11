import PageLayout from '@/components/parentComponents/PageLayout';
import Tools from '@/components/tools/Tools';
import CreateModal from '@/components/items/create/CreateModal';
import ReportModal from '@/components/modals/ReportModal';
import ItemsProvider from '@/context/ItemsContext';

export default function ToolsPage(){
  return(
    <PageLayout>
      <ItemsProvider>
        <Tools/>
        <CreateModal/>
        <ReportModal/>
      </ItemsProvider>
    </PageLayout>
  )
}
import PageLayout from '@/components/parentComponents/PageLayout';
import ItemsProvider from '@/context/ItemsContext';
import AlertProvider from '@/context/AlertContext';
import Tools from '@/components/tools/Tools';
import CreateModal from '@/components/items/create/CreateModal';
import ReportModal from '@/components/modals/ReportModal';

export default function ToolsPage(){
  return(
    <PageLayout>
      <ItemsProvider>
        <AlertProvider>
          <Tools/>
          <CreateModal/>
          <ReportModal/>
        </AlertProvider>
      </ItemsProvider>
    </PageLayout>
  )
}
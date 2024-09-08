import PageLayout from '@/components/ParentComponents/PageLayout';
import ItemsProvider from '@/context/ItemsContext';
import AlertProvider from '@/context/AlertContext';
import Tools from '@/components/Tools';
import CreateModal from '@/components/items/create/CreateModal';
import ReportModal from '@/components/Modals/ReportModal';

export default function ToolsPage() {
  return (
    <PageLayout>
      <ItemsProvider>
        <AlertProvider>
          <Tools />
          <CreateModal />
          <ReportModal />
        </AlertProvider>
      </ItemsProvider>
    </PageLayout>
  )
}

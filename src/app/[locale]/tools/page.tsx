import PageLayout from '@/components/parentComponents/PageLayout';
import Tools from '@/components/tools/Tools';
import CreateModal from '@/components/items/create/CreateModal';

export default function ToolsPage(){
  return(
    <PageLayout>
      <Tools/>
      <CreateModal/>
    </PageLayout>
  )
}
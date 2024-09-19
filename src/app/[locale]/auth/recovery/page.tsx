import PageLayout from "@/components/ParentComponents/PageLayout";
import AlertProvider from "@/context/AlertContext";
import Recovery from "@/components/Auth/Recovery";

export default function RecoveryPage() {
  return (
    <PageLayout>
      <AlertProvider>
        <div className="min-h-dvh max-h-full flex flex-col justify-center items-center">
          <Recovery />
        </div>
      </AlertProvider>
    </PageLayout>
  );
}

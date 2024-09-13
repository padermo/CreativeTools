import { ShareAltOutlined, CopyOutlined } from "@ant-design/icons";
import { useAlert } from "@/context/AlertContext";
import { useTranslations } from "next-intl";
import type { ShareProps } from "../../items.types";

export default function Share({ title, url }:ShareProps) {
  const t = useTranslations('Tools');
  const { handleAlert } = useAlert();

  const handleShare = async() => {
    if(navigator.share){
      try {
        await navigator.share({title, url});
      } catch (err) {
        handleAlert({type: 'error', content: t('alerts.share.errors.share')});
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        handleAlert({type:'success', content: t('alerts.share.copy')});
      } catch (err) {
        handleAlert({type:'error', content: t('alerts.share.errors.copy')});
      }
    }
  }
  
  return (
    <button onClick={handleShare} className='text-[#888] transition-colors duration-300 ease-in-out hover:text-white'>
      {typeof navigator.share !== 'undefined' ? <ShareAltOutlined/> : <CopyOutlined/>}
    </button> 
  )
}

import { ShareAltOutlined, CopyOutlined } from "@ant-design/icons";
import type { ShareProps } from "../../items.types";

export default function Share({ title, url }:ShareProps) {

  const handleShare = async() => {
    if(navigator.share){
      try {
        await navigator.share({title, url});
      } catch (err) {
        // add alert with message info
        console.log(err);
      }
    } else {
      try {
        // add alert with message copied ok
        await navigator.clipboard.writeText(url);
      } catch (err) {
        // add alert
        console.log(err)
      }
    }
  }
  
  return (
    <button onClick={handleShare} className='text-[#888] transition-colors duration-300 ease-in-out hover:text-white'>
      {typeof navigator.share !== 'undefined' ? <ShareAltOutlined/> : <CopyOutlined/>}
    </button> 
  )
}

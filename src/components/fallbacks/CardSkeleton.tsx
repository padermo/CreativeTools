import { Skeleton } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

export default function CardSkeleton(){
  return(
    <ConfigThemeAnt>
      <div className='flex flex-col w-full min-h-dvh max-h-full gap-4 justify-center items-center py-8'>
        <div className='w-full flex items-center justify-start gap-4'>
          <Skeleton.Button active size='large' shape='square' style={{borderRadius: '6px', padding: '20px 12px'}}/>
          <Skeleton.Button active size='large' shape='square' style={{borderRadius: '6px', padding: '20px 12px'}}/>
          <Skeleton.Button active size='large' shape='square' style={{borderRadius: '6px', padding: '20px 12px'}}/>
        </div>
        <div className='w-full flex flex-wrap gap-5 flex-1 justify-between'>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
          <Skeleton.Avatar active size={240} shape='square' style={{borderRadius: '6px'}}/>
        </div>
        <div></div>
      </div>
    </ConfigThemeAnt>
  )
}
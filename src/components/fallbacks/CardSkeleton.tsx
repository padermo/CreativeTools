import { Skeleton } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

export default function CardSkeleton() {
  return (
    <ConfigThemeAnt>
      <div className='w-full flex flex-wrap justify-center gap-5 flex-1 md:justify-between lg:items-start lg:justify-between 2xl:items-center'>
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
        <Skeleton.Avatar
          active
          size={240}
          shape='square'
          style={{ borderRadius: '6px' }}
        />
      </div>
    </ConfigThemeAnt>
  );
}

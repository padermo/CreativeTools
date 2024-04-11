import { Skeleton } from 'antd';
import ConfigThemeAnt from '../parentComponents/ConfigThemeAnt';

export default function CardSkeleton() {
  return (
    <ConfigThemeAnt>
      <div className='w-full flex flex-wrap gap-5 flex-1 justify-between'>
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

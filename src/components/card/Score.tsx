import { Rate } from 'antd'
import type { ScoreProps } from '@/types/generals.types'

export default function Score({score}:ScoreProps){
  return <Rate defaultValue={score}/>
}
'use client'

import dynamic from 'next/dynamic'

import PostDate from './PostDate'
const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
})

type VideoComponentProps = {
  vidSrc: string;
  muted?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  captions?: boolean;
  title?: string;
  date?: string;
  light?: boolean;
  playIcon?: any;
  poster?: any;
}
export default function VideoComponent({
  vidSrc,
  muted,
  autoPlay,
  controls,
  captions,
  title,
  date,
  light,
  playIcon,
  poster,
}: VideoComponentProps) {

  return (
    <div>
      <div className="pb-2 text-xl font-bold">{title}</div>
      <div className="text-right text-base">
        <PostDate dateString={date || ''} />
      </div>
      <div className="relative pb-[56.25%]">
        <ReactPlayer
          url={vidSrc}
          width="100%"
          height="100%"
          playing={autoPlay}
          controls={controls}
          muted={muted}
          light={light}
          className="absolute left-0 top-0"
        />
      </div>
    </div>
  )
}

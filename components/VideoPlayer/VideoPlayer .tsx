import React from 'react'
import ReactPlayer from 'react-player'
import classes from './VideoPlayer.module.css'
import clsx from 'clsx'

type Props = {
	url: string,
	className?: string
}

const VideoPlayer = (props: Props) => {
	const componentClasses = clsx(classes.videoDiv, props.className)
	return (
		<div className={componentClasses}>
			<ReactPlayer
				url={props.url}
				playing
				loop
				muted
				width='100%'
				height='100%'
			/>
		</div>
	)
}

export default VideoPlayer
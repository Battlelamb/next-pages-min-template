import classes from './PlayerWithTitle.module.css'

type Props = {}

const PlayerWithTitle = (props: Props) => {
	return (
		<>
			<video autoPlay muted loop className={`${classes.myVideo} cld-video-player cld-video-player-skin-dark"`}>
				<source src="https://res.cloudinary.com/dramdutc6/video/upload/f_auto:video,q_auto/v1/altaychain/uliez4fi2qvaqtr5pv4o" type="video/webm" />
			</video>
			<div className={classes.content}>
				<h1>Heading</h1>
				<p>Lorem ipsum..sdsad.</p>
			</div>
		</>

	)
}

export default PlayerWithTitle
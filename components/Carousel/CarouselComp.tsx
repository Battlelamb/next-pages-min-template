import { Carousel } from '@mantine/carousel'
import VideoPlayer from '../VideoPlayer/VideoPlayer '
import { ImageCard } from '../ImageCard/ImageCard'
import PlayerWithTitle from '../VideoPlayer/PlayerWithTitle'

type Props = {}

const CarouselComp = (props: Props) => {
	return (
		<Carousel withIndicators height={'100vh'}>
			<Carousel.Slide>
				<VideoPlayer url='https://res.cloudinary.com/dramdutc6/video/upload/f_auto:video,q_auto/v1/altaychain/uliez4fi2qvaqtr5pv4o' />
			</Carousel.Slide>
			<Carousel.Slide><ImageCard /></Carousel.Slide>
			<Carousel.Slide><PlayerWithTitle />1</Carousel.Slide>
			{/* ...other slides */}
		</Carousel>
	)
}

export default CarouselComp
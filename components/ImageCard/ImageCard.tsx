import { IconEye, IconMessageCircle } from '@tabler/icons-react'
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core'
import VideoPlayer from '../VideoPlayer/VideoPlayer '
import classes from './ImageCard.module.css'

export function ImageCard() {
	const theme = useMantineTheme()
	// className={classes.image}
	return (
		<Card
			p="lg"
			shadow="lg"
			className={classes.card}
		>
			<VideoPlayer url='https://res.cloudinary.com/dramdutc6/video/upload/f_auto:video,q_auto/v1/altaychain/uliez4fi2qvaqtr5pv4o' className={classes.image} />
			<div className={classes.overlay} />

			<div className={classes.content}>
				<div>
					<Text size="lg" className={classes.title} fw={500}>
						Journey to Swiss Alps
					</Text>

					<Group justify="space-between" gap="xs">
						<Text size="sm" className={classes.author}>
							Robert Gluesticker
						</Text>

						<Group gap="lg">
							<Center>
								<IconEye
									style={{ width: rem(16), height: rem(16) }}
									stroke={1.5}
									color={theme.colors.dark[2]}
								/>
								<Text size="sm" className={classes.bodyText}>
									7847
								</Text>
							</Center>
							<Center>
								<IconMessageCircle
									style={{ width: rem(16), height: rem(16) }}
									stroke={1.5}
									color={theme.colors.dark[2]}
								/>
								<Text size="sm" className={classes.bodyText}>
									5
								</Text>
							</Center>
						</Group>
					</Group>
				</div>
			</div>
		</Card>
	)
}
import { Text } from '@mantine/core'
import clsx from 'clsx'

type Props = {
	text: string,
	className?: string
}

const Title = (props: Props) => {
	const componentClasses = clsx('title-class', props.className)
	return (
		<Text fw={700} size="xl" tt="capitalize" className={componentClasses}>{props.text}</Text>

	)
}

export default Title
import { Text } from '@mantine/core'
import clsx from 'clsx'

type Props = {
	text: string,
	className?: string
}

const Paragraph = (props: Props) => {
	const componentClasses = clsx('title-class', props.className)
	return (
		<Text size="md" className={componentClasses}>{props.text}</Text>
	)
}

export default Paragraph
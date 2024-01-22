import { Text } from '@mantine/core'
import clsx from 'clsx'

type Props = {
	text: string,
	className?: string
}

const SubTitle = (props: Props) => {
	const componentClasses = clsx('title-class', props.className)
	return (
		<Text fw={500} size="lg" tt="capitalize" className={componentClasses}>{props.text}</Text>
	)
}

export default SubTitle
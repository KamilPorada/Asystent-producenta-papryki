const Button: React.FC<{
	className?: string
	onClick?: () => void
	disabled?: boolean
	children: React.ReactNode
}> = props => {
	return (
		<button
			className={`px-6 py-1 mx-3 sm:text-lg rounded-md font-semibold bg-mainColor ${
                props.disabled ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-green-700 transition duration-300'
              } ${props.className}`}
			onClick={props.onClick}
			disabled={props.disabled}>
			{props.children}
		</button>
	)
}

export default Button

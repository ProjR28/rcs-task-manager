const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-gray-500'
    }

    if (variant === 'selected') {
      return 'text-blue-600 bg-blue-100 rounded-lg'
    }
  }
  return (
    <a
      href="#"
      className={`flex items-center gap-3 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton

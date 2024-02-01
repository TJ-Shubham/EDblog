
export default function Button({
    children,
    className,
    onClick,
    ...props
}) {
  return (
    <button onClick={onClick} className={className} {...props}>{children}</button>
  )
}

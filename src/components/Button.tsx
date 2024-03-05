import { ReactNode } from 'react'
interface ButtonProps {
    children: ReactNode,
    onClickbtn: () => void,
    color?: 'primary' | 'secondary' | 'success' | 'danger'
}
const Button = ({children, onClickbtn, color}: ButtonProps) => {
  return (
    <>
      <button className={'btn btn-'+color} typeof='button' onClick={onClickbtn}>{children}</button>
    </>
  )
}

export default Button

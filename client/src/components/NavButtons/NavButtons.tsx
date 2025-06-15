import Link from "next/link"
import { FC } from "react"
import Profile from "../Profile/Profile"

interface NavButtonsProps {
  isAuth: boolean
}

const NavButtons: FC<NavButtonsProps> = ({ isAuth }) => {
  return (
    <div className="nav__action">
      {isAuth ? (
        <Profile/>
      ) : (
        <Link href="/login" className="btn btn--login">Login</Link>
      )}
    </div>
  )
}

export default NavButtons
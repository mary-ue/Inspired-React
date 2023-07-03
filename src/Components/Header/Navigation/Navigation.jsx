import { Category } from "./Category/Category"
import { Gender } from "./Gender/Gender"

export const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  )
}

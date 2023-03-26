import './Header.css'

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Meme Generator 
          <img src="https://res.cloudinary.com/dbjdzxqlk/image/upload/v1679344009/Fluent%20Emojis/Color/zany_face_color_kvg9hk.svg" alt="meme" />
        </h1>
        <a href="#" className="navbar--link">
          Give me money
          <img src="../src/assets/money_bag_color.svg" alt="bag of money" />
        </a>
      </nav>
    </header>
  )
}

export default Header;

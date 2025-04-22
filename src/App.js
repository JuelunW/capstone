import './App.css';

function App() {
  return (
    <>
      <header className='Header'>
        <img src="/images/Logo.jpg" alt="Logo" width={200}/>
        <nav className='Nav'>
          <p>didididi</p>
          <p>didididi</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#online orer">Online order</a>
          <a href="#login">Login</a>
        </nav>
      </header>
      <main>
        <section id="home">
          <h1>Welcome to Our Restaurant</h1>
          <p>Experience the best dining experience with us.</p>
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>We are dedicated to providing the best food and service.</p>
        </section>
        <section id="menu">
          <h2>Menu</h2>
          <p>Explore our delicious menu options.</p>
        </section>
        <section id="reservations">
          <h2>Reservations</h2>
          <p>Book your table online.</p>
        </section>
        <section id="online order">
          <h2>Online Order</h2>
          <p>Order your favorite dishes online.</p>
        </section>
        <section id="login">
          <h2>Login</h2>
          <p>Access your account.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Our Restaurant. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.instagram.com">Instagram</a>
      </footer>
    </>
  );
}

export default App;

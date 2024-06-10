import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main class="section">
        <div class="container">
          <ul class="content-list">
            <li class="content-list__item">
            <h2 class="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, BootStrap
              </p>
              <h2 class="title-2">Backend</h2>
              <p>Java, Spring Boot, Spring Security, Hibernate, MySQL, Postgres</p>
            </li>
            <li class="content-list__item">
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

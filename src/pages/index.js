import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Мое Резюме</title>
        <meta name="description" content="Резюме разработчика" />
      </Head>

      <header className={styles.header}>
        <img src="/profile.jpg" alt="Ваше Имя" className={styles.profileImage} />
        <h1 className={styles.name}>Горник Мария</h1>
        <h2 className={styles.contact}>Контактные данные</h2>
        <p>Email: beyordscene@gmail.com</p>
        <a href="mailto:beyordscene@gmail.com" className={styles.contactButton}>Написать мне</a>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Образование</h2>
          <p>МОУ "Оршанская средняя обшеобразовательная школа"</p>
          <p>Поволжский государственный технологический университет, 4 курс, высшее неоконченное</p>
        </section>

        <section className={styles.section}>
          <h2>Опыт работы</h2>
          <p>Travelline, QA-инженер, команды Express и Reactor</p>
        </section>

        <section className={styles.section}>
          <h2>Навыки</h2>
          <p>Понимание пользовательского опыта (UX)</p>
          <p>Тестирование производительности</p>
          <p>Знание методологий тестирования</p>
          <p>Тестирование безопасности</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Все права защищены.</p>
      </footer>
    </div>
  );
}

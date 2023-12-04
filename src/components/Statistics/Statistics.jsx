import s from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  // stats.style.backgroundColor = getRandomHexColor();
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li className={s.item} key={id}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

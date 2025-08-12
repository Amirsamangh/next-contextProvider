// components/WavyBackground.tsx
import styles from '@/public/assets/css/wavyBackground.module.css';

const WavyBackground = () => {
  return (
    <div className={styles.waveContainer}>
      <svg viewBox="0 0 1200 150" preserveAspectRatio="none">
        <g className={styles.waveGroup}>
          <g className={`${styles.wave} ${styles.wave1}`}>
            <path
              fill="#115da1"
              fillOpacity="0.6"
              d="M0,100 C150,200 350,0 600,100 C850,200 1050,0 1200,100 L1200,200 L0,200Z"
            />
          </g>
          <g className={`${styles.wave} ${styles.wave2}`}>
            <path
              fill="#115da1"
              fillOpacity="0.3"
              d="M0,100 C150,0 350,200 600,100 C850,0 1050,200 1200,100 L1200,200 L0,200Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default WavyBackground;
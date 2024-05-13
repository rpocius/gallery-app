import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const photos = [
  'https://unsplash.com/photos/a-single-red-flower-in-a-field-of-blue-flowers-3Lpd6Wo3LJk',
  'https://unsplash.com/photos/a-group-of-houses-sitting-on-top-of-a-sandy-beach-QxB8Wri4vok',
  'https://unsplash.com/photos/a-blurry-image-of-a-blue-and-pink-background-zjpsG_CMTmY',
  'https://unsplash.com/photos/a-person-standing-on-the-side-of-a-road-at-night-k_oHn7XBhVA'
];

function renderPhotos(array) {
  return array.map((element, index) => (
    <div key={index} className={styles.photo}>
      <Image src={element} alt='Unsplash image' width={500} height={500} />
    </div>
  ));
}

return (
  <main className={styles.main}>
    <div className={styles.gallery}>
      {renderPhotos(photos)}
    </div>
  </main>
);
}
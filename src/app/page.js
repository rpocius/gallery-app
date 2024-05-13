import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const photos = [
    '/IMG_1.jpg', '/IMG_2.jpg', '/IMG_3.jpg', '/IMG_4.jpg', '/IMG_5.jpg', '/IMG_6.jpg', '/IMG_7.jpg', '/IMG_8.jpg', '/IMG_9.jpg', '/IMG_10.jpg', '/IMG_11.jpg', '/IMG_12.jpg', '/IMG_13.jpg', '/IMG_14.jpg', '/IMG_15.jpg', '/IMG_16.jpg'
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
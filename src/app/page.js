"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const photos = [
    '/IMG_1.jpg', '/IMG_2.jpg', '/IMG_3.jpg', '/IMG_4.jpg', '/IMG_5.jpg', '/IMG_6.jpg', '/IMG_7.jpg', '/IMG_8.jpg', '/IMG_9.jpg', '/IMG_10.jpg', '/IMG_11.jpg', '/IMG_12.jpg', '/IMG_13.jpg', '/IMG_14.jpg', '/IMG_15.jpg', '/IMG_16.jpg'
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage('');
  };

  function renderPhotos(array) {
    return array.map((element, index) => (
      <div key={index} className={styles.photo} onClick={() => openLightbox(element)}>
        <Image src={element} alt='Unsplash image' width={500} height={500} />
      </div>
    ));
  }

  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        {renderPhotos(photos)}
      </div>
      {isLightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image src={selectedImage} alt='Selected image' width={800} height={800} />
          </div>
        </div>
      )}
    </main>
  );
}
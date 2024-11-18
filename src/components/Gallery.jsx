import React from "react";
import "../styles/Gallery.scss";

const images = [
  { path: "gallery/fullband/img1.jpg", category: "Our Pictures" },
];

const Gallery = () => {
  const groupedImages = images.reduce((acc, img) => {
    acc[img.category] = acc[img.category] || [];
    acc[img.category].push(img);
    return acc;
  }, {});

  return (
    <div className="gallery">
      {Object.entries(groupedImages).map(([category, imgs]) => (
        <section key={category} className="gallery-section">
          <h3>{category}</h3>
          <div className="masonry">
            {imgs.map((img, index) => (
              <div key={index} className="masonry-item">
                <img src={img.path} alt={category} width="100%" height="auto" />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Gallery;

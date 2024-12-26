const backgrounds = [
  "https://i.pinimg.com/originals/44/1f/7a/441f7a387237d3b47f45841ef9501200.png",
  "https://wallhalla.com/wallpaper/8/variant/preview/lg",
  "https://wallhalla.com/wallpaper/61/variant/preview/lg",
];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}

function openLightbox(src){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lb.style.display = 'flex';
}
function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.style.display = 'none';
  document.getElementById('lightbox-img').src = '';
}
document.addEventListener('click', function(e){
  if(e.target.matches('.nav-links a')){ e.target.blur(); }
});
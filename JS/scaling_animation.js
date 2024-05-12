document.addEventListener('DOMContentLoaded', function() {
  var boxes = document.querySelectorAll('.box');

  function checkPosition() {
    boxes.forEach(function(box) {
      var boxTop = box.getBoundingClientRect().top;
      var boxBottom = box.getBoundingClientRect().bottom;

      // 检查方框是否在视窗中
      if (boxTop < window.innerHeight +400 && boxBottom+400 > 0) {
        // 如果在视窗中，放大并清除模糊效果
        box.style.transform = 'scale(1)';
        box.style.filter = 'none';
      } else {
        // 如果不在视窗中，缩小并应用模糊效果
        box.style.transform = 'scale(0.5)';
        box.style.filter = 'blur(4px)';
      }
    });
  }

  // 监听滚动事件和窗口大小变化事件
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  // 初始检查
  checkPosition();
});

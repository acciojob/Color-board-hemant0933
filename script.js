window.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board');
  
    for (let i = 0; i < 800; i++) {
      const square = document.createElement('div');
      square.className = 'square';
      board.appendChild(square);
  
      square.addEventListener('mouseover', function() {
        square.style.backgroundColor = getRandomColor();
      });
  
      square.addEventListener('mouseout', function() {
        setTimeout(function() {
          square.style.backgroundColor = 'rgb(29,29,29)';
        }, 1000);
      });
    }
  });
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  }
  
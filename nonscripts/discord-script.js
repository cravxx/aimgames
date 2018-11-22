// basic discord archive script thing
(function() {
  window.amemesArray = [];

  function pushUnique(arr, i) {
    if(arr.indexOf(i) == -1) {
    //if(jQuery.inArray(item, arr) == -1) {
      arr.push(i);
      return true;
    }
    return false;
  }

  function handleNode(n) {
    pushUnique(window.amemesArray, n.textContent);
  }

  const stl = document.createElement('style');
  stl.textContent = `
  @keyframes cccnodeInserted {  
      from {  
          outline-color: #fff; 
      }
      to {  
          outline-color: #000;
      }  
  }
  .message-group > .comment > .message > .body > .message-text {
      animation-duration: 0.01s;
      animation-name: cccnodeInserted;
  }
  `;
  document.head.appendChild(stl);

  document.addEventListener('animationstart', function(event){
    if (event.animationName == 'cccnodeInserted'){
      handleNode(event.target);
    }
  }, true);

  /*
  $$('.message-group > .comment > .message > .body > .message-text')

  .textContent
  */
})();

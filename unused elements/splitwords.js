function wrapWords() {
    var textWrappers = document.querySelectorAll('.intro-row p');
  
    textWrappers.forEach(function(textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='intro-word'>$&</span>");
    });
  
    var textWrappers = document.querySelectorAll('.home-title-line ');
  
    textWrappers.forEach(function(textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S+/g, "<span class='home-title-word'>$&</span>");
    });
  }
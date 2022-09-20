const addChatFormHandler = async (event) => {
    event.preventDefault();
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function(event){
       console.log('Button Clicked');
    });
    const author = document.querySelector('#chatUser').value.trim();
    const textChat = document.querySelector('#chatTextArea').value.trim();
  
    if (author && textChat) {
      const response = await fetch('/api/gameChat', {
        method: 'POST',
        body: JSON.stringify({ author, textChat }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        alert('Not a thing');
      }
    }
  };
  
  document
    .querySelector('#createChat')
    

    Element.addEventListener('submit', addChatFormHandler);
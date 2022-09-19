const addChatFormHandler = async (event) => {
    event.preventDefault();
  
    const author = document.querySelector('#chatUser').value.trim();
    const textChat = document.querySelector('#chatTextArea').value.trim();
    // const sumitButton = document.querySelector('#submit').value.trim();

    if (author && textChat) {
      const response = await fetch('/api/gameChat', {
        method: 'POST',
        body: JSON.stringify({ author, textChat }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Not a thing');
      }
    }
  };
  
  document
    .querySelector('#createChat')
    .addEventListener("submit", addChatFormHandler);
function showModal() {
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

  function checkLeeftijd() {
    var leeftijd = document.getElementById('leeftijdInput').value;

    if (leeftijd !== '' && parseInt(leeftijd) >= 18) {
      window.location.href = 'https://www.google.com';
    } else {
     
      document.body.innerHTML = '<div style="text-align: center; color: red; padding: 50px;"><h1>Helaas, je bent te jong!</h1></div>';
    }
  }
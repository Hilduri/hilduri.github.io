let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog-massages-dog-pieni.jpg') {
      myImage.setAttribute ('src','images/raccoon-and-customer-pieni.jpg');
    } else {
      myImage.setAttribute ('src','images/dog-massages-dog-pieni.jpg');
    }
}

/**
 * Script for template
 */

var $input = document.getElementById('image'),
  $fileName = document.getElementById('image-label');

$input.addEventListener('change', function () {
  if (this.value) {
    $fileName.textContent = this.value;
  } else {
    $fileName.textContent = "Escolha uma imagem";
  }
});

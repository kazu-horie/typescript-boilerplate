/* eslint-disable */

const awaitLoadImage = () =>
  new Promise((resolve) => {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('id', 'input');
    inputEl.setAttribute('type', 'file');
    document.body.appendChild(inputEl);

    const reader = new FileReader();
    reader.addEventListener(
      'load',
      (event: any) => {
        console.log('gaga');
        resolve(event?.target.result);
      },
      { once: true }
    );

    inputEl.addEventListener(
      'change',
      (event: any) => {
        reader.readAsDataURL(event.target.files.item(0));
      },
      { once: true }
    );
  });

(async () => {
  const image = await awaitLoadImage();

  const imageEl = document.createElement('img');
  imageEl.style.width = '300px';
  imageEl.style.height = '300px';
  document.body.appendChild(imageEl);
  imageEl.setAttribute('src', image as string);
})();

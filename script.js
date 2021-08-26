const LengthOfBody = Array.from(document.body.children);
const length1 = LengthOfBody.length;
const allTags = Array.from(document.getElementsByTagName('todo-item'));
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// function to append all at once
const appendAllAtOnce = () => {
 while (allTags.length !== 0) {
  document.body.appendChild(allTags[0]);
  let index = allTags.indexOf(allTags[0]);
  if (index > -1) {
   allTags.splice(index, 1);
  }
 }
 return new Promise((resolve, reject) => {
  allTags.length === 0
   ? resolve('Completed!')
   : reject('Not all elements are appended!');
 });
};

//function to append several tags
const appendSeveral = () => {
 console.log(LengthOfBody);
 console.log(allTags);
 allTags.map((el, idx) => {
  document.body.appendChild(el);
  let index = allTags.indexOf(el);
  if (index > -1) {
   allTags.splice(index, 1);
  }
 });
 return new Promise((resolve, reject) => {
  allTags.length === 0
   ? resolve('Completed!')
   : reject('Not all elements are appended!');
 });
};
button1.onclick = appendAllAtOnce;
button2.onclick = appendSeveral;

const userId = document.getElementById('userId');
const title = document.getElementById('title');
const description = document.getElementById('description');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');
const showBtn = document.getElementById('showBtn');

const database = firebase.database();
/* const db = firebase.firestore(); */
const usersRef = database.ref('/users');
addBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.child(userId.value).set({
        Title: title.value,
        Description: description.value,
        age: age.value
    });
});

updateBtn.addEventListener('click', e => {
    e.preventDefault();
    const newData = {
        Title: title.value,
        Description: description.value,
        age: age.value
    };
    usersRef.child(userId.value).update(newData);
});

removeBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.child(userId.value).remove()
        .then(() => {
            console.log('User Deleted !');
        })
        .catch(error => {
            console.log(error);
        });
});

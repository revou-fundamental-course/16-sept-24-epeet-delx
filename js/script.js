// ini js
replaceName();

function replaceName() {
    let name = prompt('Silahkan masukan nama anda');
    console.log(name);
    document.getElementById('user-name').innerHTML = name;
}

const form = document.getElementById('myForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Validate form data
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Nama harus diisi';
    } else {
        document.getElementById('nameError').innerHTML = '';
    }

    if (dob === '') {
        document.getElementById('dobError').innerHTML = 'Tanggal lahir harus diisi';
    } else {
        document.getElementById('dobError').innerHTML = '';
    }

    if (!gender) {
        document.getElementById('genderError').innerHTML = 'Jenis kelamin harus dipilih';
    } else {
        document.getElementById('genderError').innerHTML = '';
    }

    if (message === '') {
        document.getElementById('messageError').innerHTML = 'Pesan harus diisi';
    } else {
        document.getElementById('messageError').innerHTML = '';
    }

    // If all fields are valid, display the submitted data
    document.getElementById('currentTime').innerHTML = new Date().toLocaleTimeString();
    document.getElementById('outputName').innerHTML = name;
    document.getElementById('outputDob').innerHTML = dob;
    document.getElementById('outputGender').innerHTML = gender;
    document.getElementById('outputMessage').innerHTML = message;
});

let indexSlide =1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide (index) {
    //Get Dom semua image banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide); 
    console.log(listImage);

    //reset
    if (index > listImage.length) indexSlide = 1

    //hide
    let i = 0;
    while(i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }
    //show
    listImage[indexSlide - 1].style.display = 'block';
    
}


//autorun banner photo
setInterval(() => nextSlide(1), 2000);
const data = [
    {
        name: 'Rehan Redkar',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Gal Gadot',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya powar ',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Virat Kohli',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


function candidateIterator(profiles){  //the iterator recieves the data as profiles 

    let nextIndex = 0;

    return{

        next: function() {
            
            return nextIndex<profiles.length ? 
            { value:profiles[nextIndex++], done: false} : {done:true}  //this is a ternary operation if the iterating index is smaller than the data lenth then 
            //it returns the value of profile i.e the data and makes the done false and if the if condition is not satisfies then done is made true
        }
    }

}

const candidates = candidateIterator(data); //now the data is passed to the iterator

nextcv(); //this is because when we reload the site the cv section remains blank so before clicking the button we call once the nextcv function
// now we need to make event listener for next button

const nextbtn = document.getElementById('nextbtn');
nextbtn.addEventListener('click',nextcv);


function nextcv(){
 
     const currentcandidate = candidates.next().value;
    // let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
     let image = document.getElementById('image');
     let profile = document.getElementById('profile');
     if(currentcandidate != undefined){
     image.innerHTML = `<img src='${currentcandidate.image}'>`;
     profile.innerHTML = `<ul class="list-group">
     <li class="list-group-item">Name : ${currentcandidate.name}</li>
     <li class="list-group-item">age : ${currentcandidate.age}</li>
     <li class="list-group-item">city : ${currentcandidate.city}</li>
     <li class="list-group-item">language : ${currentcandidate.language}</li>
     <li class="list-group-item">framework : ${currentcandidate.framework}</li>
     </ul>`;
     }
     else
     {
        alert('End of candidate applications');
        window.location.reload();
     }
     

}


/*  

const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
*/















 const generateBtn = document.querySelector('#mybttn');
const  input = document.querySelector('#myNumber');
const paragrapgh = document.querySelector('#paragrapgh');


const para =[
    "The Moon is a barren, rocky world without air and water. It has dark lava plain on its surface. The Moon is filled wit craters. It has no light of its own. It gets its light from the Sun",
    " sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas.",
    " Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn,",
    "A Mahabharata is a story about a great battle between the Kauravas and the Pandavas. The battle was fought in Kurukshetra near Delhi. Many kings and princes took part in the battle",
    " Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went to exile for fourteen years. ",
    " Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan in memory of his wife Mumtaz Mahal. It is situated on the banks of river Yamuna at Agra",
    "Delhi is the capital of India. It is situated on the banks of the river Yamuna. It is surrounded by Haryanaand Uttar Pradesh. It has some of the famous buildings",
    "A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks",
    "A street beggar can be seen everywhere; at the bus stop, railway stations, religious places, markets etc. Some beggars are crippled, lame and some are blind.",
    "The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine",
    
];



// array sorting 
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// btn click action 
let myfunction =()=>{

    if( input.value >9 || input.value < 0 || input.value === ""){

        const indexNum = Math.floor(Math.random() * para.length);
        paragrapgh.innerHTML = `<p> ${para[indexNum]} </p>`

    }
   else{
    const sortArray = shuffle(para);
    const arrayData = sortArray.slice(0, input.value);
    const dataMap = arrayData.map((value)=>{
        return `<P> ${value}</P>`
    }

    )
    paragrapgh.innerHTML = dataMap.join("");
   }
}

generateBtn.addEventListener('click',myfunction)


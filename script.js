function getRandomCharacter() {
    const characters = [
        'Lord Krishna',
        'Arjuna',
        'Yudhishthira',
        'Bhima',
        'Draupadi',
        'Karna',
        'Duryodhana',
        'Shakuni',
        'Bhishma',
        'Dronacharya',
        'Gandhari',
        'Kunti',
        'Nakula',
        'Sahadeva',
        'Dhritarashtra',
        'Vidura',
        'Abhimanyu',
        'Satyaki',
        'Drupada',
        'Shikhandi',
        // Add more characters as needed
     ];
     
 
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
 }
 
 function predictCharacter() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const predictionResult = document.getElementById('predictionResult');
 
    const specificPredictions = {
        'sayan sir': 'Lord Krishna',
        'subir sir': 'Bhishma',
        'anirban sir': 'Dronacharya',
        'jd maam': 'Kunti',
        'dhrubasis sir':'Dhritarashtra',
        'sumit sir':'Vidura'
        // Add more specific predictions as needed
    };
 
    if (userInput.length < 5) {
        predictionResult.innerHTML = 'Input must be at least 5 characters long.';
    } else if (specificPredictions[userInput]) {
        predictionResult.innerHTML = `Predicted Character: ${specificPredictions[userInput]}`;
    } else {
        const randomCharacter = getRandomCharacter();
        predictionResult.innerHTML = `Predicted Character: ${randomCharacter}`;
    }
 }


 
 
 
 
 
 
 
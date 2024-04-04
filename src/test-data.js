function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  export const sampleQuestions = [
      {
          id: generateRandomId(),
          key: generateRandomId(),
          question: "How many continents are there in the world?",
          correctAnswer: "7",
          answers: ["5", "6", "7", "8"]
      },
      {
          id: generateRandomId(),
          key: generateRandomId(),
          question: "What is the capital of France?",
          correctAnswer: "Paris",
          answers: ["London", "Berlin", "Madrid", "Paris"]
      },
      {
          id: generateRandomId(),
          key: generateRandomId(),
          question: "Who painted the Mona Lisa?",
          correctAnswer: "Leonardo da Vinci",
          answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"]
      },
      {
          id: generateRandomId(),
          key: generateRandomId(),
          question: "What is the chemical symbol for water?",
          correctAnswer: "H2O",
          answers: ["CO2", "O2", "H2O", "NH3"]
      },
      {
          id: generateRandomId(),
          key: generateRandomId(),
          question: "Who wrote 'To Kill a Mockingbird'?",
          correctAnswer: "Harper Lee",
          answers: ["Mark Twain", "Harper Lee", "J.K. Rowling", "Ernest Hemingway"]
      }
  ];
  
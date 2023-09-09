const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "CH4"],
    correctAnswer: "H2O",
  },
  {
    category: "Science",
    question: "Which gas is responsible for the Earth's greenhouse effect?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    category: "Math",
    question: "What is the result of 7 * 8?",
    options: ["42", "56", "64", "72"],
    correctAnswer: "56",
  },
  {
    category: "Math",
    question: "Solve for x: 3x - 7 = 20",
    options: ["5", "7", "9", "11"],
    correctAnswer: "9",
  },
  {
    category: "General Knowledge",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    category: "General Knowledge",
    question: "In which year did the Titanic sink?",
    options: ["1907", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    options: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "John Adams",
    ],
    correctAnswer: "George Washington",
  },
  {
    category: "History",
    question: "In which war did the Battle of Gettysburg take place?",
    options: [
      "World War I",
      "American Civil War",
      "Vietnam War",
      "War of 1812",
    ],
    correctAnswer: "American Civil War",
  },
  {
    category: "Geography",
    question: "What is the largest continent by land area?",
    options: ["Africa", "North America", "Asia", "Australia"],
    correctAnswer: "Asia",
  },
  {
    category: "Geography",
    question: "Which river is the longest in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Mississippi River",
      "Yangtze River",
    ],
    correctAnswer: "Nile River",
  },
  {
    category: "Science",
    question: "What is the process by which plants make their own food?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"],
    correctAnswer: "Photosynthesis",
  },
  {
    category: "Science",
    question: 'Which planet is known as the "Red Planet"?',
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    category: "Math",
    question: "What is the value of π (pi) to two decimal places?",
    options: ["3.14", "2.71", "1.61", "4.18"],
    correctAnswer: "3.14",
  },
  {
    category: "Math",
    question: "Solve for x: 3x - 7 = 20",
    options: ["5", "7", "9", "11"],
    correctAnswer: "9",
  },
  {
    category: "General Knowledge",
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    category: "General Knowledge",
    question: 'Which country is known as the "Land of the Rising Sun"?',
    options: ["China", "Japan", "South Korea", "Vietnam"],
    correctAnswer: "Japan",
  },
  {
    category: "History",
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: [
      "William Shakespeare",
      "Jane Austen",
      "Leo Tolstoy",
      "Charles Dickens",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    category: "History",
    question:
      "What was the name of the ship that carried the Pilgrims to America in 1620?",
    options: ["Mayflower", "Santa Maria", "Nina", "Victoria"],
    correctAnswer: "Mayflower",
  },
  {
    category: "Geography",
    question: "Which desert is the largest hot desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Atacama Desert",
      "Kalahari Desert",
    ],
    correctAnswer: "Sahara Desert",
  },
  {
    category: "Geography",
    question: "What is the capital of Australia?",
    options: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
    correctAnswer: "Canberra",
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    correctAnswer: "France",
  },
  {
    category: "Sports",
    question:
      "Who holds the record for the most career goals in professional football (soccer)?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Diego Maradona"],
    correctAnswer: "Cristiano Ronaldo",
  },
  {
    category: "Technology",
    question: "What is the main purpose of a firewall in computer security?",
    options: [
      "Protecting against viruses",
      "Filtering incoming network traffic",
      "Backing up data",
      "Boosting internet speed",
    ],
    correctAnswer: "Filtering incoming network traffic",
  },
  {
    category: "Technology",
    question:
      "Which company developed the first commercially successful personal computer?",
    options: ["Apple", "IBM", "Microsoft", "Intel"],
    correctAnswer: "IBM",
  },
  {
    category: "Technology",
    question: 'What does "www" stand for in a website URL?',
    options: [
      "World Wide Web",
      "Webpage World Wonders",
      "Website Width and Width",
      "World Work Web",
    ],
    correctAnswer: "World Wide Web",
  },
  {
    category: "Movies",
    question: 'Who directed the movie "Inception"?',
    options: [
      "Christopher Nolan",
      "Steven Spielberg",
      "Martin Scorsese",
      "Quentin Tarantino",
    ],
    correctAnswer: "Christopher Nolan",
  },
  {
    category: "Movies",
    question: "Which film won the Academy Award for Best Picture in 2020?",
    options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
    correctAnswer: "Parasite",
  },
  {
    category: "Music",
    question: 'Who is often referred to as the "King of Pop"?',
    options: ["Elvis Presley", "Prince", "Michael Jackson", "Frank Sinatra"],
    correctAnswer: "Michael Jackson",
  },
  {
    category: "Music",
    question: 'Which rock band released the album "The Wall"?',
    options: [
      "Led Zeppelin",
      "Pink Floyd",
      "The Rolling Stones",
      "The Beatles",
    ],
    correctAnswer: "Pink Floyd",
  },
  {
    category: "Science",
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: "6",
  },
  {
    category: "Geography",
    question: "Which ocean is the largest in terms of surface area?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    category: "Science",
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    category: "Math",
    question: "What is the square root of 144?",
    options: ["6", "8", "10", "12"],
    correctAnswer: "12",
  },
  {
    category: "General Knowledge",
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Niels Bohr",
      "Albert Einstein",
      "Galileo Galilei",
    ],
    correctAnswer: "Albert Einstein",
  },
  {
    category: "History",
    question:
      "What year did Christopher Columbus first arrive in the Americas?",
    options: ["1492", "1500", "1520", "1600"],
    correctAnswer: "1492",
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for in web development?",
    options: [
      "HyperText Markup Language",
      "High Tech Media Language",
      "Hyper Transfer Markup Language",
      "Hyperlink Text Management Language",
    ],
    correctAnswer: "HyperText Markup Language",
  },
  {
    category: "Technology",
    question:
      "Which company is famous for its search engine and online advertising services?",
    options: ["Amazon", "Google", "Facebook", "Apple"],
    correctAnswer: "Google",
  },
  {
    category: "Technology",
    question:
      "What is the most commonly used programming language for building mobile apps?",
    options: ["Python", "Java", "Swift", "C#"],
    correctAnswer: "Java",
  },
  {
    category: "Technology",
    question: "Which company is known for its gaming console, PlayStation?",
    options: ["Microsoft", "Sony", "Nintendo", "Sega"],
    correctAnswer: "Sony",
  },
  {
    category: "Science",
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Skin"],
    correctAnswer: "Skin",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Hg"],
    correctAnswer: "Au",
  },
  {
    category: "Science",
    question: "What is the smallest planet in our solar system?",
    options: ["Earth", "Mars", "Mercury", "Venus"],
    correctAnswer: "Mercury",
  },
  {
    category: "History",
    question: "In which year did World War I begin?",
    options: ["1914", "1917", "1918", "1920"],
    correctAnswer: "1914",
  },
  {
    category: "History",
    question: "Which European city is known as the 'City of Love'?",
    options: ["Rome", "Paris", "Venice", "Athens"],
    correctAnswer: "Paris",
  },
  {
    category: "General Knowledge",
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Nitrogen",
  },
  {
    category: "General Knowledge",
    question: "Who wrote the famous novel 'Pride and Prejudice'?",
    options: ["Jane Austen", "Charles Dickens", "Emily Brontë", "Mark Twain"],
    correctAnswer: "Jane Austen",
  },
  {
    category: "Technology",
    question:
      "Which programming language is commonly used for web development?",
    options: ["Java", "Python", "HTML", "C++"],
    correctAnswer: "HTML",
  },
  {
    category: "Science",
    question: "What is the hardest natural substance known to man?",
    options: ["Iron", "Diamond", "Gold", "Copper"],
    correctAnswer: "Diamond",
  },
  {
    category: "Science",
    question:
      "What is the process by which an organism develops from an egg to an adult?",
    options: ["Evolution", "Reproduction", "Metamorphosis", "Fertilization"],
    correctAnswer: "Metamorphosis",
  },
  {
    category: "Technology",
    question: "What does 'URL' stand for in the context of web addresses?",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Link",
      "Uniform Registration List",
      "Unified Resource Link",
    ],
    correctAnswer: "Uniform Resource Locator",
  },
  {
    category: "Technology",
    question:
      "Which social media platform is known for its character limit of 280 characters per post?",
    options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    correctAnswer: "Twitter",
  },
  {
    category: "General Knowledge",
    question: "What is the currency of Brazil?",
    options: ["Peso", "Dollar", "Euro", "Real"],
    correctAnswer: "Real",
  },
  {
    category: "General Knowledge",
    question: "Which country is known as the 'Land of a Thousand Lakes'?",
    options: ["Sweden", "Norway", "Finland", "Canada"],
    correctAnswer: "Finland",
  },
  {
    category: "General Knowledge",
    question: "What is the largest ocean in the world?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    category: "General Knowledge",
    question: "Which gas is commonly known as laughing gas?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrous Oxide", "Helium"],
    correctAnswer: "Nitrous Oxide",
  },
  {
    category: "General Knowledge",
    question: "Who is often called the 'Father of Modern Physics'?",
    options: ["Niels Bohr", "Marie Curie", "Max Planck", "Albert Einstein"],
    correctAnswer: "Albert Einstein",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for iron?",
    options: ["Fe", "I", "Ir", "F"],
    correctAnswer: "Fe",
  },
  {
    category: "Science",
    question: "Which gas is responsible for the blue color of the Earth's sky?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Ozone"],
    correctAnswer: "Nitrogen",
  },
  {
    category: "Science",
    question: "What is the boiling point of water in Celsius?",
    options: ["0°C", "100°C", "50°C", "25°C"],
    correctAnswer: "100°C",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for helium?",
    options: ["H2", "He", "H", "Hy"],
    correctAnswer: "He",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for sodium?",
    options: ["Sa", "So", "Na", "No"],
    correctAnswer: "Na",
  },
  {
    category: "Science",
    question:
      "What is the process by which a liquid turns into a gas at the surface?",
    options: ["Freezing", "Condensation", "Boiling", "Evaporation"],
    correctAnswer: "Evaporation",
  },
  {
    category: "Science",
    question: "Which gas is responsible for the Earth's ozone layer?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Ozone"],
    correctAnswer: "Ozone",
  },
  {
    category: "General Knowledge",
    question: "Which planet in our solar system has the most moons?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    category: "General Knowledge",
    question: "What is the largest species of shark?",
    options: [
      "Great White Shark",
      "Hammerhead Shark",
      "Whale Shark",
      "Tiger Shark",
    ],
    correctAnswer: "Whale Shark",
  },
  {
    category: "General Knowledge",
    question: "Which element is commonly used in fluorescent lights?",
    options: ["Helium", "Neon", "Argon", "Krypton"],
    correctAnswer: "Neon",
  },
  {
    category: "General Knowledge",
    question: "What is the national flower of Japan?",
    options: ["Rose", "Cherry Blossom", "Tulip", "Lily"],
    correctAnswer: "Cherry Blossom",
  },
  {
    category: "General Knowledge",
    question: "Which gas is responsible for the smell of rotten eggs?",
    options: ["Oxygen", "Carbon Dioxide", "Sulfur Dioxide", "Methane"],
    correctAnswer: "Hydrogen Sulfide",
  },
  {
    category: "Technology",
    question:
      "Which computer software application is commonly used for creating, editing, and formatting text documents?",
    options: ["Photoshop", "Illustrator", "Word", "Excel"],
    correctAnswer: "Word",
  },
  {
    category: "Technology",
    question:
      "What is the term for a small piece of code that enhances the functionality of a web browser?",
    options: ["Applet", "Plugin", "Extension", "Addon"],
    correctAnswer: "Extension",
  },
  {
    category: "Food",
    question: "What is the main ingredient in traditional Japanese miso soup?",
    options: ["Seaweed", "Tofu", "Noodles", "Rice"],
    correctAnswer: "Tofu",
  },
  {
    category: "Geography",
    question: "Which continent is known as the 'Land Down Under'?",
    options: ["Europe", "South America", "Australia", "Africa"],
    correctAnswer: "Australia",
  },
  {
    category: "Geography",
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Shanghai"],
    correctAnswer: "Tokyo",
  },
  {
    category: "Geography",
    question: "What is the largest country by land area in the world?",
    options: ["United States", "China", "Russia", "Canada"],
    correctAnswer: "Russia",
  },
  {
    category: "Geography",
    question: "What is the southernmost continent on Earth?",
    options: ["North America", "Asia", "Africa", "Antarctica"],
    correctAnswer: "Antarctica",
  },
  {
    category: "Geography",
    question:
      "Which mountain range spans across Europe and Asia and is known as the 'backbone of Europe'?",
    options: [
      "Andes Mountains",
      "Himalayas",
      "Rocky Mountains",
      "Ural Mountains",
    ],
    correctAnswer: "Ural Mountains",
  },
  {
    category: "Geography",
    question: "What is the smallest country in the world by land area?",
    options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    correctAnswer: "Vatican City",
  },
  {
    category: "Food",
    question:
      "Which type of cuisine is known for its use of raw fish and rice, often wrapped in seaweed?",
    options: ["Indian", "Japanese", "Italian", "Mexican"],
    correctAnswer: "Japanese",
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the 'Evening Star'?",
    options: ["Mercury", "Venus", "Mars", "Saturn"],
    correctAnswer: "Venus",
  },
  {
    category: "General Knowledge",
    question: "What is the largest landlocked country in the world?",
    options: ["Kazakhstan", "Russia", "Canada", "China"],
    correctAnswer: "Kazakhstan",
  },
  {
    category: "Technology",
    question: "Which web browser is developed by Mozilla Foundation?",
    options: ["Google Chrome", "Safari", "Internet Explorer", "Firefox"],
    correctAnswer: "Firefox",
  },
  {
    category: "Technology",
    question:
      "Which programming language is often used for developing Android mobile apps?",
    options: ["Java", "Python", "C++", "Swift"],
    correctAnswer: "Java",
  },
  {
    category: "Technology",
    question: "What does 'AI' stand for in the context of computer science?",
    options: [
      "Artificial Intelligence",
      "Advanced Interface",
      "Automated Integration",
      "Altered Invention",
    ],
    correctAnswer: "Artificial Intelligence",
  },
  {
    category: "Sports",
    question: "Which country won the FIFA World Cup in 2014?",
    options: ["Germany", "Brazil", "Argentina", "Spain"],
    correctAnswer: "Germany",
  },
  {
    category: "Technology",
    question:
      "What is the primary function of a RAM (Random Access Memory) in a computer?",
    options: [
      "Storing long-term data",
      "Running the operating system",
      "Holding temporary data for processing",
      "Displaying graphics",
    ],
    correctAnswer: "Holding temporary data for processing",
  },
  {
    category: "Technology",
    question:
      "What is the term used to describe a software program that replicates itself and spreads to other computers?",
    options: ["Malware", "Virus", "Trojan Horse", "Spyware"],
    correctAnswer: "Virus",
  },
  {
    category: "Technology",
    question: "Which popular messaging application is owned by Facebook?",
    options: ["WhatsApp", "Telegram", "Snapchat", "WeChat"],
    correctAnswer: "WhatsApp",
  },
  {
    category: "Technology",
    question:
      "What technology is used to connect devices wirelessly over short distances?",
    options: ["GPS", "Bluetooth", "Wi-Fi", "LTE"],
    correctAnswer: "Bluetooth",
  },
  {
    category: "Sports",
    question: "In which sport would you perform a slam dunk?",
    options: ["Soccer", "Basketball", "Tennis", "Golf"],
    correctAnswer: "Basketball",
  },
  {
    category: "Technology",
    question:
      "Which programming language is often used for web development and is known for its flexibility and ease of use?",
    options: ["Java", "Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    category: "Technology",
    question:
      "Which tech company is the world's largest provider of virtual assistants and smart speakers, including Alexa?",
    options: ["Google", "Apple", "Microsoft", "Amazon"],
    correctAnswer: "Amazon",
  },
  {
    category: "Technology",
    question:
      "What is the name of the programming language developed by Apple for macOS, iOS, watchOS, and tvOS app development?",
    options: ["Swift", "Objective-C", "Java", "Python"],
    correctAnswer: "Swift",
  },
  {
    category: "Technology",
    question:
      "Which popular video conferencing platform became widely used for remote work and communication during the COVID-19 pandemic?",
    options: ["Zoom", "Skype", "Microsoft Teams", "Google Meet"],
    correctAnswer: "Zoom",
  },
  {
    category: "Technology",
    question:
      "Which company is famous for its electric cars, including models like the Model S, Model 3, and Model X?",
    options: ["Toyota", "Ford", "Tesla", "Chevrolet"],
    correctAnswer: "Tesla",
  },
  {
    category: "Technology",
    question: "In computer graphics, what does 'GPU' stand for?",
    options: [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Global Performance Unit",
      "Graphical Power Unit",
    ],
    correctAnswer: "Graphics Processing Unit",
  },
  {
    category: "Technology",
    question:
      "Which popular video game development engine is known for its versatility and is used to create games like Fortnite and PUBG?",
    options: ["Unreal Engine", "Unity", "CryEngine", "Godot Engine"],
    correctAnswer: "Unreal Engine",
  },
  {
    category: "Technology",
    question:
      "What is the term for a piece of code that is capable of copying itself and typically has a negative impact on a computer system?",
    options: ["Antivirus", "Trojan Horse", "Firewall", "Spyware"],
    correctAnswer: "Trojan Horse",
  },
  {
    category: "Sports",
    question: "Which country is famous for inventing the sport of cricket?",
    options: ["England", "Australia", "India", "South Africa"],
    correctAnswer: "England",
  },
  {
    category: "Technology",
    question: "What is the primary purpose of an operating system?",
    options: [
      "Running computer games",
      "Managing hardware resources",
      "Printing documents",
      "Browsing the web",
    ],
    correctAnswer: "Managing hardware resources",
  },
  {
    category: "Sports",
    question: "Which sport is known as the 'Sport of Kings'?",
    options: ["Soccer", "Horse Racing", "Tennis", "Golf"],
    correctAnswer: "Horse Racing",
  },
];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("option-container");
const counterIndex = document.querySelector(".question-index");
const resultContainer = document.querySelector(".result-container");
let counter = 1,
  correct = 0;

function removeResultColor() {
  const options = document.querySelectorAll(".btn-option");
  options.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("incorrect");
  });
}
function newQuestion() {
  removeResultColor();
  loadQuestion();
}
function loadQuestion() {
  if (counter <= 10) {
    let index = Math.floor(Math.random() * questions.length +1);
    let data = questions[index];
    questionElement.innerText = data.question;
    for (let i = 0; i < 4; i++) {
      if(questions.indexOf(index) != -1) {
        loadQuestion();
      }
      counterIndex.innerHTML = `Question ${counter} out of 10`;
      const option = document.createElement("button");
      option.classList.add("btn");
      option.classList.add("btn-option");
      option.innerHTML = data.options[i];
      optionsContainer.appendChild(option);
    }
    counter++;
    checkAnswer(data);
  } else {
    showResult();
  }
}
function showResult() {
  resultContainer.classList.remove("hide");
  let result = document.createElement("p");
  result.innerHTML = `Congratulations <br> <h2>You scored <b> ${correct}/10</b></h2>`;
  resultContainer.appendChild(result);
  let restartBtn = document.createElement("button");
  restartBtn.innerText = "Play Again";
  restartBtn.classList.add("btn");
  resultContainer.appendChild(restartBtn);
  counter = 1;
  correct = 0;
  restartBtn.addEventListener("click", () => {
    restartBtn.onclick = window.location.reload(true);
  });
}
function checkAnswer(data) {
  const options = document.querySelectorAll(".btn-option");
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      if (e.target.innerText == data.correctAnswer) {
        e.target.classList.add("correct");
        correct++;
        setTimeout(removeContent, 1000);
        setTimeout(newQuestion, 1000);
      } else {
        e.target.classList.add("incorrect");
        setTimeout(removeContent, 1000);
        setTimeout(newQuestion, 1000);
      }
    });
  });
}

function removeContent() {
  questionElement.innerText = "";
  optionsContainer.innerHTML = "";
  counterIndex.innerHTML = "";
}

loadQuestion();

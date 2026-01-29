// Quiz Questions Database
const quizDatabase = {
    general: {
        easy: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is 10 + 15?",
                options: ["20", "25", "30", "35"],
                correct: 1
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "How many days are in a week?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What color is the sky on a clear day?",
                options: ["Green", "Blue", "Red", "Yellow"],
                correct: 1
            },
            {
                question: "How many hours are in a day?",
                options: ["12", "20", "24", "30"],
                correct: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "How many legs does a spider have?",
                options: ["6", "8", "10", "12"],
                correct: 1
            },
            {
                question: "What is the freezing point of water in Celsius?",
                options: ["0°C", "32°C", "100°C", "-10°C"],
                correct: 0
            }
        ],
        medium: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "How many bones are in the adult human body?",
                options: ["186", "206", "226", "246"],
                correct: 1
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                correct: 1
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                correct: 1
            },
            {
                question: "What is the speed of light?",
                options: ["299,792 km/s", "150,000 km/s", "450,000 km/s", "100,000 km/s"],
                correct: 0
            },
            {
                question: "Which gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the Heisenberg Uncertainty Principle?",
                options: [
                    "Energy cannot be created or destroyed",
                    "You cannot know both position and momentum precisely",
                    "Matter and energy are interchangeable",
                    "Objects in motion stay in motion"
                ],
                correct: 1
            },
            {
                question: "Who developed the theory of general relativity?",
                options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Stephen Hawking"],
                correct: 2
            },
            {
                question: "What is the square root of 1764?",
                options: ["40", "42", "44", "46"],
                correct: 1
            },
            {
                question: "In which year was the United Nations founded?",
                options: ["1943", "1945", "1947", "1950"],
                correct: 1
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Carbon", "Hydrogen", "Helium"],
                correct: 2
            },
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                correct: 1
            },
            {
                question: "What is the pH value of pure water?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "How many symphonies did Beethoven compose?",
                options: ["7", "9", "11", "13"],
                correct: 1
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                correct: 2
            },
            {
                question: "What percentage of Earth's atmosphere is nitrogen?",
                options: ["68%", "78%", "88%", "98%"],
                correct: 1
            }
        ]
    },
    science: {
        easy: [
            {
                question: "What is H2O?",
                options: ["Oxygen", "Water", "Hydrogen", "Carbon"],
                correct: 1
            },
            {
                question: "What force keeps us on the ground?",
                options: ["Magnetism", "Gravity", "Friction", "Electricity"],
                correct: 1
            },
            {
                question: "What is the center of an atom called?",
                options: ["Electron", "Proton", "Nucleus", "Neutron"],
                correct: 2
            },
            {
                question: "What is the boiling point of water?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                correct: 1
            },
            {
                question: "What gas do humans breathe in?",
                options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
                correct: 2
            },
            {
                question: "How many planets are in our solar system?",
                options: ["7", "8", "9", "10"],
                correct: 1
            },
            {
                question: "What is the closest star to Earth?",
                options: ["Moon", "Sun", "Mars", "Venus"],
                correct: 1
            },
            {
                question: "What part of the plant conducts photosynthesis?",
                options: ["Root", "Stem", "Leaf", "Flower"],
                correct: 2
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Steel"],
                correct: 2
            },
            {
                question: "What type of animal is a dolphin?",
                options: ["Fish", "Mammal", "Reptile", "Amphibian"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
                correct: 2
            },
            {
                question: "What is Newton's First Law of Motion?",
                options: [
                    "F = ma",
                    "Objects at rest stay at rest",
                    "For every action there's an equal reaction",
                    "E = mc²"
                ],
                correct: 1
            },
            {
                question: "What is the atomic number of carbon?",
                options: ["4", "6", "8", "12"],
                correct: 1
            },
            {
                question: "What type of bond holds water molecules together?",
                options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
                correct: 2
            },
            {
                question: "What is the study of fungi called?",
                options: ["Botany", "Zoology", "Mycology", "Ecology"],
                correct: 2
            },
            {
                question: "What is the most common blood type?",
                options: ["A+", "B+", "AB+", "O+"],
                correct: 3
            },
            {
                question: "How many chambers does the human heart have?",
                options: ["2", "3", "4", "5"],
                correct: 2
            },
            {
                question: "What is the speed of sound at sea level?",
                options: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"],
                correct: 1
            },
            {
                question: "What is DNA's structure called?",
                options: ["Single helix", "Double helix", "Triple helix", "Quadruple helix"],
                correct: 1
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                correct: 2
            }
        ],
        hard: [
            {
                question: "What is Avogadro's number?",
                options: ["6.022 × 10²³", "3.14 × 10²³", "9.81 × 10²³", "1.60 × 10²³"],
                correct: 0
            },
            {
                question: "What particle has no charge?",
                options: ["Electron", "Proton", "Neutron", "Positron"],
                correct: 2
            },
            {
                question: "What is the Schrödinger equation used for?",
                options: [
                    "Calculating gravity",
                    "Quantum mechanics",
                    "Thermodynamics",
                    "Electromagnetism"
                ],
                correct: 1
            },
            {
                question: "What is the half-life of Carbon-14?",
                options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
                correct: 0
            },
            {
                question: "What is the Chandrasekhar limit?",
                options: [
                    "Speed of light limit",
                    "Mass limit for white dwarfs",
                    "Temperature of absolute zero",
                    "Size of black holes"
                ],
                correct: 1
            },
            {
                question: "What is RNA's function in protein synthesis?",
                options: [
                    "Energy storage",
                    "Genetic information transfer",
                    "Cell structure",
                    "Waste removal"
                ],
                correct: 1
            },
            {
                question: "What is entropy in thermodynamics?",
                options: [
                    "Total energy",
                    "Disorder measure",
                    "Heat capacity",
                    "Work done"
                ],
                correct: 1
            },
            {
                question: "What are quarks?",
                options: [
                    "Types of atoms",
                    "Elementary particles",
                    "Chemical bonds",
                    "Energy waves"
                ],
                correct: 1
            },
            {
                question: "What is the Pauli Exclusion Principle?",
                options: [
                    "Energy conservation",
                    "No two electrons can have identical quantum states",
                    "Light behaves as waves",
                    "Matter cannot be destroyed"
                ],
                correct: 1
            },
            {
                question: "What is the function of ribosomes?",
                options: [
                    "DNA replication",
                    "Protein synthesis",
                    "Energy production",
                    "Waste removal"
                ],
                correct: 1
            }
        ]
    },
    technology: {
        easy: [
            {
                question: "What does CPU stand for?",
                options: [
                    "Central Processing Unit",
                    "Computer Personal Unit",
                    "Central Program Utility",
                    "Computer Processing Utility"
                ],
                correct: 0
            },
            {
                question: "What does WWW stand for?",
                options: [
                    "World Wide Web",
                    "World Web Wide",
                    "Web World Wide",
                    "Wide World Web"
                ],
                correct: 0
            },
            {
                question: "What is the brain of a computer?",
                options: ["Monitor", "Keyboard", "CPU", "Mouse"],
                correct: 2
            },
            {
                question: "What does RAM stand for?",
                options: [
                    "Random Access Memory",
                    "Read Access Memory",
                    "Run Access Memory",
                    "Rapid Access Memory"
                ],
                correct: 0
            },
            {
                question: "What is a browser?",
                options: [
                    "Hardware device",
                    "Software to access internet",
                    "Operating system",
                    "Type of memory"
                ],
                correct: 1
            },
            {
                question: "What does USB stand for?",
                options: [
                    "Universal Serial Bus",
                    "United Serial Bus",
                    "Universal System Bus",
                    "United System Bus"
                ],
                correct: 0
            },
            {
                question: "What is an operating system?",
                options: [
                    "Hardware component",
                    "System software",
                    "Application software",
                    "Programming language"
                ],
                correct: 1
            },
            {
                question: "What is the main function of a hard drive?",
                options: ["Processing", "Storage", "Display", "Input"],
                correct: 1
            },
            {
                question: "What does PDF stand for?",
                options: [
                    "Portable Document Format",
                    "Print Document Format",
                    "Personal Document Format",
                    "Public Document Format"
                ],
                correct: 0
            },
            {
                question: "What is Google Chrome?",
                options: ["Operating System", "Web Browser", "Search Engine", "Email Client"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "What programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language",
                    "High Tech Modern Language",
                    "Home Tool Markup Language",
                    "Hyperlinks and Text Markup Language"
                ],
                correct: 0
            },
            {
                question: "What is the main function of an IP address?",
                options: [
                    "Store data",
                    "Identify devices on network",
                    "Process information",
                    "Display graphics"
                ],
                correct: 1
            },
            {
                question: "What does SQL stand for?",
                options: [
                    "Structured Query Language",
                    "Simple Query Language",
                    "Standard Query Language",
                    "System Query Language"
                ],
                correct: 0
            },
            {
                question: "What is Python?",
                options: [
                    "Operating System",
                    "Programming Language",
                    "Web Browser",
                    "Database"
                ],
                correct: 1
            },
            {
                question: "What is cloud computing?",
                options: [
                    "Weather prediction",
                    "Internet-based computing",
                    "Sky photography",
                    "Airplane technology"
                ],
                correct: 1
            },
            {
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface",
                    "Advanced Programming Integration",
                    "Automated Program Interface",
                    "Application Process Integration"
                ],
                correct: 0
            },
            {
                question: "What is a firewall?",
                options: [
                    "Physical barrier",
                    "Network security system",
                    "Type of virus",
                    "Hardware component"
                ],
                correct: 1
            },
            {
                question: "What does VPN stand for?",
                options: [
                    "Virtual Private Network",
                    "Very Private Network",
                    "Visual Private Network",
                    "Virtual Public Network"
                ],
                correct: 0
            },
            {
                question: "What is machine learning?",
                options: [
                    "Teaching machines manually",
                    "AI that learns from data",
                    "Robot construction",
                    "Computer assembly"
                ],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                correct: 1
            },
            {
                question: "What is blockchain?",
                options: [
                    "A type of cryptocurrency",
                    "Distributed ledger technology",
                    "Programming language",
                    "Database system"
                ],
                correct: 1
            },
            {
                question: "What does REST API stand for?",
                options: [
                    "Representational State Transfer",
                    "Remote State Transfer",
                    "Real Estate Transfer",
                    "Reactive State Transfer"
                ],
                correct: 0
            },
            {
                question: "What is a neural network?",
                options: [
                    "Internet connection",
                    "Computing system inspired by biological neurons",
                    "Type of computer virus",
                    "Network protocol"
                ],
                correct: 1
            },
            {
                question: "What is quantum computing?",
                options: [
                    "Very fast classical computing",
                    "Computing using quantum mechanics",
                    "Cloud computing",
                    "Parallel processing"
                ],
                correct: 1
            },
            {
                question: "What is Docker?",
                options: [
                    "Programming language",
                    "Containerization platform",
                    "Database system",
                    "Operating system"
                ],
                correct: 1
            },
            {
                question: "What is the CAP theorem?",
                options: [
                    "Computer algorithm principle",
                    "Distributed systems consistency model",
                    "Programming paradigm",
                    "Network protocol"
                ],
                correct: 1
            },
            {
                question: "What is Kubernetes?",
                options: [
                    "Programming language",
                    "Container orchestration system",
                    "Database",
                    "Web framework"
                ],
                correct: 1
            },
            {
                question: "What is Big O notation used for?",
                options: [
                    "Measuring storage",
                    "Algorithm complexity analysis",
                    "Network speed",
                    "Code quality"
                ],
                correct: 1
            },
            {
                question: "What is GraphQL?",
                options: [
                    "Graph database",
                    "Query language for APIs",
                    "Programming language",
                    "Network protocol"
                ],
                correct: 1
            }
        ]
    },
    history: {
        easy: [
            {
                question: "Who discovered America?",
                options: ["Christopher Columbus", "Marco Polo", "Vasco da Gama", "Ferdinand Magellan"],
                correct: 0
            },
            {
                question: "In which year did India gain independence?",
                options: ["1945", "1947", "1950", "1952"],
                correct: 1
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
                correct: 1
            },
            {
                question: "In which city was the Taj Mahal built?",
                options: ["Delhi", "Jaipur", "Agra", "Mumbai"],
                correct: 2
            },
            {
                question: "Who was known as the Iron Man of India?",
                options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
                correct: 2
            },
            {
                question: "When did World War I begin?",
                options: ["1912", "1914", "1916", "1918"],
                correct: 1
            },
            {
                question: "Who built the pyramids of Egypt?",
                options: ["Romans", "Greeks", "Egyptians", "Persians"],
                correct: 2
            },
            {
                question: "What was the name of the ship that brought the Pilgrims to America?",
                options: ["Santa Maria", "Mayflower", "Beagle", "Victory"],
                correct: 1
            },
            {
                question: "Who was the first man in space?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
                correct: 2
            },
            {
                question: "In which country did the Renaissance begin?",
                options: ["France", "Italy", "Spain", "England"],
                correct: 1
            }
        ],
        medium: [
            {
                question: "Who was the first woman Prime Minister of India?",
                options: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sushma Swaraj"],
                correct: 0
            },
            {
                question: "When did the Berlin Wall fall?",
                options: ["1987", "1989", "1991", "1993"],
                correct: 1
            },
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                correct: 2
            },
            {
                question: "What ancient wonder of the world still stands today?",
                options: [
                    "Hanging Gardens of Babylon",
                    "Colossus of Rhodes",
                    "Great Pyramid of Giza",
                    "Lighthouse of Alexandria"
                ],
                correct: 2
            },
            {
                question: "Who was the longest-reigning British monarch before Elizabeth II?",
                options: ["Queen Victoria", "King George III", "King Edward VII", "Queen Mary"],
                correct: 0
            },
            {
                question: "What year did the French Revolution begin?",
                options: ["1776", "1789", "1799", "1804"],
                correct: 1
            },
            {
                question: "Who was the leader of the Soviet Union during World War II?",
                options: ["Vladimir Lenin", "Joseph Stalin", "Nikita Khrushchev", "Leon Trotsky"],
                correct: 1
            },
            {
                question: "What empire did Genghis Khan establish?",
                options: ["Ottoman Empire", "Roman Empire", "Mongol Empire", "Persian Empire"],
                correct: 2
            },
            {
                question: "When was the Magna Carta signed?",
                options: ["1066", "1215", "1415", "1515"],
                correct: 1
            },
            {
                question: "Who was the first emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                correct: 1
            }
        ],
        hard: [
            {
                question: "What was the Zimmermann Telegram?",
                options: [
                    "WWI German message to Mexico",
                    "WWII surrender document",
                    "Cold War communication",
                    "Treaty of Versailles clause"
                ],
                correct: 0
            },
            {
                question: "What was the Congress of Vienna?",
                options: [
                    "Scientific conference",
                    "Post-Napoleonic peace conference",
                    "Religious council",
                    "Trade agreement"
                ],
                correct: 1
            },
            {
                question: "Who was the last Byzantine Emperor?",
                options: [
                    "Justinian I",
                    "Constantine XI",
                    "Heraclius",
                    "Alexios I"
                ],
                correct: 1
            },
            {
                question: "What was the Hundred Years' War about?",
                options: [
                    "Religious conflict",
                    "English-French territorial dispute",
                    "Trade routes",
                    "Colonial expansion"
                ],
                correct: 1
            },
            {
                question: "What was the Meiji Restoration?",
                options: [
                    "Chinese dynasty change",
                    "Japanese modernization period",
                    "Korean independence movement",
                    "Vietnamese reformation"
                ],
                correct: 1
            },
            {
                question: "What was the Treaty of Tordesillas?",
                options: [
                    "Peace treaty ending WWI",
                    "Division of New World between Spain and Portugal",
                    "European trade agreement",
                    "Religious settlement"
                ],
                correct: 1
            },
            {
                question: "Who led the Taiping Rebellion?",
                options: [
                    "Sun Yat-sen",
                    "Hong Xiuquan",
                    "Mao Zedong",
                    "Chiang Kai-shek"
                ],
                correct: 1
            },
            {
                question: "What was the Scramble for Africa?",
                options: [
                    "African independence movement",
                    "European colonization of Africa",
                    "Trans-Saharan trade",
                    "African cultural renaissance"
                ],
                correct: 1
            },
            {
                question: "What was the Defenestration of Prague?",
                options: [
                    "Peace treaty",
                    "Event that started Thirty Years' War",
                    "Religious reformation",
                    "Architectural movement"
                ],
                correct: 1
            },
            {
                question: "What was the Investiture Controversy?",
                options: [
                    "Economic dispute",
                    "Conflict between Church and State over appointments",
                    "Military strategy",
                    "Artistic movement"
                ],
                correct: 1
            }
        ]
    },
    geography: {
        easy: [
            {
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
                correct: 2
            },
            {
                question: "Which is the largest continent?",
                options: ["Africa", "Asia", "Europe", "North America"],
                correct: 1
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                correct: 1
            },
            {
                question: "Which ocean is the largest?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correct: 3
            },
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            },
            {
                question: "Which country has the most population?",
                options: ["India", "China", "USA", "Indonesia"],
                correct: 0
            },
            {
                question: "What is the smallest continent?",
                options: ["Europe", "Australia", "Antarctica", "South America"],
                correct: 1
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
                correct: 0
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                correct: 2
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Thailand", "Japan", "South Korea"],
                correct: 2
            }
        ],
        medium: [
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
                correct: 2
            },
            {
                question: "Which African country has the largest population?",
                options: ["Egypt", "South Africa", "Nigeria", "Ethiopia"],
                correct: 2
            },
            {
                question: "What is the driest place on Earth?",
                options: ["Death Valley", "Sahara Desert", "Atacama Desert", "Arabian Desert"],
                correct: 2
            },
            {
                question: "Which country has the most time zones?",
                options: ["Russia", "USA", "China", "France"],
                correct: 3
            },
            {
                question: "What is the deepest point in the ocean?",
                options: [
                    "Puerto Rico Trench",
                    "Java Trench",
                    "Mariana Trench",
                    "Tonga Trench"
                ],
                correct: 2
            },
            {
                question: "Which European country has the longest coastline?",
                options: ["Norway", "Greece", "Italy", "Spain"],
                correct: 0
            },
            {
                question: "What is the largest island in the world?",
                options: ["New Guinea", "Borneo", "Madagascar", "Greenland"],
                correct: 3
            },
            {
                question: "Which South American country does not border Brazil?",
                options: ["Chile", "Peru", "Argentina", "Paraguay"],
                correct: 0
            },
            {
                question: "What is the highest capital city in the world?",
                options: ["Quito", "Bogota", "La Paz", "Kathmandu"],
                correct: 2
            },
            {
                question: "Which strait separates Europe from Africa?",
                options: [
                    "Strait of Gibraltar",
                    "Bosphorus Strait",
                    "Strait of Hormuz",
                    "Strait of Malacca"
                ],
                correct: 0
            }
        ],
        hard: [
            {
                question: "What is the antipode of New Zealand's North Island?",
                options: ["Spain", "Portugal", "Morocco", "Algeria"],
                correct: 0
            },
            {
                question: "Which country has the most neighbors?",
                options: ["Russia", "China", "Brazil", "Germany"],
                correct: 1
            },
            {
                question: "What is the Tropic of Capricorn's latitude?",
                options: ["23.5°N", "23.5°S", "66.5°N", "66.5°S"],
                correct: 1
            },
            {
                question: "Which landlocked country is doubly landlocked?",
                options: ["Uzbekistan", "Liechtenstein", "Nepal", "Mongolia"],
                correct: 1
            },
            {
                question: "What percentage of Earth's surface is covered by water?",
                options: ["61%", "71%", "81%", "91%"],
                correct: 1
            },
            {
                question: "Which is the only sea without any coastline?",
                options: ["Dead Sea", "Caspian Sea", "Sargasso Sea", "Aral Sea"],
                correct: 2
            },
            {
                question: "What is the Ring of Fire?",
                options: [
                    "Desert region",
                    "Volcanic belt around Pacific",
                    "Meteor crater",
                    "Ocean current"
                ],
                correct: 1
            },
            {
                question: "Which country has the most lakes?",
                options: ["Finland", "Sweden", "Canada", "Russia"],
                correct: 2
            },
            {
                question: "What is a exclave?",
                options: [
                    "Mountain peak",
                    "Territory separated from main part",
                    "Type of island",
                    "Desert formation"
                ],
                correct: 1
            },
            {
                question: "Which tectonic plate is the largest?",
                options: ["Pacific Plate", "North American Plate", "Eurasian Plate", "African Plate"],
                correct: 0
            }
        ]
    }
};
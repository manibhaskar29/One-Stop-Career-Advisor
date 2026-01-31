// Comprehensive quiz questions for aptitude assessment
// Categories: logical, subject, personality, career

const quizQuestions = [
    // LOGICAL REASONING QUESTIONS (Questions 1-10)
    {
        category: 'logical',
        question: 'If A is taller than B, and B is taller than C, then:',
        options: [
            {
                text: 'A is definitely taller than C',
                weight: { science: 8, commerce: 8, arts: 6, vocational: 5 }
            },
            {
                text: 'C is taller than A',
                weight: { science: 2, commerce: 2, arts: 2, vocational: 2 }
            },
            {
                text: 'A and C have the same height',
                weight: { science: 3, commerce: 3, arts: 3, vocational: 3 }
            },
            {
                text: 'Cannot be determined',
                weight: { science: 4, commerce: 4, arts: 5, vocational: 4 }
            }
        ],
        targetClass: 'both'
    },
    {
        category: 'logical',
        question: 'What comes next in the series: 2, 6, 12, 20, 30, ?',
        options: [
            { text: '36', weight: { science: 3, commerce: 3, arts: 2, vocational: 2 } },
            { text: '40', weight: { science: 4, commerce: 4, arts: 3, vocational: 3 } },
            { text: '42', weight: { science: 10, commerce: 9, arts: 6, vocational: 5 } },
            { text: '44', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'logical',
        question: 'In a code language, if CAT = 24, DOG = 26, what is BIRD?',
        options: [
            { text: '40', weight: { science: 8, commerce: 9, arts: 7, vocational: 6 } },
            { text: '38', weight: { science: 3, commerce: 3, arts: 3, vocational: 3 } },
            { text: '42', weight: { science: 4, commerce: 4, arts: 4, vocational: 4 } },
            { text: '36', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'logical',
        question: 'A cube is painted red on all sides and then cut into 27 equal cubes. How many cubes have no red face?',
        options: [
            { text: '1', weight: { science: 9, commerce: 7, arts: 5, vocational: 4 } },
            { text: '6', weight: { science: 3, commerce: 3, arts: 3, vocational: 3 } },
            { text: '8', weight: { science: 4, commerce: 4, arts: 4, vocational: 4 } },
            { text: '12', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } }
        ],
        targetClass: '12'
    },
    {
        category: 'logical',
        question: 'If all roses are flowers and some flowers are red, then:',
        options: [
            { text: 'All roses are red', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } },
            { text: 'Some roses may be red', weight: { science: 9, commerce: 8, arts: 7, vocational: 6 } },
            { text: 'No roses are red', weight: { science: 1, commerce: 1, arts: 1, vocational: 1 } },
            { text: 'Cannot be determined', weight: { science: 4, commerce: 4, arts: 5, vocational: 5 } }
        ],
        targetClass: 'both'
    },

    // SUBJECT INCLINATION QUESTIONS (Questions 6-20)
    {
        category: 'subject',
        question: 'Which subject do you find most interesting?',
        options: [
            { text: 'Mathematics and Physics', weight: { science: 10, commerce: 4, arts: 2, vocational: 3 } },
            { text: 'Business Studies and Economics', weight: { science: 2, commerce: 10, arts: 4, vocational: 5 } },
            { text: 'History and Literature', weight: { science: 2, commerce: 3, arts: 10, vocational: 4 } },
            { text: 'Practical skills and crafts', weight: { science: 3, commerce: 4, arts: 5, vocational: 10 } }
        ],
        targetClass: '10'
    },
    {
        category: 'subject',
        question: 'You enjoy solving:',
        options: [
            { text: 'Complex mathematical equations', weight: { science: 10, commerce: 6, arts: 2, vocational: 3 } },
            { text: 'Business case studies', weight: { science: 3, commerce: 10, arts: 4, vocational: 5 } },
            { text: 'Analyzing literature and writing essays', weight: { science: 2, commerce: 4, arts: 10, vocational: 4 } },
            { text: 'Hands-on practical problems', weight: { science: 4, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'subject',
        question: 'In a group project, you prefer to:',
        options: [
            { text: 'Handle technical/analytical tasks', weight: { science: 10, commerce: 6, arts: 4, vocational: 5 } },
            { text: 'Manage budgets and resources', weight: { science: 4, commerce: 10, arts: 5, vocational: 6 } },
            { text: 'Research and write content', weight: { science: 3, commerce: 5, arts: 10, vocational: 4 } },
            { text: 'Build or create something practical', weight: { science: 5, commerce: 4, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'subject',
        question: 'What type of reading do you prefer?',
        options: [
            { text: 'Scientific journals and research papers', weight: { science: 10, commerce: 4, arts: 5, vocational: 3 } },
            { text: 'Business magazines and financial news', weight: { science: 3, commerce: 10, arts: 4, vocational: 5 } },
            { text: 'Novels, poetry, and historical texts', weight: { science: 2, commerce: 3, arts: 10, vocational: 4 } },
            { text: 'Technical manuals and how-to guides', weight: { science: 5, commerce: 4, arts: 3, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'subject',
        question: 'Which laboratory activity appeals to you most?',
        options: [
            { text: 'Chemistry experiments', weight: { science: 10, commerce: 3, arts: 2, vocational: 4 } },
            { text: 'Computer programming labs', weight: { science: 9, commerce: 7, arts: 3, vocational: 8 } },
            { text: 'Language labs and debate practice', weight: { science: 2, commerce: 5, arts: 10, vocational: 4 } },
            { text: 'Workshop and hands-on skills training', weight: { science: 4, commerce: 4, arts: 3, vocational: 10 } }
        ],
        targetClass: '12'
    },

    // PERSONALITY TRAITS QUESTIONS (Questions 11-25)
    {
        category: 'personality',
        question: 'How do you approach a new challenge?',
        options: [
            { text: 'Analyze it systematically and create a plan', weight: { science: 9, commerce: 8, arts: 6, vocational: 6 } },
            { text: 'Calculate risks and benefits first', weight: { science: 6, commerce: 10, arts: 5, vocational: 7 } },
            { text: 'Think creatively about different approaches', weight: { science: 5, commerce: 6, arts: 10, vocational: 7 } },
            { text: 'Jump in and learn by doing', weight: { science: 4, commerce: 5, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'personality',
        question: 'In your free time, you prefer to:',
        options: [
            { text: 'Do science experiments or coding projects', weight: { science: 10, commerce: 4, arts: 3, vocational: 5 } },
            { text: 'Read about business or start small ventures', weight: { science: 3, commerce: 10, arts: 4, vocational: 6 } },
            { text: 'Read books, write, or engage in arts', weight: { science: 2, commerce: 3, arts: 10, vocational: 5 } },
            { text: 'Build things or work on practical projects', weight: { science: 5, commerce: 4, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'personality',
        question: 'Which best describes your thinking style?',
        options: [
            { text: 'Logical and analytical', weight: { science: 10, commerce: 7, arts: 4, vocational: 5 } },
            { text: 'Strategic and goal-oriented', weight: { science: 6, commerce: 10, arts: 6, vocational: 7 } },
            { text: 'Creative and imaginative', weight: { science: 4, commerce: 5, arts: 10, vocational: 6 } },
            { text: 'Practical and solution-focused', weight: { science: 5, commerce: 6, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'personality',
        question: 'You feel most accomplished when:',
        options: [
            { text: 'Solving a complex problem or discovering something', weight: { science: 10, commerce: 6, arts: 5, vocational: 5 } },
            { text: 'Achieving a financial or business goal', weight: { science: 4, commerce: 10, arts: 4, vocational: 6 } },
            { text: 'Creating something artistic or helping others', weight: { science: 3, commerce: 4, arts: 10, vocational: 5 } },
            { text: 'Building or fixing something useful', weight: { science: 5, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'personality',
        question: 'How do you prefer to work?',
        options: [
            { text: 'Independently on research or analysis', weight: { science: 9, commerce: 6, arts: 6, vocational: 5 } },
            { text: 'Leading teams toward a common goal', weight: { science: 5, commerce: 10, arts: 7, vocational: 7 } },
            { text: 'Collaboratively in creative projects', weight: { science: 4, commerce: 6, arts: 10, vocational: 6 } },
            { text: 'With my hands on practical tasks', weight: { science: 5, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },

    // CAREER INTEREST QUESTIONS (Questions 16-30)
    {
        category: 'career',
        question: 'Which career path sounds most appealing?',
        options: [
            { text: 'Engineer, Doctor, or Scientist', weight: { science: 10, commerce: 2, arts: 2, vocational: 3 } },
            { text: 'Entrepreneur, CA, or Manager', weight: { science: 2, commerce: 10, arts: 3, vocational: 5 } },
            { text: 'Teacher, Lawyer, or Journalist', weight: { science: 2, commerce: 4, arts: 10, vocational: 4 } },
            { text: 'Technician, Chef, or Designer', weight: { science: 3, commerce: 4, arts: 5, vocational: 10 } }
        ],
        targetClass: '10'
    },
    {
        category: 'career',
        question: 'What work environment appeals to you?',
        options: [
            { text: 'Laboratory or research facility', weight: { science: 10, commerce: 3, arts: 3, vocational: 4 } },
            { text: 'Corporate office or business setting', weight: { science: 3, commerce: 10, arts: 4, vocational: 5 } },
            { text: 'School, court, or media house', weight: { science: 2, commerce: 4, arts: 10, vocational: 4 } },
            { text: 'Workshop, kitchen, or studio', weight: { science: 3, commerce: 4, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'What type of impact do you want to make?',
        options: [
            { text: 'Advance technology or medical science', weight: { science: 10, commerce: 4, arts: 5, vocational: 4 } },
            { text: 'Build successful businesses and create jobs', weight: { science: 3, commerce: 10, arts: 4, vocational: 6 } },
            { text: 'Educate people or advocate for justice', weight: { science: 3, commerce: 4, arts: 10, vocational: 4 } },
            { text: 'Create practical solutions to everyday problems', weight: { science: 5, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'Which skills do you want to develop most?',
        options: [
            { text: 'Technical and research skills', weight: { science: 10, commerce: 5, arts: 4, vocational: 5 } },
            { text: 'Business and management skills', weight: { science: 4, commerce: 10, arts: 5, vocational: 6 } },
            { text: 'Communication and creative skills', weight: { science: 3, commerce: 5, arts: 10, vocational: 5 } },
            { text: 'Practical and hands-on skills', weight: { science: 4, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'What motivates you in a career?',
        options: [
            { text: 'Solving complex problems and innovation', weight: { science: 10, commerce: 6, arts: 5, vocational: 5 } },
            { text: 'Financial success and growth opportunities', weight: { science: 4, commerce: 10, arts: 4, vocational: 7 } },
            { text: 'Helping others and making social impact', weight: { science: 4, commerce: 5, arts: 10, vocational: 5 } },
            { text: 'Creating tangible results and products', weight: { science: 5, commerce: 6, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },

    // Additional questions for depth (21-30)
    {
        category: 'logical',
        question: 'If the day before yesterday was Thursday, what will be the day after tomorrow?',
        options: [
            { text: 'Sunday', weight: { science: 3, commerce: 3, arts: 3, vocational: 3 } },
            { text: 'Monday', weight: { science: 9, commerce: 8, arts: 7, vocational: 6 } },
            { text: 'Tuesday', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } },
            { text: 'Wednesday', weight: { science: 1, commerce: 1, arts: 1, vocational: 1 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'subject',
        question: 'Which topic would you choose for a project?',
        options: [
            { text: 'Renewable energy solutions', weight: { science: 10, commerce: 5, arts: 4, vocational: 6 } },
            { text: 'Impact of social media on business', weight: { science: 4, commerce: 10, arts: 6, vocational: 5 } },
            { text: 'Cultural heritage and preservation', weight: { science: 3, commerce: 4, arts: 10, vocational: 5 } },
            { text: 'Sustainable farming techniques', weight: { science: 5, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: '12'
    },
    {
        category: 'personality',
        question: 'When faced with failure, you:',
        options: [
            { text: 'Analyze what went wrong and try again', weight: { science: 9, commerce: 8, arts: 6, vocational: 6 } },
            { text: 'Reassess the strategy and pivot if needed', weight: { science: 6, commerce: 10, arts: 7, vocational: 7 } },
            { text: 'Reflect and find creative alternatives', weight: { science: 5, commerce: 6, arts: 10, vocational: 6 } },
            { text: 'Learn from experience and move forward', weight: { science: 6, commerce: 7, arts: 6, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'In 10 years, you see yourself as:',
        options: [
            { text: 'A researcher or specialist in my field', weight: { science: 10, commerce: 5, arts: 6, vocational: 5 } },
            { text: 'Running my own successful business', weight: { science: 4, commerce: 10, arts: 5, vocational: 7 } },
            { text: 'An influential writer, teacher, or advocate', weight: { science: 3, commerce: 5, arts: 10, vocational: 4 } },
            { text: 'A skilled professional with expertise', weight: { science: 5, commerce: 6, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'subject',
        question: 'You find satisfaction in:',
        options: [
            { text: 'Understanding how things work', weight: { science: 10, commerce: 6, arts: 5, vocational: 7 } },
            { text: 'Planning and organizing events', weight: { science: 4, commerce: 10, arts: 6, vocational: 6 } },
            { text: 'Expressing ideas through words or art', weight: { science: 3, commerce: 4, arts: 10, vocational: 5 } },
            { text: 'Making things with your own hands', weight: { science: 5, commerce: 4, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'What kind of problems do you want to solve professionally?',
        options: [
            { text: 'Scientific and technological challenges', weight: { science: 10, commerce: 4, arts: 3, vocational: 5 } },
            { text: 'Business and economic issues', weight: { science: 3, commerce: 10, arts: 4, vocational: 6 } },
            { text: 'Social and humanitarian problems', weight: { science: 3, commerce: 4, arts: 10, vocational: 5 } },
            { text: 'Practical everyday challenges', weight: { science: 5, commerce: 5, arts: 4, vocational: 10 } }
        ],
        targetClass: '12'
    },
    {
        category: 'personality',
        question: 'Your ideal weekend activity is:',
        options: [
            { text: 'Visiting a science museum or planetarium', weight: { science: 10, commerce: 4, arts: 5, vocational: 4 } },
            { text: 'Attending a business seminar or networking event', weight: { science: 3, commerce: 10, arts: 4, vocational: 5 } },
            { text: 'Going to art galleries or cultural events', weight: { science: 2, commerce: 3, arts: 10, vocational: 5 } },
            { text: 'DIY projects or learning a new skill', weight: { science: 4, commerce: 4, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'logical',
        question: 'Find the odd one out: Triangle, Square, Circle, Rectangle',
        options: [
            { text: 'Triangle', weight: { science: 3, commerce: 3, arts: 3, vocational: 3 } },
            { text: 'Square', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } },
            { text: 'Circle', weight: { science: 9, commerce: 8, arts: 7, vocational: 6 } },
            { text: 'Rectangle', weight: { science: 2, commerce: 2, arts: 2, vocational: 2 } }
        ],
        targetClass: 'both'
    },
    {
        category: 'career',
        question: 'Which government exam interests you most?',
        options: [
            { text: 'ISRO, DRDO, or Medical entrance exams', weight: { science: 10, commerce: 3, arts: 3, vocational: 4 } },
            { text: 'UPSC, Banking, or MBA entrance exams', weight: { science: 3, commerce: 10, arts: 6, vocational: 5 } },
            { text: 'Teaching, Law, or Civil Services exams', weight: { science: 3, commerce: 5, arts: 10, vocational: 4 } },
            { text: 'Technical certifications or skill-based exams', weight: { science: 5, commerce: 4, arts: 4, vocational: 10 } }
        ],
        targetClass: '12'
    },
    {
        category: 'subject',
        question: 'What excites you most about learning?',
        options: [
            { text: 'Discovering scientific facts and theories', weight: { science: 10, commerce: 5, arts: 5, vocational: 5 } },
            { text: 'Understanding market trends and economics', weight: { science: 4, commerce: 10, arts: 5, vocational: 6 } },
            { text: 'Exploring human behavior and society', weight: { science: 4, commerce: 5, arts: 10, vocational: 5 } },
            { text: 'Gaining practical, applicable skills', weight: { science: 5, commerce: 6, arts: 5, vocational: 10 } }
        ],
        targetClass: 'both'
    }
];

export default quizQuestions;

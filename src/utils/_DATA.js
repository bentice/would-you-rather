let users = {
  obiwan: {
    id: 'obiwan',
    name: 'Obi-Wan Kenobi',
    avatarURL: "https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  skywalker: {
    id: 'skywalker',
    name: 'Luke Skywalker',
    avatarURL: "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  vader: {
    id: 'vader',
    name: 'Darth Vader',
    avatarURL: "https://upload.wikimedia.org/wikipedia/en/7/76/Darth_Vader.jpg",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'obiwan',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['obiwan'],
      text: 'live on tatooine',
    },
    optionTwo: {
      votes: [],
      text: 'live on the Death Star'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'vader',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a jedi knight',
    },
    optionTwo: {
      votes: ['vader', 'obiwan'],
      text: 'become a sith lord'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'obiwan',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'use your lightsaber',
    },
    optionTwo: {
      votes: ['obiwan'],
      text: 'use hypnosis'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'skywalker',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a called Obi-Wan',
    },
    optionTwo: {
      votes: ['obiwan'],
      text: 'be a called Ben'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'skywalker',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['skywalker'],
      text: 'light side of the Force',
    },
    optionTwo: {
      votes: ['vader'],
      text: 'dark side of the Force'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'vader',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['vader'],
      text: 'wear black',
    },
    optionTwo: {
      votes: ['skywalker'],
      text: 'wear a robe'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}
function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

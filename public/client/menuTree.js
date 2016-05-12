const menuTree = {
  Text: {
    content: ''
  },

  Source: {
    randomWord: {
      partOfSpeech: '',
      length: 0
    },
    relatedWord: {
      relationship: ['synonym', 'antonym', 'rhyme'],
      target: 0
    },
    myFeed: {
      keyword: ''
    },
    randomTweet: {
      keyword: ''
    },
    news: {
      keyword: ''
    },
    emoji: {
      type: ['trendy', 'people', 'nature', 'happy', 'unhappy']
    },
    wordlist: {
      list: ['']
    }
  },

  Reaction: {
    emoji: null,
    casual: null,
    boring: null
  }
};

export default menuTree;
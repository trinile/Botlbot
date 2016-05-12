const menuTree = {
  // change these key names to be pretty strings like 'related word'
  Root: {
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

    Reaction: [
      'emoji',
      'casual',
      'boring'
    ]
  }
};

export default menuTree;
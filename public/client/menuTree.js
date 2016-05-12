const menuTree = {
  // change these key names to be pretty strings like 'related word'
  Root: {
    Text: {
      content: '',
      leaf: true
    },

    Source: {
      // randomWord: {
      //   SelectField: {
      //     children: ['adjective', 'adverb', 'noun', 'proper noun'],
      //     hintText: 'Part of Speech'
      //   },
      //   TextField: {
      //     length: 0
      //   },
      //   leaf: true
      // },
      'random word': {
        'part of speech': ['adjective', 'adverb', 'noun', 'proper noun'],
        'min length': 0,
        'max length': 0,
        leaf: true
      },
      relatedWord: {
        relationship: ['synonym', 'antonym', 'rhyme'],
        target: 0,
        leaf: true
      },
      myFeed: {
        keyword: '',
        leaf: true
      },
      'random tweet': {
        keyword: '',
        leaf: true
      },
      news: {
        keyword: '',
        leaf: true
      },
      emoji: {
        type: ['trendy', 'people', 'nature', 'happy', 'unhappy'],
        leaf: true
      },
      wordlist: {
        list: [''],
        leaf: true
      }
    },

    Reaction: {
      type: [
        'emoji',
        'casual',
        'boring'
      ],
      leaf: true  
    }
  }
};

export default menuTree;
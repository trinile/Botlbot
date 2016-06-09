const menuTree = {
  // change these key names to be pretty strings like 'related word'
  Root: {
    text: {
      content: '',
      leaf: true
    },

    source: {
      'random word': {
        'part of speech': ['adjective', 'adverb', 'noun', 'proper noun'],
        length: 0,
        leaf: true
      },
      'related word': {
        relationship: ['synonym', 'antonym', 'rhyme'],
        // target: null,
        keyword: '',
        leaf: true
      },
      'my feed': {
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
        keyword: '',
        leaf: true
      },
      wordlist: {
        list: null,
        leaf: true
      }
    },

    // reaction: {
    //   type: [
    //     'emoji',
    //     'casual',
    //     'boring'
    //   ],
    //   target: null,
    //   leaf: true
    // }
  }
};

export default menuTree;

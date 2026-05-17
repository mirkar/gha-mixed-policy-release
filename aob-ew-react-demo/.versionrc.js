module.exports = {
  writerOpts: {
    reverse: true,
    commitsSort: false,
    linkReferences: false,
    transform: (commit) => {
      const cloned = { ...commit }

      if (cloned.subject) {
        cloned.subject = cloned.subject.replace(/\s+\(#\d+\)$/, '')
      }

      if (cloned.header) {
        cloned.header = cloned.header.replace(/\s+\(#\d+\)$/, '')
      }

      return cloned
    }
  },
  parserOpts: {
    headerPattern: /(?:\(Merged PR \d+: \))?([a-zA-Z]+)(?:\(([\w$.\-*\s]*)\))?\!?:(.*)/,
    breakingHeaderPattern: /(?:\(Merged PR \d+: \))?([a-zA-Z]+)(?:\(([\w$.\-*\s]*)\))?\!?!:(.*)/,
    headerCorrespondence: [
      'type',
      'scope',
      'subject'
    ]
  },
  types: [
    {
      type: 'feat',
      section: 'Features'
    },
    {
      type: 'fix',
      section: 'Bug Fixes'
    },
    {
      type: 'docs',
      section: 'Documentation'
    },
    {
      type: 'style',
      section: 'Styling'
    },
    {
      type: 'refactor',
      section: 'Refactors'
    },
    {
      type: 'perf',
      section: 'Performance'
    },
    {
      type: 'test',
      section: 'Tests'
    },
    {
      type: 'build',
      section: 'Build System'
    },
    {
      type: 'ci',
      section: 'CI',
      hidden: true
    },
    {
      type: 'chore',
      section: 'Chore',
      hidden: true
    },
    {
      type: 'revert',
      section: 'Reverts'
    }
  ],
}
phraseSets[0] = {
  "PhraseGroups" : [
    {
      "name" : "art-title",
      "Phrases" : [
        {"text" : "$general-noun;", "weight" : 1.0, "weightFactors" : ["art-title"], "isUnique" : false},
        {"text" : "$color;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "Untitled", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Experiment", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Sketch", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Idea", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Inspiration", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Thought", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Epiphany", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "review",
      "Phrases" : [
        {"text" : "$adjective;.", "weight" : 8.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "Nature is amazing.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "A real work of art.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "10/10.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "The pinnacle of human accomplishment.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "An emotional roller coaster.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Wow.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "A tasteful addition to any d&eacute;cor.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Yes.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Indeed.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "This made me reconsider $singular-noun-phrase-no-context;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Life is a gift.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Worth every penny.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "The massive scope hurts my brain.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Amateur.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Garbage.", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "price",
      "Phrases" : [
        {"text" : "Priceless", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Your soul", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "Five", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "No", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "A human sacrifice", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "A small country", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "50% off at selected stores", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "2 for the price of 1", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "color",
      "Phrases" : [
        {"text" : "red", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "orange", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "yellow", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "green", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "blue", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "purple", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "pink", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "adjective",
      "Phrases" : [
        {"text" : "$adverb; $adjective;", "weight" : 1.5, "weightFactors" : ["adverb"], "isUnique" : true},
        {"text" : "$adjective; and $adjective;", "weight" : 0.08, "weightFactors" : ["adjective"], "isUnique" : true},
        {"text" : "$adjective; yet $adjective;", "weight" : 0.08, "weightFactors" : ["adjective"], "isUnique" : true},
        {"text" : "revolutionary", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "thought-provoking", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "intellectual", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "visionary", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "profound", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "ground-breaking", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "inspirational", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "awe-inspiring", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "breathtaking", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "fascinating", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "beautiful", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "experimental", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "enlightening", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "outstanding", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "exciting", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "dramatic", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sensational", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "remarkable", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "phenomenal", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "captivating", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "riveting", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "compelling", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "thrilling", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "creative", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "controversial", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "mind-boggling", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "enthralling", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "minimalistic", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "unbelievable", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "powerful", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "philisophical", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "poignant", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "avant-garde", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "overwhelming", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "collaborative", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "contemporary", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "modern", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "inedible", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "vegan", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "delicate", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "genderless", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "abstract", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "cutting edge", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "spectacular", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "moving", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "stunning", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "miraculous", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "vivid", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "impressive", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "extraordinary", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "resonating", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "trippy", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "neat", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "scrumptious", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "soothing", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "striking", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "whimsical", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "interdisciplinary", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "meaningful", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "incredible", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "bold", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "deep", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "brilliant", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "new, yet familiar", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "spiritual", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "subtle", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "symbolic", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "exhilarating", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "art-type",
      "Phrases" : [
        {"text" : "$adjective; $art-type;", "weight" : 1.0, "weightFactors" : ["art-type"], "isUnique" : true},
        {"text" : "$art-type;/$art-type;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "masterpiece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "artistic breakthrough", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "piece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "painting", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "portrait", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "picture", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "landscape piece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "drawing", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sketch", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "watercolor piece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "print", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "illustration", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "artwork", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "photograph", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "artistic journey", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "mixed-media piece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "recycled art piece", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sculpture", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "two-dimensional sculpture", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "still art", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "forgery", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "self-portrait", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "oil painting", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "mural", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "experiment in $general-noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "art-story",
      "Phrases" : [
        {"text" : "inspired by $noun;", "weight" : 5.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "by a $artist;", "weight" : 4.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "by a renowned artist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "drawn while blindfolded", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "by an anonymous artist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "by a convicted criminal", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "created over the course of a year", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "painted yesterday", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sent from the future", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "found in a time capsule", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "created by humanity", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "drawn by a five-year-old", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "art-story-with-commas-or-no",
      "Phrases" : [
        {
          "weight" : 2.0,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : ""
        },
        {
          "weight" : 1.0,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : ", $art-story;,"
        }
      ]
    },
    {
      "name" : "adverb",
      "Phrases" : [
        {"text" : "truly", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "clearly", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "aptly", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "harshly", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "boldly", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "verb",
      "Phrases" : [
        {"text" : "$adverb; $verb;", "weight": 1.5, "weightFactors": ["adverb"], "isUnique" : true},
        {"text" : "$verb; and $verb;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "exposes", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reveals", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "comments on", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sparks conversation on", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reflects", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "depicts", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "explores", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "analyzes", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "evidences", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "raises questions about", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "makes a statement about", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "uncovers", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "considers", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "showcases", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "expresses", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "interprets", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reconsiders", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "upends our understanding of", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "transcends", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "provides thoughts on", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reinterprets", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "ponders", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "represents", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "contemplates", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "evokes", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "revolutionizes", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reinvents", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "embodies", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "pushes the boundaries of", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is an allegory of", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "symbolizes", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is a metaphor for", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is a $gerund; of", "weight" : 1.0, "weightFactors" : ["gerund"], "isUnique" : true}
      ]
    },
    {
      "name" : "backwards-verb",
      "Phrases" : [
        {"text" : "is exposed through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is revealed through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is commented on through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is reflected through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is depicted by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is explored through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is analyzed through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is evidenced by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is uncovered through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is considered through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is showcased by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is expressed through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is interpreted through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is reconsidered through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is transcended through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is reinterpreted through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is pondered through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is represented by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is contemplated through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is evoked by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is revolutionized through", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is reinvented by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is embodied by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "is symbolized by", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    
    {
      "name" : "gerund",
      "Phrases" : [
        {"text" : "$adjective; $gerund;", "weight": 0.35, "weightFactors": ["gerund"], "isUnique" : true},
        {"text" : "reflection", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "depiction", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "exploration", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "analyzation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "interpretation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "realization", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reinterpretation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "representation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "noun",
      "Phrases" : [
        {"text" : "$noun; and $noun;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "$singular-noun-phrase;", "weight" : 1.0, "weightFactors" : ["singular-noun-phrase-no-context"], "isUnique" : false},
        {"text" : "$general-noun;", "weight" : 1.0, "weightFactors" : ["general-noun"], "isUnique" : false}
      ]
    },
    {
      "name" : "noun-no-context",
      "Phrases" : [
        {"text" : "$noun; and $noun;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "$singular-noun-phrase-no-context;", "weight" : 1.0, "weightFactors" : ["singular-noun-phrase-no-context"], "isUnique" : false},
        {"text" : "$general-noun;", "weight" : 1.0, "weightFactors" : ["general-noun"], "isUnique" : false}
      ]
    },
    {
      "name" : "singular-noun-phrase",
      "Phrases" : [
        {"text" : "$singular-noun-phrase-no-context;", "weight" : 1.0, "weightFactors" : ["singular-noun-phrase-no-context"], "isUnique" : true},
        {"text" : "its own $general-noun-with-adjective-or-no;", "weight" : 5.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our own $general-noun-with-adjective-or-no;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the artist's $general-noun-with-adjective-or-no;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the $gerund; of $noun;", "weight" : 5.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "us", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "now", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "itself", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the self", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
      ]
    },
    {
      "name" : "singular-noun-phrase-no-context",
      "Phrases" : [
        {"text" : "our human weakness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our pursuit of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our quest for $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our place in society", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our modern society", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our place in the universe", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our purpose in life", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our culture", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our cultural values", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our cultural norms", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our generation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "our perception of reality", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "what it means to be alive", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "what it means to be human", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the human condition", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the nature of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the inner workings of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the idea of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the deeper meaning of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the beauty within $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the reality of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the meaning of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the truth of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the cultural meaning of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the concept of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the futility of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the fallacy of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the consequences of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the mundanity of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the illusion of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the significance of $noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the journey of $general-noun;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the universe", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the world", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the present", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the environment", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "the subconscious", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "human compassion", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "human knowledge", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "general-noun-with-adjective-or-no",
      "Phrases" : [
        {"text" : "$general-noun;", "weight": 1.0, "weightFactors": ["general-noun"], "isUnique" : true},
        {"text" : "$adjective; $general-noun;", "weight": 0.5, "weightFactors": ["general-noun"], "isUnique" : true}
      ]
    },
    {
      "name" : "general-noun",
      "Phrases" : [
        {"text" : "$gerund;", "weight" : 1.0, "weightFactors" : ["gerund"], "isUnique" : false},
        {"text" : "life", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "death", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "art", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "beauty", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "humanity", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "society", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "human nature", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "human endeavor", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "nature", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "nothingness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "reality", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "truth", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "consciousness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "religion", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "technology", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sorrow", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "existence", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "darkness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "consumerism", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "dreams", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "materialism", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "meaning", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "emotion", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "happiness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sadness", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "despair", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sorrow", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "grief", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "love", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "awe", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "fear", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "terror", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "joy", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "sensation", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "freedom", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "mortality", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "fragility", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "time", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "spirituality", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "energy", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "faith", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "technique",
      "Phrases" : [
        {"text" : "$color;", "weight" : 2.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "$adjective; $technique;", "weight" : 3.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "surrealism", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "irony", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "symbolism", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "allegory", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "composition", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "minimalism", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "contrast", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "artist",
      "Phrases" : [
        {"text" : "self-described $artist;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "master of $technique;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "$ist;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : false},
        {"text" : "renowned $artist;", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "ist",
      "Phrases" : [
        {"text" : "neo-$ist;", "weight" : 2.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "post-$ist;", "weight" : 2.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "non-conformist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "realist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "absurdist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "surrealist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "humanist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true},
        {"text" : "modernist", "weight" : 1.0, "weightFactors" : [ ], "isUnique" : true}
      ]
    },
    {
      "name" : "caption",
      "Phrases" : [
        {
          "weight" : 1.0,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;$art-story-with-commas-or-no; $verb; $noun;."
        },
        {
          "weight" : 1.0,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;$art-story-with-commas-or-no; $verb; $noun;, and $verb; $noun;."
        },
        {
          "weight" : 0.2,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;$art-story-with-commas-or-no; is $noun;."
        },
        {
          "weight" : 0.4,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "$noun-no-context; $backwards-verb; this $art-type;."
        },
        {
          "weight" : 0.4,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type; was $art-story;."
        },
        {
          "weight" : 0.4,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;'s $gerund; of $noun; $verb; $noun;."
        },
        {
          "weight" : 0.4,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;'s $gerund; of $noun; $verb; $noun;, and $verb; $noun;."
        },
        {
          "weight" : 0.2,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "This $art-type;$art-story-with-commas-or-no; $verb; $noun; through the use of $technique;."
        },
        {
          "weight" : 0.2,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "Through the use of $technique;, this $art-type;$art-story-with-commas-or-no; $verb; $noun;."
        },
        {
          "weight" : 0.3,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "$color; in this $art-type; $verb; $noun;."
        },
        {
          "weight" : 0.4,
          "weightFactors" : [],
          "isUnique" : false,
          "text" : "In this $art-type;, $noun; $backwards-verb; $technique;."
        }
      ]
    },
  ]
};


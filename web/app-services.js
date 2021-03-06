angular.module("boardello").factory('BoardApi', ['$resource',
  function ($resource) {
    return $resource('../api/boards/:boardId', {}, {
    });
  }
]);


angular.module("boardello").factory('CardApi', ['$resource',
  function ($resource) {
    return $resource('../api/cards/:cardId', {}, {
    });
  }
]);

angular.module("boardello").factory('DeckApi', ['$resource',
  function ($resource) {
    return $resource('../api/decks/:deckId', {}, {
    });
  }
]);


var App = {
	'version': 1,
	'ANTI_CHEAT_CODE': 'Fe12NAfA3R6z4k0z',
	'SALT': 'af0ik392jrmt0nsfdghy0',
	'RAND_MAX': 2147483646,
	'savegame': [],
	'heroes': [
		{ id: 2, name: "Tree Beast", epicLevel: 0, efficiency: 2.484e63 / 2541 },
		{ id: 3, name: "Ivan, the Drunken Brawler", epicLevel: 0, efficiency: 5.530e63 / 2529 },
		{ id: 4, name: "Brittany, the Beach Princess", epicLevel: 0, efficiency: 7.501e63 / 2513 },
		{ id: 5, name: "The Wandering Fisherman", epicLevel: 0, efficiency: 3.212e61 / 2412 },
		{ id: 6, name: "Betty Clicker", epicLevel: 0, efficiency: 8.903e55 / 2199},
		{ id: 7, name: "The Masked Samurai", epicLevel: 0, efficiency: 1.056e64 / 2450},
		{ id: 8, name: "Leon", epicLevel: 0, efficiency: 2.012e61 / 2337},
		{ id: 9, name: "The Great Forest Seer", epicLevel: 0, efficiency: 3.736e63 / 2387},
		{ id: 10, name: "Alexa, the Assassin", epicLevel: 0, efficiency: 3.173e59 / 2222},
		{ id: 11, name: "Natalia, Ice Apprentice", epicLevel: 0, efficiency: 6.228e62 / 2306 },
		{ id: 12, name: "Mercedes, Duchess of Blades", epicLevel: 0, efficiency: 2.052e62 / 2259 },
		{ id: 13, name: "Bobby, Bounty Hunter", epicLevel: 0, efficiency: 4.364e61 / 2205 },
		{ id: 14, name: "Broyle Lindoven, Fire Mage", epicLevel: 0, efficiency: 8.683e58 / 2083 },
		{ id: 15, name: "Sir George II, Kings Guard", epicLevel: 0, efficiency: 8.899e60 / 2119 },
		{ id: 16, name: "King Midas", epicLevel: 0, efficiency: 8.061e52 / 1813 },
		{ id: 17, name: "Referi Jerator, Ice Wizard", epicLevel: 0, efficiency: 1.604e61 / 2063 },
		{ id: 18, name: "Abaddon", epicLevel: 0, efficiency: 5.978e59 / 1982 },
		{ id: 19, name: "Ma Zhu", epicLevel: 0, efficiency: 2.553e61 / 2006 },
		{ id: 20, name: "Amenhotep", epicLevel: 0, efficiency: 1.752e55 / 1764 },
		{ id: 21, name: "Beastlord", epicLevel: 0, efficiency: 1.914e59 / 1864 },
		{ id: 22, name: "Athena, Goddess of War", epicLevel: 0, efficiency: 6.560e61 / 1900 },
		{ id: 23, name: "Aphrodite, Goddess of Love", epicLevel: 0, efficiency: 3.822e62 / 1872 },
		{ id: 24, name: "Shinatobe, Wind Deity", epicLevel: 0, efficiency: 2.830e61 / 1779 },
		{ id: 25, name: "Grant, the General", epicLevel: 0, efficiency: 1.562e61 / 1686 },
		{ id: 26, name: "Frostleaf", epicLevel: 0, efficiency: 1.107e63 / 1657 }
	],
	'nextHeroes': [],
	'sorting': false,
	'fromAntiCheatFormat': function(string) {
		var elements = string.split(App.ANTI_CHEAT_CODE);
		var data = App.unSprinkle(elements[0]);
		var hash = elements[1];
		var dataHash = App.getHash(data);
		if (dataHash = hash) return data;
		alert("Hash is bad");
	},
	'unSprinkle': function(string) {
		var array = string.split("");
		var result = [];
		var counter = 0;
		while (counter < array.length)
		{
			result[counter / 2] = array[counter];
			counter += 2;
		}
		return result.join("");
	},
	'getHash': function(string) {
		var charaters = string.split();
		charaters.sort();
		var sortedCharaters = charaters.join();
		return CryptoJS.MD5(sortedCharaters + App.SALT);
	},
	'decode': function(code) {
		var string = code;
		var antiCheatCodeIndex = string.search(App.ANTI_CHEAT_CODE);
		var antiCheatCodeExist = (antiCheatCodeIndex != -1);
		if (antiCheatCodeExist) string = App.fromAntiCheatFormat(string);
		return atob(string);
	},
	'rand': function () {
		App.savegame.epicHeroSeed = App.savegame.epicHeroSeed * 16807 % (App.RAND_MAX + 1);
		return App.savegame.epicHeroSeed;
	},
	'range': function (min, max) {
		return App.rand() % (max - min + 1) + min;
	},
	'integer': function (min, max) {
		if ( isNaN(max) ) {
			max = min;
			min = 0;
		}

		return Math.floor(App.range(min, max));
	},
	'getRandomGoldenHero': function (startingHeroId) {
		var heroId = startingHeroId;
		while ( heroId == startingHeroId ) {
			heroId = App.integer(2, 26);
		}
		return heroId;
	},
	'getNextHeroes': function (max) {
		var seed = App.savegame.epicHeroSeed;
		var lookupHero = {};

		for (var j = 0; j < App.heroes.length; j++) {
			lookupHero[App.heroes[j].id] = App.heroes[j];
		}

		var nextHeroes = [];
		for (var i = 0;i<max;i++) {
			nextHeroes[i] = lookupHero[App.getRandomGoldenHero()];
		}
		App.savegame.epicHeroSeed = seed;

		return nextHeroes;
	},
	'updateNextHeroes': function () {

		var nextHeroes = App.getNextHeroes(25);

		App.nextHeroes = nextHeroes;

		var $nextHeroes = $('#nextHeroes');

		$nextHeroes.empty();
		nextHeroes.forEach( function( hero ) {
			$nextHeroes.append( $('<li>').html( hero.name ) );
		});
		App.updateNextGild();
	},
	'addHero': function ( hero ) {
		var $deGildedHeroes = $('#deGildedHeroes');
		var deGildedHeroes = JSON.parse($deGildedHeroes.data('deGildedHeroes'));
		deGildedHeroes.push( hero );
		$deGildedHeroes.empty();
		if ($deGildedHeroes.css('display') == 'none')
			$deGildedHeroes.fadeIn(300);
		deGildedHeroes.forEach( function( hero ) {
			$deGildedHeroes.append( $('<li>').html( hero.name ) );
		});
		$('#spentSouls').html( deGildedHeroes.length * 2 + ' spent');
		$deGildedHeroes.data('deGildedHeroes', JSON.stringify(deGildedHeroes))
	},
	'updateNextGild': function () {
		var $heroes = $('#heroes'),
			$nextHeroes = $('#nextHeroes');

		$heroes.find('li').removeClass('gild');

		if ($heroes.find('li.degild')) {

			if ($heroes.find('li.degild .name').html() == $nextHeroes.find("li:first").html()) {
				var hero = $nextHeroes.find("li:first").html();
				var found = false;
				App.nextHeroes.forEach(function ( nextHero ) {

					if (! found) {
						if (hero != nextHero.name) {
							hero = nextHero.name;
							found = true;
						}
					}
				});

				if (found) {
					$heroes.find("li .name:contains('"+hero+"')").parent().addClass('gild');
				}
			}
			else {
				$heroes.find("li .name:contains('"+$nextHeroes.find("li:first").html()+"')").parent().addClass('gild');
			}
		}
		else {
			$heroes.find("li .name:contains('"+$nextHeroes.find("li:first").html()+"')").parent().addClass('gild');
		}
	},
	'getHeroByName': function( name ) {
		var found = false;
		var foundHero = false;
		App.heroes.forEach(function ( hero ) {
			if (! found) {
				if (name == hero.name) {
					foundHero = hero;
					found = true;
				}
			}
		});

		return foundHero;
	},
	'toggleSorting': function () {
		var $heroes = $('#heroes'),
			$sort = $('#sort');
		if (! App.sorting ) {
			$heroes.find('li').sort(function (b, a) {

				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.efficiency - +hero2.efficiency;
			}).appendTo( $heroes );

			$sort.removeClass('arrow-down').addClass('arrow-up');
			$sort.attr('title', 'Sort the heroes by normal order');

			App.sorting = true;
		}
		else {
			$heroes.find('li').sort(function (a, b) {

				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.id - +hero2.id;
			}).appendTo( $heroes );

			$sort.removeClass('arrow-up').addClass('arrow-down');
			$sort.attr('title', 'Sort the heroes by max efficiency');

			App.sorting = false;
		}
	},
	'init': function() {
		$('#decodeButton').click(function () {
			var $deGildedHeroes = $('#deGildedHeroes');
			$deGildedHeroes.empty();
			$deGildedHeroes.data('deGildedHeroes', JSON.stringify([]));
			App.savegame = JSON.parse( App.decode( $('#input').val() ) );
			App.start();
			ga('send', 'event', 'button', 'click', 'import');
		});

		$('#input').on('paste', function () {
			setTimeout(function () {
				var $deGildedHeroes = $('#deGildedHeroes');
				$deGildedHeroes.empty();
				$deGildedHeroes.data('deGildedHeroes', JSON.stringify([]));
				App.savegame = JSON.parse( App.decode( $('#input').val() ) );
				App.start();
				ga('send', 'event', 'textarea', 'paste', 'import');
			}, 50);
		});
	},
	'start': function() {
		var lookupSavedHero = {},
			$heroes = $('#heroes');

		$('.list, .floater').show();
		$('#import').hide();
		var savedHeroes = $.map(App.savegame.heroCollection.heroes, function(value) {
			return [value];
		});

		for (var i = 0; i < savedHeroes.length; i++) {
			lookupSavedHero[savedHeroes[i].id] = savedHeroes[i];
		}

		App.heroes.forEach(function ( hero ) {
			hero.epicLevel = lookupSavedHero[ hero.id ].epicLevel;
		});

		App.updateNextHeroes();

		rivets.binders.flash = function (el, value) {
			if (value == 0) {
				$(el).addClass( 'disabled' );
				$(el).removeClass('degild');
			}
			else
				$(el).removeClass( 'disabled' );

			if (! $(el).data('flashing') ) {
				$(el).data('flashing', true).fadeOut(300).fadeIn(300, function(){
					$(this).data('flashing', false);
				});
			}
		};

		App.heroesView = rivets.bind( $heroes, {
			heroes: App.heroes,

			controller: {
				'deGild': function (e, data) {
					var lookupHero = {};

					for (var j = 0; j < App.heroes.length; j++) {
						lookupHero[App.heroes[j].id] = App.heroes[j];
					}
					var hero;
					if ( e.shiftKey) {
						while (data.hero.epicLevel > 0 && App.savegame.heroSouls >= 2) {
							hero = lookupHero[ App.getRandomGoldenHero( data.hero.id ) ];
							App.addHero( data.hero );
							hero.epicLevel++;
							data.hero.epicLevel--;
							App.savegame.heroSouls = App.savegame.heroSouls - 2;
							App.updateNextHeroes();
							ga('send', 'event', 'button', 'click', 'degild', data.hero.id);
						}
					}
					if (data.hero.epicLevel > 0) {
						hero = lookupHero[ App.getRandomGoldenHero( data.hero.id ) ];
						App.addHero( data.hero );
						hero.epicLevel++;
						data.hero.epicLevel--;
						App.savegame.heroSouls = App.savegame.heroSouls - 2;
						App.updateNextHeroes();
						ga('send', 'event', 'button', 'click', 'degild', data.hero.id);
					}
				}
			}
		});

		App.infoView = rivets.bind($('#info'), {
			savegame: App.savegame
		});

		App.updateNextGild();

		$heroes.find('li').hover(function () {
			if (! $(this).hasClass('disabled') ) {
				$(this).addClass('degild');
				App.updateNextGild();
			}
		}, function () {
			$("#heroes").find('li').removeClass('degild');
			App.updateNextGild();
		});

		$('#deGildedHeroes').height($('#nextHeroes').height());

		App.toggleSorting();

		$('#sort').click(function () {
			App.toggleSorting();
		});
	}

};

$(function () {
	App.init();
});


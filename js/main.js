var App = {
	'version': 1,
	'ANTI_CHEAT_CODE': 'Fe12NAfA3R6z4k0z',
	'SALT': 'af0ik392jrmt0nsfdghy0',
	'RAND_MAX': 2147483646,
	'savegame': [],
	'heroes': [
		{ id: 2, name: "Tree Beast", epicLevel: 0 },
		{ id: 3, name: "Ivan, the Drunken Brawler", epicLevel: 0 },
		{ id: 4, name: "Brittany, the Beach Princess", epicLevel: 0 },
		{ id: 5, name: "The Wandering Fisherman", epicLevel: 0 },
		{ id: 6, name: "Betty Clicker", epicLevel: 0 },
		{ id: 7, name: "The Masked Samurai", epicLevel: 0 },
		{ id: 8, name: "Leon", epicLevel: 0 },
		{ id: 9, name: "The Great Forest Seer", epicLevel: 0 },
		{ id: 10, name: "Alexa, the Assassin", epicLevel: 0 },
		{ id: 11, name: "Natalia, Ice Apprentice", epicLevel: 0 },
		{ id: 12, name: "Mercedes, Duchess of Blades", epicLevel: 0 },
		{ id: 13, name: "Bobby, Bounty Hunter", epicLevel: 0 },
		{ id: 14, name: "Broyle Lindoven, Fire Mage", epicLevel: 0 },
		{ id: 15, name: "Sir George II, King's Guard", epicLevel: 0 },
		{ id: 16, name: "King Midas", epicLevel: 0 },
		{ id: 17, name: "Referi Jerator, Ice Wizard", epicLevel: 0 },
		{ id: 18, name: "Abaddon", epicLevel: 0 },
		{ id: 19, name: "Ma Zhu", epicLevel: 0 },
		{ id: 20, name: "Amenhotep", epicLevel: 0 },
		{ id: 21, name: "Beastlord", epicLevel: 0 },
		{ id: 22, name: "Athena, Goddess of War", epicLevel: 0 },
		{ id: 23, name: "Aphrodite, Goddess of Love", epicLevel: 0 },
		{ id: 24, name: "Shinatobe, Wind Deity", epicLevel: 0 },
		{ id: 25, name: "Grant, the General", epicLevel: 0 },
		{ id: 26, name: "Frostleaf", epicLevel: 0 }
	],
	'nextHeroes': [],
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
	'getNextHeroes': function (max, lookup) {
		var seed = App.savegame.epicHeroSeed;
		var nextHeroes = [];
		for (var i = 0;i<max;i++) {
			nextHeroes[i] = lookup[App.getRandomGoldenHero()];
		}
		App.savegame.epicHeroSeed = seed;
		return nextHeroes;
	},
	'updateNextHeroes': function ( lookupHero ) {
		var nextHeroes = App.getNextHeroes(25, lookupHero);

		App.nextHeroes = nextHeroes;

		var $nextHeroes = $('#nextHeroes'),
			$heroes = $('#heroes');
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
	'init': function() {
		$('#decodeButton').click(function () {
			var $deGildedHeroes = $('#deGildedHeroes');
			$deGildedHeroes.empty();
			$deGildedHeroes.data('deGildedHeroes', JSON.stringify([]));
			App.savegame = JSON.parse( App.decode( $('#input').val() ) );
			App.start();
			ga('send', 'event', 'button', 'click', 'import');
		});
	},
	'start': function() {
		var lookupSavedHero = {};
		var lookupHero = {},
			$heroes = $('#heroes');

		$('.list, .floater').show();
		$('#import').hide();
		var savedHeroes = $.map(App.savegame.heroCollection.heroes, function(value) {
			return [value];
		});

		for (var i = 0; i < savedHeroes.length; i++) {
			lookupSavedHero[savedHeroes[i].id] = savedHeroes[i];
		}

		for (var j = 0; j < App.heroes.length; j++) {
			lookupHero[App.heroes[j].id] = App.heroes[j];
		}

		App.heroes.forEach(function ( hero ) {
			hero.epicLevel = lookupSavedHero[ hero.id ].epicLevel;
		});

		App.updateNextHeroes( lookupHero );

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
					var hero;
					if ( e.shiftKey) {
						while (data.hero.epicLevel > 0 && App.savegame.heroSouls >= 2) {
							hero = lookupHero[ App.getRandomGoldenHero( data.hero.id ) ];
							App.addHero( data.hero );
							hero.epicLevel++;
							data.hero.epicLevel--;
							App.savegame.heroSouls = App.savegame.heroSouls - 2;
							App.updateNextHeroes( lookupHero );
							ga('send', 'event', 'button', 'click', 'degild', data.hero.id);
						}
					}
					if (data.hero.epicLevel > 0) {
						hero = lookupHero[ App.getRandomGoldenHero( data.hero.id ) ];
						App.addHero( data.hero );
						hero.epicLevel++;
						data.hero.epicLevel--;
						App.savegame.heroSouls = App.savegame.heroSouls - 2;
						App.updateNextHeroes( lookupHero );
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
	}

};

$(function () {
	App.init();
});


define( [ 'jquery', 'rivets', 'd3', 'nouislider', 'base64', 'es5-shim', 'json2', 'crypto.MD5'], function ( $, rivets, d3 ) {

	var App = {
	'version': "@@version",
	'savegame': {
		'heroCollection': []
	},
	'heroes': [
		{ id: 2, name: "Tree Beast", epicLevel: 0, efficiency: 2.484e63 / 2541, baseCost: 50 },
		{ id: 3, name: "Ivan, the Drunken Brawler", epicLevel: 0, efficiency: 5.530e63 / 2529, baseCost: 250 },
		{ id: 4, name: "Brittany, the Beach Princess", epicLevel: 0, efficiency: 7.501e63 / 2513, baseCost: 1000 },
		{ id: 5, name: "The Wandering Fisherman", epicLevel: 0, efficiency: 3.212e61 / 2412, baseCost: 4000 },
		{ id: 6, name: "Betty Clicker", epicLevel: 0, efficiency: 8.903e55 / 2199, baseCost: 20000 },
		{ id: 7, name: "The Masked Samurai", epicLevel: 0, efficiency: 1.056e64 / 2450, baseCost: 100e3 },
		{ id: 8, name: "Leon", epicLevel: 0, efficiency: 2.012e61 / 2337, baseCost: 400e3 },
		{ id: 9, name: "The Great Forest Seer", epicLevel: 0, efficiency: 3.736e63 / 2387, baseCost: 2500e3 },
		{ id: 10, name: "Alexa, the Assassin", epicLevel: 0, efficiency: 3.173e59 / 2222, baseCost: 15000e3 },
		{ id: 11, name: "Natalia, Ice Apprentice", epicLevel: 0, efficiency: 6.228e62 / 2306, baseCost: 100e6 },
		{ id: 12, name: "Mercedes, Duchess of Blades", epicLevel: 0, efficiency: 2.052e62 / 2259, baseCost: 800e6 },
		{ id: 13, name: "Bobby, Bounty Hunter", epicLevel: 0, efficiency: 4.364e61 / 2205, baseCost: 6500e6 },
		{ id: 14, name: "Broyle Lindoven, Fire Mage", epicLevel: 0, efficiency: 8.683e58 / 2083, baseCost: 50e9 },
		{ id: 15, name: "Sir George II, Kings Guard", epicLevel: 0, efficiency: 8.899e60 / 2119, baseCost: 450e9 },
		{ id: 16, name: "King Midas", epicLevel: 0, efficiency: 8.061e52 / 1813, baseCost: 3017e6 },
		{ id: 17, name: "Referi Jerator, Ice Wizard", epicLevel: 0, efficiency: 1.604e61 / 2063, baseCost: 36e12 },
		{ id: 18, name: "Abaddon", epicLevel: 0, efficiency: 5.978e59 / 1982, baseCost: 320e12 },
		{ id: 19, name: "Ma Zhu", epicLevel: 0, efficiency: 2.553e61 / 2006, baseCost: 2.7e15 },
		{ id: 20, name: "Amenhotep", epicLevel: 0, efficiency: 1.752e55 / 1764, baseCost: 24e15 },
		{ id: 21, name: "Beastlord", epicLevel: 0, efficiency: 1.914e59 / 1864, baseCost: 300e15 },
		{ id: 22, name: "Athena, Goddess of War", epicLevel: 0, efficiency: 6.560e61 / 1900, baseCost: 9e18 },
		{ id: 23, name: "Aphrodite, Goddess of Love", epicLevel: 0, efficiency: 3.822e62 / 1872, baseCost: 350e18 },
		{ id: 24, name: "Shinatobe, Wind Deity", epicLevel: 0, efficiency: 2.830e61 / 1779, baseCost: 14e21 },
		{ id: 25, name: "Grant, the General", epicLevel: 0, efficiency: 1.562e61 / 1686, baseCost: 4199e21 },
		{ id: 26, name: "Frostleaf", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 2100e24 },
		{ id: 27, name: "Dread Knight", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e40 },
		{ id: 28, name: "Atlas", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e55 },
		{ id: 29, name: "Terra", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e70 },
		{ id: 30, name: "Phthalo", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e85 },
		{ id: 31, name: "Orntchya Gladeye", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e100 },
		{ id: 32, name: "Lilin", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e115 },
		{ id: 33, name: "Cadmia", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e130 },
		{ id: 34, name: "Alabaster", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e145 },
		{ id: 35, name: "Astraea", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e160 },
		{ id: 36, name: "Chiron", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e175 },
		{ id: 37, name: "Moloch", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e190 },
		{ id: 38, name: "Bomber Max", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e205 },
		{ id: 39, name: "Gog", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e220 },
		{ id: 40, name: "Wepawawet", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e235 }
		//{ id: 36, name: "Test 1", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 1e175 }
	],
	'ancients': [
		{ name: "Solomon, Ancient of Wisdom", id: 3 },
		{ name: "Libertas, Ancient of Freedom", id: 4 },
		{ name: "Siyalatas, Ancient of Abandon", id: 5 },
		{ name: "Khrysos, Ancient of Inheritence", id: 6 },
		{ name: "Thusia, Ancient of Vaults", id: 6 },
		{ name: "Mammon, Ancient of Greed", id: 8 },
		{ name: "Mimzee, Ancient of Riches", id: 9 },
		{ name: "Pluto, Ancient of Wealth", id: 10 },
		{ name: "Dogcog, Ancient of Thrift", id: 11 },
		{ name: "Fortuna, Ancient of Chance", id: 12 },
		{ name: "Atman, Ancient of Souls", id: 13 },
		{ name: "Dora, Ancient of Discovery", id: 14 },
		{ name: "Bhaal, Ancient of Murder", id: 15 },
		{ name: "Morgulis, Ancient of Death", id: 16 },
		{ name: "Chronos, Ancient of Time", id: 17 },
		{ name: "Bubos, Ancient of Diseases", id: 18 },
		{ name: "Fragsworth, Ancient of Wrath", id: 19 },
		{ name: "Vaagur, Ancient of Impatience", id: 20 },
		{ name: "Kumawakamaru, Ancient of Shadows", id: 21 },
		{ name: "Chawedo, Ancient of Agitation", id: 22 },
		{ name: "Hecatoncheir, Ancient of Wallops", id: 23 },
		{ name: "Berserker, Ancient of Rage", id: 24 },
		{ name: "Sniperino, Ancient of Accuracy", id: 25 },
		{ name: "Kleptos, Ancient of Thieves", id: 26 },
		{ name: "Energon, Ancient of Battery Life", id: 27 },
		{ name: "Argaiv, Ancient of Enhancement", id: 28 }
	],
	'deGildedHeroes': [],
	'nextHeroes': [],
	'originalHeroes': [],
	'originalSouls': 0,
	'originalSeed': 0,
	'sorting': true,
	'autoDegild': 0,
	'autoDegildSpeed': 1000,
	'degilds': 0,
	'epicHeroSeed': 0,
	'numberOfGilds': 0,
	'heroSouls': 0,
	'allDpsMultiplier': 0,
	'gildedDamageBonusPercent': 0,
	'dps': 0,
	'dps2': 0,
	'editing': false,
	'manualForward': false,
	'stats': [],
	'totalGold': 0,
	'rand': function () {
		App.epicHeroSeed = App.epicHeroSeed * 16807 % 2147483647;

		return App.epicHeroSeed;
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
			heroId = App.integer(2, App.getHighestHeroSeen());
		}
		return heroId;
	},
	'getHighestHeroSeen': function ()
	{
		var c = 1,
			found = false,
			foundHeroId = false;

		App.heroes.forEach( function( hero ) {
			if (App.totalGold < hero.baseCost && !found) {
				found = true;
				foundHeroId = hero.id;
			}
			c++;
		});

		if (found) {
			return foundHeroId;
		}

		if (c == App.heroes.length + 1) {
			return App.heroes.length + 1;
		}

		return 0;
	},
	'getNextHeroes': function (max) {
		var seed = App.epicHeroSeed;

		var nextHeroes = [];
		for ( var i = 0; i < max; i++ ) {
			nextHeroes[ i ] = App.getHeroById( App.getRandomGoldenHero() );
		}

		App.epicHeroSeed = seed;

		return nextHeroes;
	},
	'updateNextHeroes': function () {

		App.nextHeroes = App.getNextHeroes(1);

		var $nextHeroes = $('#nextHeroes');
		$nextHeroes.empty();

		App.nextHeroes.forEach(function (hero) {
			$nextHeroes.append( $('<li>').html( hero.name ) );
		});

		App.updateNextGild();
	},
	'updateDegildedHeroes': function () {
		var $deGildedHeroes = $('#deGildedHeroes');

		$deGildedHeroes.empty().fadeIn(300);
		App.deGildedHeroes.forEach(function (hero) {
			$deGildedHeroes.append($('<li>').html(hero.name));
		});
	},
	'updateNextGild': function () {
		var $heroes = $('#heroes'),
			$nextHeroes = $('#nextHeroes');

		$heroes.find('li').removeClass('gild');

		if ( $heroes.find('li.degild') ) {
			if ( $heroes.find('li.degild .name').html() == App.nextHeroes[0].name ) {

				var next = App.nextHeroes.filter(function ( hero ) {
					return (hero.name != App.nextHeroes[0].name)
				})[0];

				App.getHeroLiByName( next.name ).addClass('gild');
			}
			else {
				App.getHeroLiByName( $nextHeroes.find("li:first").html() ).addClass('gild');
			}
		}
		else {
			App.getHeroLiByName( $nextHeroes.find("li:first").html() ).addClass('gild');
		}
	},
	'getHeroById': function ( id ) {
		var lookupHero = {};

		for ( var j = 0; j < App.heroes.length; j++ ) {
			lookupHero[ App.heroes[ j ].id ] = App.heroes[ j ];
		}

		return lookupHero[ id ];
	},
	'getHeroByName': function (name) {
		var found = false;
		var foundHero = false;
		App.heroes.forEach(function (hero) {
			if ( !found ) {
				if ( name == hero.name ) {
					foundHero = hero;
					found = true;
				}
			}
		});

		return foundHero;
	},
	'updateSorting': function () {
		var $heroes = $('#heroes'),
			$sort = $('#sort');
		if ( !App.sorting ) {
			$heroes.find('li').sort(function (a, b) {
				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.id - +hero2.id;
			}).appendTo($heroes);

			$sort.removeClass('arrow-up').addClass('arrow-down');
			$sort.attr('title', 'Sort the heroes by max efficiency');
		}
		else {
			$heroes.find('li').sort(function (b, a) {
				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.efficiency - +hero2.efficiency;
			}).appendTo($heroes);

			$sort.removeClass('arrow-down').addClass('arrow-up');
			$sort.attr('title', 'Sort the heroes by normal order');
		}
	},
	'getLeastEfficientHero': function () {
		var $nextHeroLi = $('#heroes').find('.gild');

		if ( App.nextHeroes[ 0 ].epicLevel > $nextHeroLi.find('.slider-range').val()[ 1 ] ) {
			return App.getHeroById( App.nextHeroes[ 0 ].id );
		}

		var potentialHeroes = App.heroes.filter( function ( hero ) {
			return hero.epicLevel > App.getHeroLiByName( hero.name).find('.slider-range').val()[ 1 ];
		});

		potentialHeroes.sort(function ( a, b ) {
			var aEff = a.efficiency,
				bEff = b.efficiency,
				aLvl = a.epicLevel,
				bLvl = b.epicLevel;

			if(aLvl == bLvl) {
				return (aEff < bEff) ? 1 : (aEff > bEff) ? -1 : 0;
			}
			else {
				return (aLvl < bLvl) ? 1 : -1;
			}
		});

		var lookAhead = 0;
		potentialHeroes.forEach(function ( hero) {
			lookAhead += hero.epicLevel - App.getHeroLiByName( hero.name).find('.slider-range').val()[ 1 ];
		});

		if (lookAhead > App.nextHeroes.length) {
			lookAhead = App.nextHeroes.length;
		}

		var notUpcomingHeroes = potentialHeroes.filter(function ( hero ) {
			for (var i=0;i< lookAhead; i++) {
				if ( hero.name == App.nextHeroes[i].name) {
					return false;
				}
			}

			return true;
		});

		if (notUpcomingHeroes.length != 0) {
			potentialHeroes = notUpcomingHeroes;
		}

		if (potentialHeroes.length > 0) {
			return potentialHeroes[0];
		}
		else {
			var unsatisfiedHeroes = App.heroes.filter(function (hero) {
				var $heroLi = App.getHeroLiByName(hero.name);
				var sliderMin = $heroLi.find('.slider-range').val()[ 0 ];
				return hero.epicLevel < sliderMin;
			});

			if ( unsatisfiedHeroes.length > 0 ) {
				potentialHeroes = App.heroes.filter(function (hero) {
					var $heroLi = App.getHeroLiByName(hero.name);
					var sliderMin = $heroLi.find('.slider-range').val()[ 0 ];
					return hero.epicLevel && (hero.epicLevel > sliderMin || sliderMin == 0 )
				}).sort(function ( a, b ) {
					var aEff = a.efficiency,
						bEff = b.efficiency,
						aLvl = a.epicLevel,
						bLvl = b.epicLevel;

					if(aLvl == bLvl) {
						return (aEff < bEff) ? 1 : (aEff > bEff) ? -1 : 0;
					}
					else {
						return (aLvl < bLvl) ? 1 : -1;
					}
				});
			}
		}

		if ( potentialHeroes.length == 0 ) {
			App.stopAutoDegild();
		}
		else {
			return potentialHeroes[0];
		}
	},
	'getHeroLiByName': function (name) {
		return $('#heroes').find("li .name:contains('" + name + "')").parent();
	},
	'getNumberOfGilds': function () {
		var numberOfGilds = 0;
		App.heroes.forEach(function (hero) {
			if ( hero.epicLevel > 0 )
				numberOfGilds += hero.epicLevel;
		});

		return numberOfGilds;
	},
	'getHash': function ( data ) {
		return Crypto.MD5( data + "af0ik392jrmt0nsfdghy0").toString();
	},
	'sprinkle': function ( data ) {
		var _loc2_ = data.split("");
		var _loc3_ = [];
		var _loc4_ = 0;
		var _loc5_ = null;
		while(_loc4_ < _loc2_.length)
		{
			_loc3_[_loc4_ * 2] = _loc2_[_loc4_];
			_loc5_ = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
			_loc3_[_loc4_ * 2 + 1] = _loc5_.substr(Math.floor(Math.random() * (_loc5_.length - 1)),1);
			_loc4_++;
		}
		return _loc3_.join("");
	},
	'toAntiCheatFormat': function( data ) {
		var sprinkledData = App.sprinkle( data );
		var splitter = 'Fe12NAfA3R6z4k0z';
		var hash = App.getHash( data );

		return sprinkledData + splitter + hash;
	},
	'getSavegame': function () {
		return JSON.parse(atob($('#input').val().split('Fe12NAfA3R6z4k0z')[ 0 ].replace(/(.)./g, "$1")));
	},
	'exportSavegame': function () {
		if (App.heroSouls > 0) {
			var savegame = App.getSavegame();

			for (var key in savegame.heroCollection.heroes) {
				if (savegame.heroCollection.heroes.hasOwnProperty(key)) {
					var hero = App.getHeroById( savegame.heroCollection.heroes[ key ].id);
					if (hero) {
						savegame.heroCollection.heroes[ key ].epicLevel = hero.epicLevel;
					}
				}
			}

			savegame.heroSouls = App.heroSouls;
			savegame.epicHeroSeed = App.epicHeroSeed;

			var enc=App.toAntiCheatFormat( btoa(JSON.stringify(savegame)) );
			var dataUri = 'data:application/text,' + enc;

			$('#export').find('a').attr('href', dataUri).attr('download', 'CHGCSave.txt').attr('textContent', 'CHGCSave.txt');
		}
	},
	'initializeEventHandlers': function () {
		var $transport = $('#transport');

		$('#importButton').click(function () {
			ga('send', 'event', 'app', 'import', 'click');
			if ($('#input').val()) {
				App.start();
			}
		}).focus();

		$('#input').on('paste', function () {
			ga('send', 'event', 'app', 'import', 'paste');
			setTimeout(function () {
				App.start();
			}, 250);
		});

		$('#sort').click(function () {
			ga('send', 'event', 'menu', 'click', 'sort', 1);
			App.sorting = !App.sorting;
			App.updateSorting();
		});

		$('#editPriorities').click(function () {
			ga('send', 'event', 'menu', 'click', 'editPriorities', 1);
			App.editing = !App.editing;
			$('.slider-range').slideToggle();
			$('#resetSlider').slideToggle();
		});

		$('#resetSlider').click(function () {
			ga('send', 'event', 'menu', 'click', 'resetSlider', 1);
			App.resetSlider();
		});

		$transport.find('.fontawesome-fast-backward').click(function () {
			ga('send', 'event', 'menu', 'click', 'reset', 1);
			App.setState(0);
		});

		$transport.find('.fontawesome-backward').click(function () {
			ga('send', 'event', 'menu', 'click', 'backward', 1);
			App.setState( App.degilds - 1 );
		});

		$transport.find('.fontawesome-play').click(function () {
			$('#transport').find('span.fontawesome-play, span.fontawesome-pause').toggleClass('fontawesome-play fontawesome-pause');
			ga('send', 'event', 'menu', 'click', 'autoDegild', 1);
			if ( App.autoDegild ) {
				App.stopAutoDegild();
			} else {
				App.startAutoDegild();
			}
		});

		$transport.find('.fontawesome-forward').click(function () {
			ga('send', 'event', 'menu', 'click', 'forward', 1);
			App.stopAutoDegild();
			App.manualForward = true;
			App.clickRecommendedHero();
			App.manualForward = false;
		});

		$transport.find('.fontawesome-plus').click(function () {
			ga('send', 'event', 'menu', 'click', 'faster', 1);
			$transport.find('.fontawesome-minus').removeClass('disabled');
			App.autoDegildSpeed = App.autoDegildSpeed + 5;
			if ( App.autoDegildSpeed < 1000 ) {
				$transport.find('.fontawesome-plus').removeClass('disabled');
			}
			else {
				$transport.find('.fontawesome-plus').addClass('disabled');
				App.autoDegildSpeed = 1000;
			}

			App.updateAutoDegild();

			$('#transport').find('.fontawesome-time').attr('title', App.autoDegildSpeed + ' degild(s) per second');
		});

		$transport.find('.fontawesome-minus').click(function () {
			ga('send', 'event', 'menu', 'click', 'slower', 1);
			$transport.find('.fontawesome-plus').removeClass('disabled');
			App.autoDegildSpeed = App.autoDegildSpeed - 5;
			if ( App.autoDegildSpeed > 1 ) {
				$transport.find('.fontawesome-minus').removeClass('disabled');
			}
			else {
				$transport.find('.fontawesome-minus').addClass('disabled');
				App.autoDegildSpeed = 1;
			}
			App.updateAutoDegild();

			$transport.find('.fontawesome-time').attr('title', App.autoDegildSpeed + ' degild(s) per second');
		});

		$('#export').click(function () {
			ga('send', 'event', 'menu', 'click', 'export', 1);
			App.exportSavegame();
		});

	},
	'saveSliderSettings': function () {
		var sliderSettings = [];
		App.heroes.forEach(function (hero) {
			sliderSettings[ hero.id ] = App.getHeroLiByName(hero.name).find('.slider-range').val();
		});

		localStorage[ "gilding.sliderSettings" ] = JSON.stringify(sliderSettings);
		localStorage[ "gilding.souls" ] = App.heroSouls;
		localStorage[ "gilding.version" ] = App.version;
	},
	'loadSliderSettings': function () {
		var sliderSettings = [],
			version,
			souls;

		version = localStorage[ "gilding.version" ];
		souls = localStorage[ "gilding.souls" ];

		if ( version == App.version && App.heroSouls == souls ) {
			sliderSettings = JSON.parse(localStorage[ "gilding.sliderSettings" ]);

			App.heroes.forEach(function (hero) {
				App.getHeroLiByName(hero.name).find('.slider-range').val(sliderSettings[ hero.id ]);
			});

			return true;
		}
		else {
			App.resetSlider();
		}

		return false;
	},
	'updateRecommendation': function () {
		var hero = App.getLeastEfficientHero(),
			$transport = $('#transport');
		$('#heroes').find('li').removeClass('recommendation');
		if (hero) {
			var $heroLi = App.getHeroLiByName(hero.name);
			$heroLi.addClass('recommendation');
			$transport.find('span.fontawesome-play, span.fontawesome-forward').removeClass('disabled');
		} else {
			$transport.find('span.fontawesome-play, span.fontawesome-forward').addClass('disabled');
		}
	},
	'clickRecommendedHero': function() {
		var $recommendation = $('.recommendation');
		if ( $recommendation ) {
			$recommendation.click();
			App.updateRecommendation();
		}
		else {
			App.stopAutoDegild();
		}
	},
	'startAutoDegild': function () {
		var $transport = $('#transport');
		$transport.find('span.fontawesome-play').toggleClass('fontawesome-play fontawesome-pause');
		App.autoDegild = setInterval(function () {
			App.clickRecommendedHero();
		}, 1000 / App.autoDegildSpeed);

		$('#degildsPerSecond').html(App.autoDegildSpeed + ' degild(s) per second').slideDown();
	},
	'stopAutoDegild': function () {
		var $transport = $('#transport');
		$transport.find('span.fontawesome-pause').toggleClass('fontawesome-play fontawesome-pause');

		clearInterval(App.autoDegild);
		App.autoDegild = 0;
	},
	'updateAutoDegild': function () {
		if (App.autoDegild) {
			clearInterval(App.autoDegild);
			App.autoDegild = setInterval(function () {
				App.clickRecommendedHero();
			}, 1000 / App.autoDegildSpeed);
		}
	},
	'resetSlider': function () {
		var sortedHeroes = [],
			i = 0;

		App.heroes.forEach(function (hero) {
			sortedHeroes.push({
				name: hero.name,
				efficiency: hero.efficiency
			});
		});

		sortedHeroes.sort(function (a, b) {
			return b.efficiency - a.efficiency;
		});

		sortedHeroes.forEach(function (hero) {
			var $heroLi = App.getHeroLiByName(hero.name);
			if ( i < 6 ) {
				//$heroLi.find('.slider-range').val([ 0, App.numberOfGilds ]);
				$heroLi.find('.slider-range').val([ 0, 0 ]);
			}
			else {
				$heroLi.find('.slider-range').val([ 0, 0 ]);
			}
			i++;
		});

		App.saveSliderSettings();
	},
	'setState': function( degild ) {
		var $transport = $('#transport');
		if (degild < 0) {
			degild = 0;
		}

		App.stopAutoDegild();

		App.degilds = degild;

		App.heroSouls = App.originalSouls - degild * 2;

		App.epicHeroSeed = App.stats[degild].seed;

		$("#degilds").html(App.degilds + " Heroes degilded");

		for ( var i = 0; i < App.stats[ degild ].heroes.length; i++ ) {
			App.heroes[ i ].epicLevel = App.stats[ degild ].heroes[i].epicLevel;
		}

		App.deGildedHeroes = App.deGildedHeroes.slice(0, degild);
		App.stats = App.stats.slice(0, degild + 1);

		//App.updateDegildedHeroes();
		App.dps2 = App.getDps();

		$("#souls").html(App.heroSouls + " Souls");
		$('#spentSouls').html(App.degilds * 2 + ' Souls spent');
		$transport.find('.fontawesome-time').attr('title', App.autoDegildSpeed + ' degild(s) per second');
		$('#dps').html(App.beautify(App.dps2) + ' dps / ' + Math.round(App.dps2 / App.dps * 100) + "%");

		if (degild == 0) {
			$transport.find('span.fontawesome-fast-backward, span.fontawesome-backward').addClass('disabled');
		}

		if (App.heroSouls > 0) {
			$('#export').slideDown();
		}
		else {
			$('#export').slideUp();
		}

		//App.updateChart();
		App.updateNextHeroes();
		//App.updateRecommendation();
	},
	'getHeroSoulWorldDamageBonus': function () {
		var ancientsDps = 0;
		var ancients = [];
		var savedAncients = $.map(App.savegame.ancients.ancients, function (value) {
			return [ value ];
		});

		savedAncients.forEach(function (ancient) {
			ancients[ancient.id] = ancient;
		});

		if ( ancients[ 16 ] ) {
			ancientsDps = ancients[ 16 ].level * 11;
		}

		return App.heroSouls * 10 + ancientsDps;
	},
	'heroDps': function (hero) {
		return hero.baseAttack() * hero.level * hero.damageMultiplier * App.allDpsMultiplier * ((App.getHeroSoulWorldDamageBonus() / 100 + 1) * hero.getEpicBonus());
	},
	'formatEveryThirdPower': function () {
		var notations = ['','t','M','B','T','q','Q','s','S','O','N','d','U','D','!','@','#','$','%','^','&','*'];
		return function (value) {
			var base = 0,
				notationValue = '',
				originalValue;
			originalValue = value;
			if ( value >= 1000000 && isFinite(value) ) {
				value /= 1000;
				while ( Math.round(value) >= 1000 ) {
					value /= 1000;
					base++;
				}
				if ( base > notations.length ) {
					return originalValue.toExponential(3);
				} else {
					notationValue = notations[ base ];
				}
			}
			return ( Math.round(value * 1000) / 1000 ) + notationValue;
		};
	},
	'beautify': function (value, floats) {
		var negative = (value < 0);
		var decimal = '';
		if ( value < 1000000 && floats > 0 ) decimal = '.' + (value.toFixed(floats).toString()).split('.')[ 1 ];
		value = Math.floor(Math.abs(value));
		var formatter = App.formatEveryThirdPower();
		var output = formatter(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return negative ? '-' + output : output + decimal;
	},
	getDps: function () {
		var dps = 0;

		App.heroes.forEach(function (hero) {
			dps += App.heroDps(hero);
		});

		return dps;
	},
	'init': function () {
		App.initializeEventHandlers();

		rivets.binders.flash = function (el, value) {
			if ( value == 0 ) {
				$(el).addClass('disabled');
				$(el).removeClass('degild');
			}
			else
				$(el).removeClass('disabled');

			if ( !$(el).data('flashing') ) {
				$(el).data('flashing', true).fadeOut(300).fadeIn(300, function () {
					$(this).data('flashing', false);
				});
			}
		};
	},
	updateHeroesFromSavegame: function () {
		var lookupSavedHero = {};

		var savedHeroes = $.map(App.savegame.heroCollection.heroes, function (value) {
			return [ value ];
		});

		for ( var i = 0; i < savedHeroes.length; i++ ) {
			lookupSavedHero[ savedHeroes[ i ].id ] = savedHeroes[ i ];
		}

		App.heroes.forEach(function (hero) {
			hero.epicLevel = 0;
			hero.locked = true;
			hero.level = 0;
			hero.damageMultiplier = 0;
			if (lookupSavedHero[ hero.id ]) {
				hero.epicLevel = lookupSavedHero[ hero.id ].epicLevel || 0;
				hero.locked = lookupSavedHero[ hero.id ].locked || true;
				hero.level = lookupSavedHero[ hero.id ].level || 0;
				hero.damageMultiplier = lookupSavedHero[ hero.id ].damageMultiplier || 0;
			}

			hero.baseAttack = function () {
				if ( this.id == 1 ) {
					return 0;
				}
				//noinspection JSPotentiallyInvalidUsageOfThis
				return Math.ceil(this.baseCost / 10 * Math.pow(1 - 0.0188 * Math.min(this.id, 14), this.id));
			};

			hero.getEpicBonus = function () {
				App.gildedDamageBonusPercent = 0;

				var ancients = [];
				var savedAncients = $.map(App.savegame.ancients.ancients, function (value) {
					return [ value ];
				});

				savedAncients.forEach(function (ancient) {
					ancients[ancient.id] = ancient;
				});

				if ( ancients[28] ) {
					App.gildedDamageBonusPercent = ancients[28].level * 2;
				}

				return 1 + this.epicLevel * (0.5 + App.gildedDamageBonusPercent * 0.01);
			}
		});
	},
	createSlider: function () {
		$('.slider-range').each(function () {
			$(this).noUiSlider({
				start: [ 0, 0 ],
				step: 1,
				range: {
					'min': [ 0 ],
					'max': [ App.numberOfGilds ]
				},
				format: {
					to: function (value) {
						return value;
					},
					from: function (value) {
						return value;
					}
				}
			}).Link('lower').to('-inline-<div class="tooltip"></div>', function (value) {
				$(this).html(
					'<span>' + value + ' min</span>'
				);
			}).Link('upper').to('-inline-<div class="tooltip"></div>', function (value) {
				var v = (value == App.numberOfGilds) ? 'MAX' : value + ' max';
				v = (value == 0) ? 'NONE' : v;
				$(this).html(
					'<span>' + v + '</span>'
				);
			}).on({
				slide: function () {
					var total = 0,
						minVal = $(this).val()[ 0 ],
						maxVal = $(this).val()[ 1 ];

					$('.slider-range').not(this).each(function () {
						total += $(this).val()[ 0 ];
					});

					if ( (total + minVal) > App.numberOfGilds ) {
						$(this).val([ App.numberOfGilds - total, maxVal ]);
					}
				},
				change: function () {
					App.saveSliderSettings();
					App.updateRecommendation();
					ga('send', 'event', 'slider', 'change', $(this).parent().find('.name').html(), 1);
				}
			});
		});
	},
	'createChart': function () {
		var margin = {top: 20, right: 10, bottom: 30, left: 35},
			width = 275 - margin.left - margin.right,
			height = 275 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.range([0, height]);

		var y = d3.scale.linear()
			.range([height, 0]);

		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.tickFormat(d3.format("d"));

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.tickFormat(d3.format("d"));

		var line = d3.svg.line()
			.x(function(d) { return x(d.degilds); })
			.y(function(d) { return y(d.dps); });

		App.svg = d3.select("#stats").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		x.domain(d3.extent(App.stats, function(d) { return d.degilds; }));
		y.domain(d3.extent(App.stats, function(d) { return d.dps; }));

		App.svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
			.append("text")
			.style("text-anchor", "end")
			.attr("x", width -5)
			.attr("dy", "-.71em")
			.text("Degilds");

		App.svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("% DPS");

		App.svg.append("path")
			.datum(App.stats)
			.attr("class", "line")
			.attr("d", line);
	},
	updateChart: function () {
		$("#stats").slideDown();
		var margin = {top: 20, right: 10, bottom: 30, left: 35},
			height = 275 - margin.top - margin.bottom;

		var x = d3.scale.linear()
			.range([0, height]);

		var y = d3.scale.linear()
			.range([height, 0]);
		//
		var xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom")
			.tickFormat(d3.format("d"));

		var yAxis = d3.svg.axis()
			.scale(y)
			.orient("left")
			.tickFormat(d3.format("d"));

		var line = d3.svg.line()
			.x(function(d) { return x(d.degilds); })
			.y(function(d) { return y(d.dps); });

		App.svg.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		x.domain(d3.extent(App.stats, function(d) { return d.degilds; }));
		y.domain(d3.extent(App.stats, function(d) { return d.dps; }));

		App.svg.select("g.x.axis")
			.call(xAxis);

		App.svg.select("g.y.axis")
			.call(yAxis);

		App.svg.select("path.line")
			.datum(App.stats)
			.attr("d", line);

	},
	degildHero: function (hero) {
		if (hero) {
			if ( hero.epicLevel > 0 ) {
				var nextHero = App.getHeroById(App.getRandomGoldenHero(hero.id));
				App.deGildedHeroes.push(hero);
				//App.updateDegildedHeroes();
				nextHero.epicLevel++;
				hero.epicLevel--;
				App.heroSouls = App.heroSouls - 2;
				App.updateNextHeroes();
				App.updateRecommendation();
				App.degilds++;

				$("#souls").html(App.heroSouls + " Souls");
				$('#spentSouls').html(App.deGildedHeroes.length * 2 + ' Souls spent');
				$("#degilds").html(App.degilds + " Heroes degilded");

				App.dps2 = App.getDps();
				$('#dps').html(App.beautify(App.dps2) + ' dps / ' + Math.round(App.dps2 / App.dps * 100) + "%");
			}

			if (App.heroSouls > 0) {
				$('#export').slideDown();
			}
			else {
				$('#export').slideUp();
			}

			App.stats.push({
				dps: Math.round(App.dps2 / App.dps * 100),
				degilds: App.degilds,
				seed: App.epicHeroSeed,
				heroes: JSON.parse( JSON.stringify( App.heroes ) )
			});

			$('#transport').find('span.fontawesome-fast-backward, span.fontawesome-backward').removeClass('disabled');

			//App.updateChart();
		}
	},
	bindUI: function () {
		var $heroes = $('#heroes');
		rivets.bind($heroes, {
			heroes: App.heroes,
			controller: {
				'deGild': function (e, data) {
					if (!App.editing || App.autoDegild || App.manualForward) {
						if ( e.shiftKey ) {
							while ( data.hero.epicLevel > 0 ) {
								App.degildHero( data.hero );
							}
						} else {
							App.degildHero( data.hero );
						}
					}
				}
			}
		});

		$heroes.find('li').hover(
			function () {
				if ( !$(this).hasClass('disabled') ) {
					$(this).addClass('degild');
					App.updateNextGild();
				}
			},
			function () {
				$('#heroes').find('li').removeClass('degild');
				App.updateNextGild();
			}
		);

		rivets.bind($('#info'), {
			savegame: App.savegame
		});
	},
	'start': function () {
		App.savegame = App.getSavegame();

		App.updateHeroesFromSavegame();

		App.originalHeroes = JSON.parse(JSON.stringify(App.heroes));
		App.originalSeed = App.savegame.epicHeroSeed;
		App.epicHeroSeed = App.originalSeed;
		App.originalSouls = App.savegame.heroSouls;
		App.heroSouls = App.originalSouls;
		App.allDpsMultiplier = App.savegame.allDpsMultiplier;
		App.dps = App.getDps();
		App.numberOfGilds = App.getNumberOfGilds();
		//App.totalGold = App.savegame.totalGold;
		App.totalGold = App.savegame.highestGold;

		App.bindUI();
		App.updateNextHeroes();

		App.createSlider();
		App.loadSliderSettings();

		App.updateRecommendation();
		App.updateSorting();

		$("#gildies").html(App.numberOfGilds + " gilded Heroes");
		$("#souls").html(App.heroSouls + " Souls");
		$('#dps').html(App.beautify(App.dps) + ' dps / ' + "100%");

		$('#import').hide();
		$('.list').show();


		$('#nextHeroes, #deGildedHeroes').height($('#heroes').height());

		App.stats.push({
			dps: 100,
			degilds: 0,
			seed: App.epicHeroSeed,
			heroes: JSON.parse( JSON.stringify( App.heroes ) )
		});

		//App.createChart();

		ga('send', 'event', 'app', 'log', 'started');
	}

};
	return {
		'init': App.init
	};
});

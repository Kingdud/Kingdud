var App = {
	'version': "0.6.0",
	'ANTI_CHEAT_CODE': 'Fe12NAfA3R6z4k0z',
	'SALT': 'af0ik392jrmt0nsfdghy0',
	'RAND_MAX': 2147483646,
	'savegame': [],
	'heroes': [
		{ id: 2, name: "Tree Beast", epicLevel: 0, efficiency: 2.484e63 / 2541 },
		{ id: 3, name: "Ivan, the Drunken Brawler", epicLevel: 0, efficiency: 5.530e63 / 2529 },
		{ id: 4, name: "Brittany, the Beach Princess", epicLevel: 0, efficiency: 7.501e63 / 2513 },
		{ id: 5, name: "The Wandering Fisherman", epicLevel: 0, efficiency: 3.212e61 / 2412 },
		{ id: 6, name: "Betty Clicker", epicLevel: 0, efficiency: 8.903e55 / 2199 },
		{ id: 7, name: "The Masked Samurai", epicLevel: 0, efficiency: 1.056e64 / 2450 },
		{ id: 8, name: "Leon", epicLevel: 0, efficiency: 2.012e61 / 2337 },
		{ id: 9, name: "The Great Forest Seer", epicLevel: 0, efficiency: 3.736e63 / 2387 },
		{ id: 10, name: "Alexa, the Assassin", epicLevel: 0, efficiency: 3.173e59 / 2222 },
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
	'autoDegild': 0,
	'autoDegildSpeed': 1000,
	'degilds': 0,
	'fromAntiCheatFormat': function (string) {
		var elements = string.split(App.ANTI_CHEAT_CODE);
		var data = App.unSprinkle(elements[ 0 ]);
		var hash = elements[ 1 ];
		if ( App.getHash(data) == hash ) return data;
		alert("Hash is bad");
	},
	'unSprinkle': function (string) {
		var array = string.split("");
		var result = [];
		var counter = 0;
		while ( counter < array.length ) {
			result[ counter / 2 ] = array[ counter ];
			counter += 2;
		}
		return result.join("");
	},
	'getHash': function (string) {
		var characters = [];
		characters[0] = string;
		characters.sort();
		var sortedCharacters = characters.join();
		return CryptoJS.MD5(sortedCharacters + App.SALT);
	},
	'decode': function (code) {
		var string = code;
		var antiCheatCodeIndex = string.search(App.ANTI_CHEAT_CODE);
		var antiCheatCodeExist = (antiCheatCodeIndex != -1);
		if ( antiCheatCodeExist ) string = App.fromAntiCheatFormat(string);
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

		for ( var j = 0; j < App.heroes.length; j++ ) {
			lookupHero[ App.heroes[ j ].id ] = App.heroes[ j ];
		}

		var nextHeroes = [];
		for ( var i = 0; i < max; i++ ) {
			nextHeroes[ i ] = lookupHero[ App.getRandomGoldenHero() ];
		}
		App.savegame.epicHeroSeed = seed;

		return nextHeroes;
	},
	'updateNextHeroes': function () {

		var nextHeroes = App.getNextHeroes(25);

		App.nextHeroes = nextHeroes;

		var $nextHeroes = $('#nextHeroes');

		$nextHeroes.empty();
		nextHeroes.forEach(function (hero) {
			$nextHeroes.append($('<li>').html(hero.name));
		});
		App.updateNextGild();
	},
	'addHero': function (hero) {
		var $deGildedHeroes = $('#deGildedHeroes');
		var deGildedHeroes = JSON.parse($deGildedHeroes.data('deGildedHeroes'));
		deGildedHeroes.push(hero);
		$deGildedHeroes.empty();
		if ( $deGildedHeroes.css('display') == 'none' )
			$deGildedHeroes.fadeIn(300);
		deGildedHeroes.forEach(function (hero) {
			$deGildedHeroes.append($('<li>').html(hero.name));
		});
		$('#spentSouls').html(deGildedHeroes.length * 2 + ' Souls spent');
		$deGildedHeroes.data('deGildedHeroes', JSON.stringify(deGildedHeroes))
	},
	'updateNextGild': function () {
		var $heroes = $('#heroes'),
			$nextHeroes = $('#nextHeroes');

		$heroes.find('li').removeClass('gild');

		if ( $heroes.find('li.degild') ) {

			if ( $heroes.find('li.degild .name').html() == $nextHeroes.find("li:first").html() ) {
				var hero = $nextHeroes.find("li:first").html();
				var found = false;
				App.nextHeroes.forEach(function (nextHero) {

					if ( !found ) {
						if ( hero != nextHero.name ) {
							hero = nextHero.name;
							found = true;
						}
					}
				});

				if ( found ) {
					$heroes.find("li .name:contains('" + hero + "')").parent().addClass('gild');
				}
			}
			else {
				$heroes.find("li .name:contains('" + $nextHeroes.find("li:first").html() + "')").parent().addClass('gild');
			}
		}
		else {
			$heroes.find("li .name:contains('" + $nextHeroes.find("li:first").html() + "')").parent().addClass('gild');
		}
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
	'toggleSorting': function () {
		var $heroes = $('#heroes'),
			$sort = $('#sort');
		if ( !App.sorting ) {
			$heroes.find('li').sort(function (b, a) {

				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.efficiency - +hero2.efficiency;
			}).appendTo($heroes);

			$sort.removeClass('arrow-down').addClass('arrow-up');
			$sort.attr('title', 'Sort the heroes by normal order');

			App.sorting = true;
		}
		else {
			$heroes.find('li').sort(function (a, b) {

				var hero1 = App.getHeroByName($(a).find('.name').html());
				var hero2 = App.getHeroByName($(b).find('.name').html());

				return +hero1.id - +hero2.id;
			}).appendTo($heroes);

			$sort.removeClass('arrow-up').addClass('arrow-down');
			$sort.attr('title', 'Sort the heroes by max efficiency');

			App.sorting = false;
		}
	},
	'getLeastEfficientHero': function () {
		var leastEfficientHero = App.heroes[ 5 ];
		var found = false;

		var $nextHeroLi = $('#heroes').find('.gild');
		if ( App.nextHeroes[0].epicLevel > $nextHeroLi.find('.slider-range').val()[1] ) {
			return App.getHeroByName( App.nextHeroes[0].name );
		}

		App.heroes.forEach(function (hero) {
			var $heroLi = App.getHeroLiByName( hero.name );
			var sliderMax = $heroLi.find('.slider-range').val()[1];

			if ( hero.epicLevel && hero.efficiency <= leastEfficientHero.efficiency && hero.epicLevel > sliderMax) {
				leastEfficientHero = hero;
				found = true;
			}
		});

		if (!found) {

			var unsatisfiedMin = false;
			App.heroes.forEach(function (heroMin) {
				var $heroMinLi = App.getHeroLiByName( heroMin.name );
				var sliderMin = $heroMinLi.find('.slider-range').val()[0];
				if ( heroMin.epicLevel < sliderMin) {
					unsatisfiedMin = true;
				}
			});

			if (unsatisfiedMin) {
				App.heroes.forEach(function (hero) {
					var $heroLi = App.getHeroLiByName( hero.name );
					var sliderMin = $heroLi.find('.slider-range').val()[0];

					if ( hero.epicLevel && hero.efficiency <= leastEfficientHero.efficiency && (hero.epicLevel > sliderMin || sliderMin == 0 )) {
						leastEfficientHero = hero;
						found = true;
					}
				});
			}
		}

		return (found) ? leastEfficientHero : false;
	},
	'getHeroLiByName': function ( name ) {
		return $('#heroes').find("li .name:contains('" + name + "')").parent();
	},
	'updateAutoDegild': function () {
		clearInterval(App.autoDegild);
		App.autoDegild = setInterval(function () {
			var leastEfficientHero = App.getLeastEfficientHero();
			if (leastEfficientHero) {
				App.getHeroLiByName( leastEfficientHero.name ).click();
				App.updateRecommendation();
			}
			else {
				App.stopAutoDegild();
			}

		}, App.autoDegildSpeed);
	},
	'updateNumberOfGilds': function () {
		App.numberOfGilds = 0;
		App.heroes.forEach(function ( hero ) {
			if (hero.epicLevel > 0)
				App.numberOfGilds += hero.epicLevel;
		})
		$("#gildies").html(App.numberOfGilds + " gilded Heroes");
	},
	'init': function () {
		$('#decodeButton').click(function () {
			var $deGildedHeroes = $('#deGildedHeroes');
			$deGildedHeroes.empty();
			$deGildedHeroes.data('deGildedHeroes', JSON.stringify([]));
			App.savegame = JSON.parse(App.decode($('#input').val()));
			App.start();
			ga('send', 'event', 'button', 'click', 'import');
		});

		$('#input').on('paste', function () {
			setTimeout(function () {
				var $deGildedHeroes = $('#deGildedHeroes');
				$deGildedHeroes.empty();
				$deGildedHeroes.data('deGildedHeroes', JSON.stringify([]));
				App.savegame = JSON.parse(App.decode($('#input').val()));
				App.start();
				ga('send', 'event', 'textarea', 'paste', 'import');
			}, 100);
		});
	},
	'saveSliderSettings': function () {
		var sliderSettings = [];
		App.heroes.forEach(function ( hero ) {
			sliderSettings[ hero.id ] = App.getHeroLiByName( hero.name ).find('.slider-range').val();
		});

		localStorage[ "gilding.sliderSettings" ] = JSON.stringify(sliderSettings);
		localStorage[ "gilding.version" ] = App.version;
	},
	loadSliderSettings: function () {
		var sliderSettings = [],
			version;

		version = localStorage[ "gilding.version" ];

		if ( version == App.version ) {
			sliderSettings = JSON.parse( localStorage[ "gilding.sliderSettings" ] );

			App.heroes.forEach(function ( hero ) {
				App.getHeroLiByName( hero.name ).find('.slider-range').val( sliderSettings[ hero.id ] );
			});

			return true;
		}

		return false;
	},
	updateRecommendation: function () {
		var hero = App.getLeastEfficientHero();
		var $heroLi = App.getHeroLiByName( hero.name );
		$('#heroes').find('li').removeClass('recommendation');
		$heroLi.addClass('recommendation');
	},
	stopAutoDegild: function () {
		var $autoDegild = $('#autoDegild');
		clearInterval(App.autoDegild);
		App.autoDegild = 0;

		$autoDegild.html('start auto degild');
		$autoDegild.toggleClass("stop", App.autoDegild);
		ga('send', 'event', 'menu', 'click', 'autoGild_stop', 1);
	},
	startAutoDegild: function () {
		var $autoDegild = $('#autoDegild');
		$autoDegild.toggleClass("stop", App.autoDegild);
		App.autoDegild = setInterval(function () {
			App.getHeroLiByName( App.getLeastEfficientHero().name ).click();
			App.updateRecommendation();
		}, App.autoDegildSpeed);
		$autoDegild.html('stop auto degild');
		$('#speed').slideDown().click(function () {
			App.autoDegildSpeed = Math.round(App.autoDegildSpeed * 0.9);
			App.updateAutoDegild();
			$(this).html('degild faster (' + Math.round(1000 / App.autoDegildSpeed * 100) / 100 + ' per second)');
			ga('send', 'event', 'menu', 'click', 'faster', 1);
		});
		$('.slider-range').slideUp();
		ga('send', 'event', 'menu', 'click', 'autoGild_start', 1);
	},
	'start': function () {
		var lookupSavedHero = {},
			$heroes = $('#heroes');

		$('.list, .floater').show();
		$('#import').hide();
		var savedHeroes = $.map(App.savegame.heroCollection.heroes, function (value) {
			return [ value ];
		});

		for ( var i = 0; i < savedHeroes.length; i++ ) {
			lookupSavedHero[ savedHeroes[ i ].id ] = savedHeroes[ i ];
		}

		App.heroes.forEach(function (hero) {
			hero.epicLevel = lookupSavedHero[ hero.id ].epicLevel;
		});

		App.updateNextHeroes();

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

		App.heroesView = rivets.bind($heroes, {
			heroes: App.heroes,

			controller: {
				'deGild': function (e, data) {
					var lookupHero = {};

					for ( var j = 0; j < App.heroes.length; j++ ) {
						lookupHero[ App.heroes[ j ].id ] = App.heroes[ j ];
					}
					var hero;

					if ( e.shiftKey ) {
						while ( data.hero.epicLevel > 0 && App.savegame.heroSouls >= 2 ) {
							hero = lookupHero[ App.getRandomGoldenHero(data.hero.id) ];
							App.addHero(data.hero);
							hero.epicLevel++;
							data.hero.epicLevel--;
							App.savegame.heroSouls = App.savegame.heroSouls - 2;
							App.updateNextHeroes();
							App.updateRecommendation();
							App.degilds++;
							$("#degilds").html(App.degilds + " Heroes degilded");
							if ( !App.autoDegild ) {
								ga('send', 'event', 'button', 'click', 'degild_' + data.hero.id, 1);
							}
						}
					} else {
						if ( data.hero.epicLevel > 0 ) {
							hero = lookupHero[ App.getRandomGoldenHero(data.hero.id) ];
							App.addHero(data.hero);
							hero.epicLevel++;
							data.hero.epicLevel--;
							App.savegame.heroSouls = App.savegame.heroSouls - 2;
							App.updateNextHeroes();
							App.updateRecommendation();
							App.degilds++;
							$("#degilds").html(App.degilds + " Heroes degilded");
							if ( !App.autoDegild ) {
								ga('send', 'event', 'heroes', 'click', 'degild_' + data.hero.id, 1);
							}
						}
					}
				}
			}
		});

		App.infoView = rivets.bind($('#info'), {
			savegame: App.savegame
		});

		App.updateNextGild();

		$heroes.find('li').hover(function () {
			if ( !$(this).hasClass('disabled') ) {
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

		$('#autoDegilding').click(function () {
			$('.slider-range').slideToggle();
			ga('send', 'event', 'menu', 'click', 'editPriorities', 1);
		});

		$('#autoDegild').click(function () {
			if ( App.autoDegild ) {
				App.stopAutoDegild();
			} else {
				App.startAutoDegild();
			}
		});

		App.updateNumberOfGilds();

		App.heroes.forEach(function (hero) {
			var $heroLi = App.getHeroLiByName( hero.name );
			$heroLi.find('.slider-range').noUiSlider({
				start: [ 0, 0 ],
				step: 1,
				range: {
					'min': [ 0 ],
					'max': [ App.numberOfGilds ]
				},
				format: {
					to: function ( value ) {
						return value;
					},
					from: function ( value ) {
						return value;
					}
				},
				slide: function(event, ui) {


				}
			});
		});
		for (var j=0;j<6;j++) {
			$heroes.find('.slider-range:eq('+j+')').val( [ 0, App.numberOfGilds ] );
		}



		var $sliderRange = $('.slider-range');

		$sliderRange.on({
			slide: function () {
				var total = 0,
					minVal = $(this).val()[ 0 ],
					maxVal = $(this).val()[ 1 ];

				$sliderRange.not(this).each(function() {
					total += $(this).val()[ 0 ];
				});

				total += minVal;
				var delta = App.numberOfGilds - total;

				$sliderRange.not(this).each(function() {

					var new_value = $(this).val()[0] + Math.floor(delta / (App.heroes.length - 1) );

					if (new_value < 0 || minVal == App.numberOfGilds)
						new_value = 0;

					if (new_value > App.numberOfGilds)
						new_value = App.numberOfGilds;

					if (new_value > $(this).val()[1])
						new_value = $(this).val()[1];

					$(this).val( [ new_value, $(this).val()[1] ] );
				});
			},
			change: function () {
				App.saveSliderSettings();
				ga('send', 'event', 'slider', 'change', $(this).parent().find('.name').html(), 1);
				App.updateRecommendation();
			}
		});

		$sliderRange.click(function(event){
			event.stopPropagation();
		});

		$sliderRange.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
			$(this).html(
				'<span>' + value + ' min</span>'
			);
		});

		$sliderRange.Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
			var v = (value==App.numberOfGilds) ? 'MAX' : value + ' max';
			v = (value==0) ? 'NONE' : v;
			$(this).html(
				'<span>' + v  +'</span>'
			);
		});

		App.loadSliderSettings();

		App.updateRecommendation();
	}

};

$(function () {
	App.init();
});


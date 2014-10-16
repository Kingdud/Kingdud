var App = {
	'version': "0.9.0",
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
		{ id: 26, name: "Frostleaf", epicLevel: 0, efficiency: 1.107e63 / 1657, baseCost: 2100e24 }
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
	'autoDegildSpeed': 1,
	'degilds': 0,
	'epicHeroSeed': 0,
	'numberOfGilds': 0,
	'heroSouls': 0,
	'allDpsMultiplier': 0,
	'gildedDamageBonusPercent': 0,
	'dps': 0,
	'dps2': 0,
	'editing': false,
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
			heroId = App.integer(2, 26);

		}
		return heroId;
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
		var nextHeroes = App.getNextHeroes(25);

		App.nextHeroes = nextHeroes;

		var $nextHeroes = $('#nextHeroes');

		$nextHeroes.empty();
		nextHeroes.forEach(function (hero) {
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
		var leastEfficientHero = App.heroes[ 5 ];
		var found = false;
		var remaining = 0,
			potentialHero = false;

		App.heroes.forEach(function (hero) {
			var $heroLi = App.getHeroLiByName(hero.name);

			var sliderMin = $heroLi.find('.slider-range').val()[ 0 ];
			var sliderMax = $heroLi.find('.slider-range').val()[ 1 ];
			if ( hero.epicLevel < sliderMin || hero.epicLevel > sliderMax ) {
				remaining = remaining + hero.epicLevel;
			}
		});

		if ( remaining >= App.nextHeroes.length ) {
			remaining = App.nextHeroes.length - 1;
		}

		var $nextHeroLi = $('#heroes').find('.gild');
		if ( App.nextHeroes[ 0 ].epicLevel > $nextHeroLi.find('.slider-range').val()[ 1 ] ) {
			return App.getHeroByName(App.nextHeroes[ 0 ].name);
		}

		var allUpcoming = true;
		App.heroes.forEach(function (hero) {
			var upcoming = false;

			for ( var i = 0; i < remaining; i++ ) {
				if ( hero.name == App.nextHeroes[ i ].name ) {
					upcoming = true;
				}
			}

			var $heroLi = App.getHeroLiByName(hero.name);
			var sliderMax = $heroLi.find('.slider-range').val()[ 1 ];

			if ( hero.epicLevel && hero.epicLevel > sliderMax && hero.efficiency <= leastEfficientHero.efficiency ) {
				if ( !upcoming ) {
					leastEfficientHero = hero;
					found = true;
					allUpcoming = false;
				}
				else {
					potentialHero = hero;
				}

			}
		});

		if ( potentialHero && allUpcoming ) {
			found = true;
			leastEfficientHero = potentialHero;
		}

		if ( !found ) {

			var unsatisfiedMin = false;
			App.heroes.forEach(function (heroMin) {
				var $heroMinLi = App.getHeroLiByName(heroMin.name);
				var sliderMin = $heroMinLi.find('.slider-range').val()[ 0 ];
				if ( heroMin.epicLevel < sliderMin ) {
					unsatisfiedMin = true;
				}
			});

			if ( unsatisfiedMin ) {
				App.heroes.forEach(function (hero) {
					var $heroLi = App.getHeroLiByName(hero.name);
					var sliderMin = $heroLi.find('.slider-range').val()[ 0 ];

					if ( hero.epicLevel && hero.efficiency <= leastEfficientHero.efficiency && (hero.epicLevel > sliderMin || sliderMin == 0 ) ) {
						leastEfficientHero = hero;
						found = true;
					}
				});
			}
		}
		if ( !found ) {
			App.stopAutoDegild();
		}

		return (found) ? leastEfficientHero : false;
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
	getSavegame: function () {
		return JSON.parse(atob($('#input').val().split('Fe12NAfA3R6z4k0z')[ 0 ].replace(/(.)./g, "$1")));
	},
	initializeEventHandlers: function () {

		$('#importButton').click(function () {
			App.start();
			ga('send', 'event', 'app', 'import', 'click');
		});

		$('#input').on('paste', function () {
			setTimeout(function () {
				App.start();
				ga('send', 'event', 'app', 'import', 'paste');
			}, 100);
		});

		$('#sort').click(function () {
			App.sorting = !App.sorting;
			App.updateSorting();
		});

		$('#editPriorities').click(function () {
			App.editing = !App.editing;
			$('.slider-range').slideToggle();
			$('#resetSlider').slideToggle();
			ga('send', 'event', 'menu', 'click', 'editPriorities', 1);
		});

		$('#resetSlider').click(function () {
			App.resetSlider();
			ga('send', 'event', 'menu', 'click', 'resetSlider', 1);
		});

		$('#reset').click(function () {
			App.reset();
			ga('send', 'event', 'menu', 'click', 'reset', 1);
		});

		$('#autoDegild').click(function () {
			if ( App.autoDegild ) {
				App.stopAutoDegild();
			} else {
				App.startAutoDegild();
			}
		});

		$('#speedFaster').click(function () {
			if ( App.autoDegildSpeed < 50 ) {
				App.autoDegildSpeed++;
			}
			else {
				App.autoDegildSpeed = 50;
			}

			App.updateAutoDegild();

			$('#degildsPerSecond').html(App.autoDegildSpeed + ' degild(s) per second').slideDown();

			ga('send', 'event', 'menu', 'click', 'faster', 1);
		});

		$('#speedSlower').click(function () {
			if ( App.autoDegildSpeed > 1 ) {
				App.autoDegildSpeed--;
			}
			else {
				App.autoDegildSpeed = 1;
			}
			App.updateAutoDegild();

			$('#degildsPerSecond').html(App.autoDegildSpeed + ' degild(s) per second').slideDown();

			ga('send', 'event', 'menu', 'click', 'slower', 1);
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
		var hero = App.getLeastEfficientHero();
		var $heroLi = App.getHeroLiByName(hero.name);
		$('#heroes').find('li').removeClass('recommendation');
		$heroLi.addClass('recommendation');
	},
	'startAutoDegild': function () {
		var $autoDegild = $('#autoDegild');
		$autoDegild.addClass("stop");

		App.autoDegild = setInterval(function () {
			var $recommendation = $('.recommendation');
			if ( $recommendation ) {
				$recommendation.click();
				App.updateRecommendation();
			}
			else {
				App.stopAutoDegild();
			}
		}, 1000 / App.autoDegildSpeed);

		$autoDegild.html('stop auto degild');

		$('#degildsPerSecond').html(App.autoDegildSpeed + ' degild(s) per second').slideDown();
		$('#speedFaster').slideDown();
		$('#speedSlower').slideDown();

		ga('send', 'event', 'menu', 'click', 'autoGild_start', 1);
	},
	'stopAutoDegild': function () {
		var $autoDegild = $('#autoDegild');

		clearInterval(App.autoDegild);
		App.autoDegild = 0;

		$autoDegild.html('start auto degild');
		$autoDegild.removeClass("stop");

		$('#speedFaster').slideUp();
		$('#speedSlower').slideUp();
		$('#degildsPerSecond').slideUp();

		ga('send', 'event', 'menu', 'click', 'autoGild_stop', 1);
		ga('send', 'event', 'app', 'log', 'degilded', App.degilds);
	},
	'updateAutoDegild': function () {
		clearInterval(App.autoDegild);
		App.autoDegild = setInterval(function () {
			var $recommendation = $('.recommendation');
			if ( $recommendation ) {
				$recommendation.click();
				App.updateRecommendation();
			}
			else {
				App.stopAutoDegild();
			}
		}, 1000 / App.autoDegildSpeed);
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
				$heroLi.find('.slider-range').val([ 0, App.numberOfGilds ]);
			}
			else {
				$heroLi.find('.slider-range').val([ 0, 0 ]);
			}
			i++;
		});

		App.saveSliderSettings();
	},
	'reset': function () {
		App.stopAutoDegild();

		App.degilds = 0;
		App.deGildedHeroes = [];
		App.heroSouls = App.originalSouls;
		App.autoDegildSpeed = 1;

		$("#degilds").html(App.degilds + " Heroes degilded");
		$("#deGildedHeroes").empty();

		App.epicHeroSeed = App.originalSeed;

		for ( var i = 0; i < App.heroes.length; i++ ) {
			App.heroes[ i ].epicLevel = App.originalHeroes[ i ].epicLevel;
		}

		$("#souls").html(App.heroSouls + " Souls");
		$('#spentSouls').html(App.deGildedHeroes.length * 2 + ' Souls spent');
		$('#degildsPerSecond').html(Math.round(1000 / App.autoDegildSpeed * 100) / 100 + ' degilds per second');
		$('#dps').html(App.beautify(App.dps) + ' dps / ' + "100%");

		App.updateNextHeroes();
		App.updateRecommendation();
	},
	'getHeroSoulWorldDamageBonus': function () {
		var ancientsDps = 0;
		if ( App.savegame.ancients.ancients[ 16 ] ) {
			ancientsDps = App.savegame.ancients.ancients[ 16 ].level * 11;
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
				notationValue = '';
			if ( value >= 1000000 && isFinite(value) ) {
				value /= 1000;
				while ( Math.round(value) >= 1000 ) {
					value /= 1000;
					base++;
				}
				if ( base > notations.length ) {
					return 'Infinity';
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
			hero.epicLevel = lookupSavedHero[ hero.id ].epicLevel;
			hero.level = lookupSavedHero[ hero.id ].level;
			hero.damageMultiplier = lookupSavedHero[ hero.id ].damageMultiplier;
			hero.baseAttack = function () {
				if ( this.id == 1 ) {
					return 0;
				}
				//noinspection JSPotentiallyInvalidUsageOfThis
				return Math.ceil(this.baseCost / 10 * Math.pow(1 - 0.0188 * Math.min(this.id, 14), this.id));
			};
			hero.getEpicBonus = function () {
				App.gildedDamageBonusPercent = 0;

				if ( App.savegame.ancients.ancients[ 16 ] ) {
					App.gildedDamageBonusPercent = App.savegame.ancients[ 18 ].level * 2;
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
	degildHero: function (hero) {
		if ( hero.epicLevel > 0 ) {
			var nextHero = App.getHeroById(App.getRandomGoldenHero(hero.id));
			App.deGildedHeroes.push(hero);
			App.updateDegildedHeroes();
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

			if ( !App.autoDegild ) {
				ga('send', 'event', 'button', 'click', 'degild_' + hero.id, 1);
			}
		}
	},
	bindUI: function () {
		var $heroes = $('#heroes');
		rivets.bind($heroes, {
			heroes: App.heroes,
			controller: {
				'deGild': function (e, data) {
					if (!App.editing || App.autoDegild) {
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

		$('#deGildedHeroes').height($('#nextHeroes').height());

		ga('send', 'event', 'app', 'log', 'started');
	}

};

$(function () {
	App.init();
});
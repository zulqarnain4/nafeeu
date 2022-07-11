// Mythium Archive: https://archive.org/details/mythium/

jQuery(function ($) {
  "use strict";
  var supportsAudio = !!document.createElement("audio").canPlayType;
  if (supportsAudio) {
    // initialize plyr
    var player = new Plyr("#audio1", {
      controls: [
        "restart",
        "play",
        "progress",
        "current-time",
        "duration",
        "mute",
        "volume",
        "download"
      ]
    });
    // initialize playlist and controls
    var index = 0,
      playing = false,
      mediaPath =
        "https://ia801601.us.archive.org/19/items/MahmoudKhalilAl-husary/",
      extension = "",
      tracks = [
        {
          track: 1,
          name: "Al-Fatihah (the Opening)",
          duration: "5:40",
          file: "001"
        },
        {
          track: 2,
          name: "Al-Baqarah (the Cow)",
          duration: "06:12",
          file: "002"
        },
        {
          track: 3,
          name: "Aali Imran (the Family of Imran)",
          duration: "06:31",
          file: "003"
        },
        {
          track: 4,
          name: "An-Nisa’ (the Women)",
          duration: "06:52",
          file: "004"
        },
        {
          track: 5,
          name: "Al-Ma’idah (the Table)",
          duration: "12:44",
          file: "005"
        },
        {
          track: 6,
          name: "Al-An’am (the Cattle)",
          duration: "13:02",
          file: "006"
        },
        {
          track: 7,
          name: "Al-A’raf (the Heights)",
          duration: "5:44",
          file: "007"
        },
        {
          track: 8,
          name: "Al-Anfal (the Spoils of War)",
          duration: "5:26",
          file: "008"
        },
        {
          track: 9,
          name: "At-Taubah (the Repentance)",
          duration: "5:46",
          file: "009"
        },
        {
          track: 10,
          name: "Yunus (Yunus)",
          duration: "5:25",
          file: "010"
        },
        {
          track: 11,
          name: "Hud (Hud)",
          duration: "5:53",
          file: "011"
        },
        {
          track: 12,
          name: "Yusuf (Yusuf)",
          duration: "4:40",
          file: "012"
        },
        {
          track: 13,
          name: "Ar-Ra’d (the Thunder)",
          duration: "13:15",
          file: "013"
        },
        {
          track: 14,
          name: "Ibrahim (Ibrahim)",
          duration: "8:12",
          file: "014"
        },
        {
          track: 15,
          name: "Al-Hijr (the Rocky Tract)",
          duration: "7:02",
          file: "015"
        },
        {
          track: 16,
          name: "An-Nahl (the Bees)",
          duration: "5:43",
          file: "016"
        },
        {
          track: 17,
          name: "Al-Isra’ (the Night Journey)",
          duration: "10:45",
          file: "017"
        },
        {
          track: 18,
          name: "Al-Kahf (the Cave)",
          duration: "5:36",
          file: "018"
        },
        {
          track: 19,
          name: "Maryam (Maryam)",
          duration: "2:48",
          file: "019"
        },
        {
          track: 20,
          name: "Ta-Ha (Ta-Ha)",
          duration: "5:46",
          file: "020"
        },
        {
          track: 21,
          name: "Al-Anbiya’ (the Prophets)",
          duration: "13:07",
          file: "021"
        },
        {
          track: 22,
          name: "Al-Haj (the Pilgrimage)",
          duration: "5:16",
          file: "022"
        },
        {
          track: 23,
          name: "Al-Mu’minun (the Believers)",
          duration: "5:46",
          file: "023"
        },
        {
          track: 24,
          name: "An-Nur (the Light)",
          duration: "4:51",
          file: "024"
        },
        {
          track: 25,
          name: "Al-Furqan (the Criterion)",
          duration: "8:43",
          file: "025"
        },
        {
          track: 26,
          name: "Ash-Shu’ara’ (the Poets)",
          duration: "3:00",
          file: "026"
        },
        {
          track: 27,
          name: "An-Naml (the Ants)",
          duration: "6:09",
          file: "027"
        },
        {
          track: 28,
          name: "Al-Qasas (the Stories)",
          duration: "5:05",
          file: "028"
        },
        {
          track: 29,
          name: "Al-Ankabut (the Spider)",
          duration: "12:32",
          file: "029"
        },
        {
          track: 30,
          name: "Ar-Rum (the Romans)",
          duration: "8:56",
          file: "030"
        },
        {
          track: 31,
          name: "Luqman (Luqman)",
          duration: "4:55",
          file: "031"
        },
        {
          track: 32,
          name: "As-Sajdah (the Prostration)",
          duration: "5:45",
          file: "032"
        },
        {
          track: 33,
          name: "Al-Ahzab (the Combined Forces)",
          duration: "14:05",
          file: "033"
        },
        {
          track: 34,
          name: "Saba’ (the Sabeans)",
          duration: "13:25",
          file: "034"
        },
        {
          track: 35,
          name: "Al-Fatir (the Originator)",
          duration: "8:37",
          file: "035"
        },
        {
          track: 36,
          name: " Ya-Sin (Ya-Sin)",
          duration: "8:36",
          file: "036"
        },

        {
          track: 37,
          name: "As-Saffah (Those Ranges in Ranks)",
          duration: "06:12",
          file: "002"
        },
        {
          track: 38,
          name: "Sad (Sad)",
          duration: "06:31",
          file: "003"
        },
        {
          track: 39,
          name: "Az-Zumar (the Groups)",
          duration: "06:52",
          file: "004"
        },
        {
          track: 40,
          name: "Ghafar (the Forgiver)",
          duration: "12:44",
          file: "005"
        },
        {
          track: 41,
          name: "Fusilat (Distinguished)",
          duration: "13:02",
          file: "006"
        },
        {
          track: 42,
          name: "Ash-Shura (the Consultation)",
          duration: "5:44",
          file: "007"
        },
        {
          track: 43,
          name: "Az-Zukhruf (the Gold)",
          duration: "5:26",
          file: "008"
        },
        {
          track: 44,
          name: "Ad-Dukhan (the Smoke)",
          duration: "5:46",
          file: "009"
        },
        {
          track: 45,
          name: "Al-Jathiyah (the Kneeling)",
          duration: "5:25",
          file: "010"
        },
        {
          track: 46,
          name: "Al-Ahqaf (the Valley)",
          duration: "5:53",
          file: "011"
        },
        {
          track: 47,
          name: "Muhammad (Muhammad)",
          duration: "4:40",
          file: "012"
        },
        {
          track: 48,
          name: "Al-Fat’h (the Victory)",
          duration: "13:15",
          file: "013"
        },
        {
          track: 49,
          name: "Al-Hujurat (the Dwellings)",
          duration: "8:12",
          file: "014"
        },
        {
          track: 50,
          name: "Qaf (Qaf)",
          duration: "7:02",
          file: "015"
        },
        {
          track: 51,
          name: "Adz-Dzariyah (the Scatterers)",
          duration: "5:43",
          file: "016"
        },
        {
          track: 52,
          name: "At-Tur (the Mount)",
          duration: "10:45",
          file: "017"
        },
        {
          track: 53,
          name: "An-Najm (the Star)",
          duration: "5:36",
          file: "018"
        },
        {
          track: 54,
          name: "Al-Qamar (the Moon)",
          duration: "2:48",
          file: "019"
        },
        {
          track: 55,
          name: "Ar-Rahman (the Most Gracious)",
          duration: "5:46",
          file: "020"
        },
        {
          track: 56,
          name: "Al-Waqi’ah (the Event)",
          duration: "13:07",
          file: "021"
        },
        {
          track: 57,
          name: "Al-Hadid (the Iron)",
          duration: "5:16",
          file: "022"
        },
        {
          track: 58,
          name: "Al-Mujadilah (the Reasoning)",
          duration: "5:46",
          file: "023"
        },
        {
          track: 59,
          name: "Al-Hashr (the Gathering)",
          duration: "4:51",
          file: "024"
        },
        {
          track: 60,
          name: "Al-Mumtahanah (the Tested)",
          duration: "8:43",
          file: "025"
        },
        {
          track: 61,
          name: "As-Saf (the Row)",
          duration: "3:00",
          file: "026"
        },
        {
          track: 62,
          name: "Al-Jum’ah (Friday)",
          duration: "6:09",
          file: "027"
        },
        {
          track: 63,
          name: "Al-Munafiqun (the Hypocrites)",
          duration: "5:05",
          file: "028"
        },
        {
          track: 64,
          name: "At-Taghabun (the Loss & Gain)",
          duration: "12:32",
          file: "029"
        },
        {
          track: 65,
          name: "At-Talaq (the Divorce)",
          duration: "8:56",
          file: "030"
        },
        {
          track: 66,
          name: "At-Tahrim (the Prohibition)",
          duration: "4:55",
          file: "031"
        },
        {
          track: 67,
          name: "Al-Mulk – (the Kingdom)",
          duration: "5:45",
          file: "032"
        },
        {
          track: 68,
          name: "Al-Qalam (the Pen)",
          duration: "14:05",
          file: "033"
        },
        {
          track: 69,
          name: "Al-Haqqah (the Inevitable)",
          duration: "13:25",
          file: "034"
        },
        {
          track: 70,
          name: "Al-Ma’arij (the Elevated Passages)",
          duration: "8:37",
          file: "035"
        },
        {
          track: 71,
          name: "Nuh (Nuh)",
          duration: "8:36",
          file: "036"
        },

        {
          track: 72,
          name: "Al-Jinn (the Jinn)",
          duration: "06:12",
          file: "002"
        },
        {
          track: 73,
          name: "Al-Muzammil (the Wrapped)",
          duration: "06:31",
          file: "003"
        },
        {
          track: 74,
          name: "Al-Mudaththir (the Cloaked)",
          duration: "06:52",
          file: "004"
        },
        {
          track: 75,
          name: "Al-Qiyamah (the Resurrection)",
          duration: "12:44",
          file: "005"
        },
        {
          track: 76,
          name: "Al-Insan (the Human)",
          duration: "13:02",
          file: "006"
        },
        {
          track: 77,
          name: "Al-Mursalat (Those Sent Forth)",
          duration: "5:44",
          file: "007"
        },
        {
          track: 78,
          name: "An-Naba’ (the Great News)",
          duration: "5:26",
          file: "008"
        },
        {
          track: 79,
          name: "An-Nazi’at (Those Who Pull Out)",
          duration: "5:46",
          file: "009"
        },
        {
          track: 80,
          name: "‘Abasa (He Frowned)",
          duration: "5:25",
          file: "010"
        },
        {
          track: 81,
          name: "At-Takwir (the Overthrowing)",
          duration: "5:53",
          file: "011"
        },
        {
          track: 82,
          name: "Al-Infitar (the Cleaving)",
          duration: "4:40",
          file: "012"
        },
        {
          track: 83,
          name: "Al-Mutaffifin (Those Who Deal in Fraud)",
          duration: "13:15",
          file: "013"
        },
        {
          track: 84,
          name: "Al-Inshiqaq (the Splitting Asunder)",
          duration: "8:12",
          file: "014"
        },
        {
          track: 85,
          name: "Al-Buruj (the Stars)",
          duration: "7:02",
          file: "015"
        },
        {
          track: 86,
          name: "At-Tariq (the Nightcomer)",
          duration: "5:43",
          file: "016"
        },
        {
          track: 87,
          name: "Al-A’la (the Most High)",
          duration: "10:45",
          file: "017"
        },
        {
          track: 88,
          name: "Al-Ghashiyah (the Overwhelming)",
          duration: "5:36",
          file: "018"
        },
        {
          track: 89,
          name: "Al-Fajr (the Dawn)",
          duration: "2:48",
          file: "019"
        },
        {
          track: 90,
          name: "Al-Balad (the City)",
          duration: "5:46",
          file: "020"
        },
        {
          track: 91,
          name: "Ash-Shams (the Sun)",
          duration: "13:07",
          file: "021"
        },
        {
          track: 92,
          name: "Al-Layl (the Night)",
          duration: "5:16",
          file: "022"
        },
        {
          track: 93,
          name: "Adh-Dhuha (the Forenoon)",
          duration: "5:46",
          file: "023"
        },
        {
          track: 94,
          name: "Al-Inshirah (the Opening Forth)",
          duration: "4:51",
          file: "024"
        },
        {
          track: 95,
          name: "At-Tin (the Fig)",
          duration: "8:43",
          file: "025"
        },
        {
          track: 96,
          name: " Al-‘Alaq (the Clot)",
          duration: "3:00",
          file: "026"
        },
        {
          track: 97,
          name: "Al-Qadar (the Night of Decree)",
          duration: "6:09",
          file: "027"
        },
        {
          track: 98,
          name: "Al-Bayinah (the Proof)",
          duration: "5:05",
          file: "028"
        },
        {
          track: 99,
          name: "Az-Zalzalah (the Earthquake)",
          duration: "12:32",
          file: "029"
        },
        {
          track: 100,
          name: "Al-‘Adiyah (the Runners)",
          duration: "8:56",
          file: "030"
        },
        {
          track: 101,
          name: "Al-Qari’ah (the Striking Hour)",
          duration: "4:55",
          file: "031"
        },
        {
          track: 102,
          name: "At-Takathur (the Piling Up)",
          duration: "5:45",
          file: "032"
        },
        {
          track: 103,
          name: "Al-‘Asr (the Time)",
          duration: "14:05",
          file: "033"
        },
        {
          track: 104,
          name: "Al-Humazah (the Slanderer)",
          duration: "13:25",
          file: "034"
        },
        {
          track: 105,
          name: "Al-Fil (the Elephant)",
          duration: "8:37",
          file: "035"
        },
        {
          track: 106,
          name: "Quraish (Quraish)",
          duration: "8:36",
          file: "036"
        },

        {
          track: 107,
          name: "Al-Ma’un (the Assistance)",
          duration: "12:32",
          file: "029"
        },
        {
          track: 108,
          name: "Al-Kauthar (the River of Abundance)",
          duration: "8:56",
          file: "030"
        },
        {
          track: 109,
          name: "Al-Kafirun (the Disbelievers)",
          duration: "4:55",
          file: "031"
        },
        {
          track: 110,
          name: "An-Nasr (the Help)",
          duration: "5:45",
          file: "032"
        },
        {
          track: 111,
          name: "Al-Masad (the Palm Fiber)",
          duration: "14:05",
          file: "033"
        },
        {
          track: 112,
          name: "Al-Ikhlas (the Sincerity)",
          duration: "13:25",
          file: "034"
        },
        {
          track: 113,
          name: "Al-Falaq (the Daybreak)",
          duration: "8:37",
          file: "035"
        },
        {
          track: 114,
          name: "An-Nas (Mankind)",
          duration: "8:36",
          file: "036"
        }
      ],
      buildPlaylist = $.each(tracks, function (key, value) {
        var trackNumber = value.track,
          trackName = value.name,
          trackDuration = value.duration;
        if (trackNumber.toString().length === 1) {
          trackNumber = "0" + trackNumber;
        }
        $("#plList").append(
          '<li> \
                    <div class="plItem"> \
                        <span class="plNum">' +
            trackNumber +
            '.</span> \
                        <span class="plTitle">' +
            trackName +
            '</span> \
                        <span class="plLength">' +
            trackDuration +
            "</span> \
                    </div> \
                </li>"
        );
      }),
      trackCount = tracks.length,
      npAction = $("#npAction"),
      npTitle = $("#npTitle"),
      audio = $("#audio1")
        .on("play", function () {
          playing = true;
          npAction.text("Now Playing...");
        })
        .on("pause", function () {
          playing = false;
          npAction.text("Paused...");
        })
        .on("ended", function () {
          npAction.text("Paused...");
          if (index + 1 < trackCount) {
            index++;
            loadTrack(index);
            audio.play();
          } else {
            audio.pause();
            index = 0;
            loadTrack(index);
          }
        })
        .get(0),
      btnPrev = $("#btnPrev").on("click", function () {
        if (index - 1 > -1) {
          index--;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      btnNext = $("#btnNext").on("click", function () {
        if (index + 1 < trackCount) {
          index++;
          loadTrack(index);
          if (playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      li = $("#plList li").on("click", function () {
        var id = parseInt($(this).index());
        if (id !== index) {
          playTrack(id);
        }
      }),
      loadTrack = function (id) {
        $(".plSel").removeClass("plSel");
        $("#plList li:eq(" + id + ")").addClass("plSel");
        npTitle.text(tracks[id].name);
        index = id;
        audio.src = mediaPath + tracks[id].file + extension;
        updateDownload(id, audio.src);
      },
      updateDownload = function (id, source) {
        player.on("loadedmetadata", function () {
          $('a[data-plyr="download"]').attr("href", source);
        });
      },
      playTrack = function (id) {
        loadTrack(id);
        audio.play();
      };
    extension = audio.canPlayType("audio/mpeg")
      ? ".mp3"
      : audio.canPlayType("audio/ogg")
      ? ".ogg"
      : "";
    loadTrack(index);
  } else {
    // no audio support
    $(".column").addClass("hidden");
    var noSupport = $("#audio1").text();
    $(".container").append('<p class="no-support">' + noSupport + "</p>");
  }
});

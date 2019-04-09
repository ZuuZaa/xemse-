var suallar = [

    {
        sual: "Bu meyvənin elmi adı iki latın sözünün birləşməsindən əmələ gəlmişdir. Punica - tünd qırmızı və granatus - dənə deməkdir.",
        cavab: ["nar", "üzüm", "qarağat", "şaftalı"],
        dogrucavab: "nar"
    },
    {
        sual: "Azərbaycanda bu meyvənin əti məcməilərə yayılaraq günəşdə qurudulur və ondan”lavaş” hazırlanılır.",
        cavab: ["üzüm", "armud", "nar", "alça"],
        dogrucavab: "alça"
    },
    {
        sual: "Avropalılar orta əsrlərdə Çin dövlətinin məmurlarını bu bitkinin adı ilə adlandırırdılar.",
        cavab: ["Mandarin", "Banan", "Alma", "Kivi"],
        dogrucavab: "Mandarin"
    },
    {
        sual: "Bu meyvənin hərfi mənada tərcüməsi - Fars gavalısı deməkdir",
        cavab: ["Ərik", "Albalı", "Şaftalı", "Moruq",] ,
        dogrucavab: "Şaftalı"
    },
    {
        sual: "1801 - ci ildə Portuqaliya və İspaniya arasında olmuş müharibə",
        cavab: ["Portağal","Heyva","Armud", "Göyəm"],
        dogrucavab: "Portağal"
    },
    {
        sual: " Avstraliyanın cənub sahillərində yerləşən ada",
        cavab: ["Ağ ayı","İlan","Kenquru", "Maral"],
        dogrucavab: "Kenquru"
    },
    {
        sual: "Bu qitənin adının mənası - böyük ayı bürcünün əksində deməkdir.",
        cavab: ["Avropa", "Amerika","Antarktida","Asiya"],
        dogrucavab: "Antarktida"
    },
    {
        sual: "Timsahlı çay - mənasını verən Mali dövlətinin paytaxtı bu şəhərdir",
        cavab: ["Bali","Birma","Bamako","Butan"],
        dogrucavab: "Bamako"
    },
    {
        sual: "İsveçrənin paytaxt şəhəri Bern alman dilindən tərcümədə bu heyvanı bildirir ",
        cavab: ["kərtənkələ","ayı", "arı", "kirpi"],
        dogrucavab: "ayı"
    },
    {
        sual: "Lui Stoumenin 1962-ci ildə Adolf Hitlerin həyatı haqqında çəkdiyi və Oskara layiq görülmüş bu film belə adlanır",
        cavab: ["Yalnız Canavar","Zəhərli ilan", "Qara Tülkü","Pələng"],
        dogrucavab: "Qara Tülkü"
    },
    {
        sual: " Saat əqrəbi istiqamətində hərəkət edən yeganə planet",
        cavab: ["Mars",  "Yupitern", "Venera", "Saturn"],
        dogrucavab: "Venera"
    },
    {
        sual: "İlk gözəllik müsaqibəsi bu Avropa ölkəsində keçirilib",
        cavab: ["Fransa", "Alamaniya","Belçika", "İtaliiya"],
        dogrucavab: "Belçika"
    },
    {
        sual: "Kürün Xəzərə tökülən qolu belə adlanır",
        cavab: ["Balıqlı","Tökmə","Aquşa","Qovuşan"],
        dogrucavab: "Aquşa"
    },
    {
        sual: "Bombalar və güllələr haqqında elm belə adlanır",
        cavab: ["Talistika", "Balistika", "Bombastika", "Kinomaniya"],
        dogrucavab: "Balistika"
    },
    {
        sual: "Bu canlının elmi adı struthio-camelusdur",
        cavab: ["Çaqqal","Dəvə","Dəvəquşu","Pələng"],
        dogrucavab: "Dəvəquşu"
    },
    {
        sual: "Bu amerikalı yazıçının əsl adı Con Qrafitedir",
        cavab: ["Adam Boston","Adrian Polo", "Jon Smit", "Cek London" ],
        dogrucavab: "Cek London" 
    },
    {
        sual: "2014-cü ilin qış olimpiya oyunları bu şəhərdə keçirildi",
        cavab: ["Soçi", "Bakı","Ankara","Tokyo"],
        dogrucavab: "Soçi"
    },
    {
        sual: "ABŞ-n bu şəhərini - Böyük alma adlandırırlar",
        cavab: [ "Nyu Jersi",  "Vaşinqton", "Nyu York", "Boston"],
        dogrucavab: "Nyu York"
    },
    {
        sual: "XVII əsr italyan səyyahı Pyetro Dello Valle bu şəhəri - Azərbaycan Venesiyası adlandırmışsdır",
        cavab: ["Ərdəbil", "Gəncə", "Təbriz", "Bakı"],
        dogrucavab: "Ərdəbil" 
    }]


$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    data: {
        q: "happy",
        api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT"
    }
}).done(function (happy) {
    console.log(happy)
    happy_img = happy.data[5].images.fixed_height.url
})

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    data: {
        q: "sad",
        api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT"
    }
}).done(function (sad) {
    sad_img = sad.data[3].images.fixed_height.url
    sad_img2 = sad.data[11].images.fixed_height.url
})

var second = 30
var alert = $(".win-loose")
var panel = $(".btn-holder")

var game = {
    question: suallar,
    times: second,
    correct: 0,
    incorrect: 0,
    questionnumber: 0,

    timer: function () {
        instance = this;
        interval = setInterval(function () {
            $(".time").empty()
            game.times--
            $(".time").append($("<h2>" + game.times + "</h2>"))
            if (game.times === 0) {
                clearInterval(interval)
                game.times = 30
                alert.append($("<h2>" + "VAXT BITDI :(" + "</h2>"))
                panel.empty()
                $(".gif-holder img").attr("src", sad_img2)
                alert.append("<h2>" + "OOPS! Doğru cavab:  " + suallar[instance.questionnumber].dogrucavab + "</h2>")
                game.questionnumber++
                if (instance.questionnumber < 19) {
                    console.log("i:" + instance.questionnumber)
                    setTimeout(function () {
                        panel.empty()
                        alert.empty()
                        game.nextquestion()
                    }, 3000)
                } else {
                    setTimeout(function () {
                        panel.empty()
                        alert.empty()
                        game.result()
                    }, 3000)
                }

            }
        }, 100)
    },

    nextquestion: function () {
        this.timer();
        $(".gif-holder img").attr("src", "")
        var sual = ($("<div>"))
        sual.addClass("sual")
        sual.html("<h2>" + suallar[this.questionnumber].sual + "</h2>")
        panel.append(sual)
        for (let i = 0; i < suallar[this.questionnumber].cavab.length; i++) {
            var answer = $("<button>")
            answer.addClass("btn-light")
            answer.addClass("my-btn")
            answer.html(suallar[this.questionnumber].cavab[i])
            if (suallar[this.questionnumber].cavab[i] === suallar[this.questionnumber].dogrucavab) {
                answer.addClass("dogru")
            }
            panel.append(answer)
        }

        $(".my-btn").on("click", function (e) {
            console.log("klik")
            game.check(e)
        })

    },
    check: function (e) {
        console.log("check")
        clearInterval(interval)
        game.times = 30
        if ($(e.target).hasClass("dogru")) {
            game.correct++
            panel.empty()
            alert.append("<h2>" + "CAVAB DOĞRUDUR :)" + "</h2>")
            $(".gif-holder img").attr("src", happy_img)
        } else {
            game.incorrect++
            panel.empty()
            alert.append("<h2>" + "OOPS! Doğru cavab:  " + suallar[this.questionnumber].dogrucavab + "</h2>")
            $(".gif-holder img").attr("src", sad_img)
        }
        game.questionnumber++
        if (instance.questionnumber < 19) {
            console.log("i:" + instance.questionnumber)
            setTimeout(function () {
                panel.empty()
                alert.empty()
                game.nextquestion()
            }, 3000)
        } else {
            setTimeout(function () {
                panel.empty()
                alert.empty()
                game.result()
            }, 3000)
        }
    },
    result: function () {
        clearInterval(interval)
        panel.empty()
        $(".gif-holder img").attr("src", "")
        panel.append("<h2>Doğrular: " + this.correct + "</h2>")
        panel.append("<h2>Yanlışlar: " + this.incorrect + "</h2>")
        panel.append("<h2>Cavabsızlar: " + (this.questions.length - (this.incorrect + this.correct)) + "</h2>")
    }

}

game.nextquestion()

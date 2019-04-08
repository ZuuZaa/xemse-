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
    }] /*,
    {
        sual: "Bu meyvənin hərfi mənada tərcüməsi - Fars gavalısı deməkdir",
        cavab: [{ name: "Ərik", value: false },
        { name: "Albalı", value: false },
        { name: "Şaftalı", value: true },
        { name: "Moruq", value: false }]
    },
    {
        sual: "1801 - ci ildə Portuqaliya və İspaniya arasında olmuş müharibə",
        cavab: [{ name: "Portağal", value: true },
        { name: "Heyva", value: false },
        { name: "Armud", value: false },
        { name: "Göyəm", value: false }]
    },
    {
        sual: " Avstraliyanın cənub sahillərində yerləşən ada",
        cavab: [{ name: "Ağ ayı", value: false },
        { name: "İlan", value: false },
        { name: "Kenquru", value: true },
        { name: "Maral", value: false }]
    },
    {
        sual: "Bu qitənin adının mənası - böyük ayı bürcünün əksində deməkdir.",
        cavab: [{ name: "Avropa", value: false },
        { name: "Amerika", value: false },
        { name: "Antarktida", value: true },
        { name: "Asiya", value: false }]
    },
    {
        sual: "Timsahlı çay - mənasını verən Mali dövlətinin paytaxtı bu şəhərdir",
        cavab: [{ name: "Bali", value: false },
        { name: "Birma", value: false },
        { name: "Bamako", value: true },
        { name: "Butan", value: false }]
    },
    {
        sual: "İsveçrənin paytaxt şəhəri Bern alman dilindən tərcümədə bu heyvanı bildirir ",
        cavab: [{ name: "kərtənkələ", value: false },
        { name: "ayı", value: true },
        { name: "arı", value: false },
        { name: "kirpi", value: false }]
    },
    {
        sual: "Lui Stoumenin 1962-ci ildə Adolf Hitlerin həyatı haqqında çəkdiyi və Oskara layiq görülmüş bu film belə adlanır",
        cavab: [{ name: "Yalnız Canavar", value: false },
        { name: "Zəhərli ilan", value: false },
        { name: "Qara Tülkü", value: true },
        { name: "Pələng", value: false }]
    },
    {
        sual: " Saat əqrəbi istiqamətində hərəkət edən yeganə planet",
        cavab: [{ name: "Mars", value: false },
        { name: "Yupitern", value: false },
        { name: "Venera", value: true },
        { name: "Saturn", value: false }]
    },
    {
        sual: "İlk gözəllik müsaqibəsi bu Avropa ölkəsində keçirilib",
        cavab: [{ name: "Fransa", value: false },
        { name: "Alamaniya", value: false },
        { name: "Belçika", value: true },
        { name: "İtaliiya", value: false }]
    },
    {
        sual: "Kürün Xəzərə tökülən qolu belə adlanır",
        cavab: [{ name: "Balıqlı", value: false },
        { name: "Tökmə", value: false },
        { name: "Aquşa", value: true },
        { name: "Qovuşan", value: false }]
    },
    {
        sual: "Bombalar və güllələr haqqında elm belə adlanır",
        cavab: [{ name: "Talistika", value: false },
        { name: "Balistika", value: true },
        { name: "Bombastika", value: false },
        { name: "Kinomaniya", value: false }]
    },
    {
        sual: "Bu canlının elmi adı struthio-camelusdur",
        cavab: [{ name: "Çaqqal", value: false },
        { name: "Dəvə", value: false },
        { name: "Dəvəquşu", value: true },
        { name: "Pələng", value: false }]
    },
    {
        sual: "Bu amerikalı yazıçının əsl adı Con Qrafitedir",
        cavab: [{ name: "Adam Boston", value: false },
        { name: "Adrian Polo", value: false },
        { name: "Jon Smit", value: false },
        { name: "Cek London", value: true }]
    },
    {
        sual: "2014-cü ilin qış olimpiya oyunları bu şəhərdə keçirildi",
        cavab: [{ name: "Soçi", value: true },
        { name: "Bakı", value: false },
        { name: "Ankara", value: false },
        { name: "Tokyo", value: false }]
    },
    {
        sual: "ABŞ-n bu şəhərini - Böyük alma adlandırırlar",
        cavab: [{ name: "Nyu Jersi", value: false },
        { name: "Vaşinqton", value: false },
        { name: "Nyu York", value: true },
        { name: "Boston", value: false }]
    },
    {
        sual: "XVII əsr italyan səyyahı Pyetro Dello Valle bu şəhəri - Azərbaycan Venesiyası adlandırmışsdır",
        cavab: [{ name: "Ərdəbil", value: true },
        { name: "Gəncə", value: false },
        { name: "Təbriz", value: false },
        { name: "Bakı", value: false }]
    }]

*/


$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    data: {
        q: "happy",
        api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT"
    }
}).done(function (happy) {
    console.log(happy)
})

$.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    data: {
        q: "sad",
        api_key: "c4UCMdKemf33qzUJMnURnI50YjHBmCRT"
    }
}).done(function (sad) {
    console.log(sad)
})

var second = 30

var game = {
    question: suallar,
    times: second,
    correct: 0,
    incoorect: 0,
    questionnumber: 0,

    timer: function () {
        $(".time").empty()
        game.times--
        $(".time").append($("<h2>" + game.times + "</h2>"))
        if (game.times === 0) {
            clearInterval(interval)
            alert("Vaxt bitdi")
            $(".win-loose").append($("<h2>" + "VAXT BITDI :(" + "</h2>"))
            console.log (game.question[instance].dogrucavab)
            $(".win-loose").append("<h2>" + "Doğru cavab:  " + game.question[instance].dogrucavab + "</h2>")
            if (instance === game.question.length - 1) {
                   alert ("suallar bitdi")
                setTimeout(function () {

                    clearInterval(interval)
                    $(".win-loose").append("<h2>" + "Oyun bitdi! Nəticələrin:" + "</h2>");
                    $(".time").append($("<h2>" + game.times + "</h2>"))

                     alert("neticeler")
                    $(".btn-holder").append("<h2>Doğrular: " + game.correct + "</h2>");
                    $(".btn-holder").append("<h2>Yanlışlar: " + game.incorrect + "</h2>");
                    $(".btn-holder").append("<h2>Cavabsızlar: " + (game.questions.length - (game.incorrect + game.correct)) + "</h2>");
                    $(".btn-holder").append("<br><button id='new-button'>yenidən ?</button>");
                }, 5000)
            }
            else {
                setTimeout(game.yenisual, 5000)
            }
        }
    },
    

    yenisual: function () {
        for ( var j=0; j < suallar.length; j++ ) {
        instance = j
        console.log (instance)
        game.times = second
        $(".time").append($("<h2>" + game.times + "</h2>"))
        setInterval(game.timer, 300);
        console.log (game.question[j].sual)
        var sual = ($("<div>"))
        sual.addClass("sual")
        sual.html("<h2>" + game.question[j].sual + "</h2>");
        $(".win-loose").append(sual)

        for (var i = 0; i < game.question[j].cavab.length; i++) {
            var answer = $("<button>")
            answer.addClass("btn-light")
            answer.addClass("my-btn")
            console.log(game.question[j].cavab[i])
            sual.html("<h2>" + game.question[j].cavab[i] + "</h2>")
            $(".btn-holder").append(sual)
        }
    }
},

   check: function(e) {
        console.log(e.html)
        if (e.html === question[instance].dogrucavab) {
            $(".win-loose").append($("<h2>" + "YEAP!" + "</h2>"))
            alert("yeap")
            game.correct ++
        } else {
            $(".win-loose").append($("<h2>" + "OOPS!" + "</h2>"))
            alert("oops")
            game. incorrect ++
        }
    }
} 

interval = setInterval(game.timer, 300)
game.yenisual()
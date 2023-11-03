const readlineSync = require("readline-sync")
let random = Math.round(Math.random() * 10)
vraag0()
function vraag0() {
    console.clear()
    console.log
        (`██████╗░███████╗  ████████╗░█████╗░██╗░░██╗███████╗░█████╗░░██╗░░░░░░░██╗░█████╗░██╗░░░██╗
██╔══██╗██╔════╝  ╚══██╔══╝██╔══██╗██║░██╔╝██╔════╝██╔══██╗░██║░░██╗░░██║██╔══██╗╚██╗░██╔╝
██║░░██║█████╗░░  ░░░██║░░░███████║█████═╝░█████╗░░███████║░╚██╗████╗██╔╝███████║░╚████╔╝░
██║░░██║██╔══╝░░  ░░░██║░░░██╔══██║██╔═██╗░██╔══╝░░██╔══██║░░████╔═████║░██╔══██║░░╚██╔╝░░
██████╔╝███████╗  ░░░██║░░░██║░░██║██║░╚██╗███████╗██║░░██║░░╚██╔╝░╚██╔╝░██║░░██║░░░██║░░░
╚═════╝░╚══════╝  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝░░░╚═╝░░░
    
      ██╗░░██╗░█████╗░███╗░░░███╗██╗░█████╗░██╗██████╗░███████╗
      ██║░░██║██╔══██╗████╗░████║██║██╔══██╗██║██╔══██╗██╔════╝
      ███████║██║░░██║██╔████╔██║██║██║░░╚═╝██║██║░░██║█████╗░░
      ██╔══██║██║░░██║██║╚██╔╝██║██║██║░░██╗██║██║░░██║██╔══╝░░
      ██║░░██║╚█████╔╝██║░╚═╝░██║██║╚█████╔╝██║██████╔╝███████`)
    const begingame = readlineSync.question(`PRESS A TO START!\n`)
    if (begingame === "a") {
        vraag1();
    }
    else (vraag0())




}

function vraag1() {

    const keuze1 = readlineSync.question(`het is midden in de nacht en er klopt iemand aan je deur

    wat ga je doen?
    
    
    A: Doorslapen
    B: Naar de deur lopen \n
    `)

    if (keuze1 === "a") {
        console.clear();
        einde1()
    }

    else if (keuze1 === "b") {
        console.clear();
        vraag2()
    }
}

function vraag2() {
    console.clear();
    const keuze2 = readlineSync.question(`je staat net op en . . .
    Het geklop word steeds harder !!
    
    wat ga je doen?
    
    A: lopen naar de deur 
    B: rennen naar de deur\n `)
    if (keuze2 === "a") {
        console.clear();
        vraag3()
    }

    else if (keuze2 === "b") {
        console.clear();
        vraag3()
    }
}

function vraag3() {
    console.clear();
    const keuze3 = readlineSync.question(`je bent nu eindeljk bij de deur
    het gebonk is opeens gestopt
    
    wat ga je doen?
    
    A: voorzichtig kijken door het spiekgaatje 
    B: deur openen zonder te checken \n
    `)
    if (keuze3 === "a") {
        console.clear();
        vraag19()
    }

    else if (keuze3 === "b") {
        console.clear();
        vraag4()
    }
    else (console.clear())
}
a
function vraag4() {
    console.clear();
    const keuze4 = readlineSync.question(`er staat een vreemde man met een helm een grote vierkante tas voor de deur
    de lampen van je voortuin staan uit en het stormt buiten
    
    wat doe je nu?
    
    A: Wie the fuck ben jij? 
    B: kan ik u helpen?\n `)
    if (keuze4 === "a") {
        console.clear();
        vraag5()
    }

    else if (keuze4 === "b") {
        console.clear();
        einde1()
    }
}

function vraag5() {
    console.clear();
    const keuze5 = readlineSync.question(`de man laat zijn tas op de grond vallen
    en knijpt zijn vuist
    hij lijkt heel boos en loopt naar je toe
    
    je zet rustig een stap naar achteren voor dat je:
    
    A: naar achteren rennen 
    B: rustig naar achteren blijven lopen\n `)
    if (keuze5 === "a") {
        console.clear();
        vraag6()
    }


    else if (keuze5 === "b") {
        console.clear();
        vraag6()
    }
}
function vraag6() {
    console.clear();
    const keuze6 = readlineSync.question(`je komt aan bij je keuken en de man staat 3 meter voor je
        je pakt uit zelfverdedeging een mes terwijl de man steeds dichterbij komt
        
        wat doe je nu?
        
        A: het mes gooien 
        B: zo snel mogelijk naar hem toe rennen en hem neersteken \n
        `)
    if (keuze6 === "a") {
        console.clear();
        einde3()
    }

    else if (keuze6 === "b") {
        console.clear();
        einde3()
    }
}
function vraag7() {
    console.clear();
    const keuze7 = readlineSync.question(`broertje komt opeens beneden en laat je schrikken (hij hoorde niet thuis te zijn)
        je schrikt je dood en....
        
        A: je slaat hem knock out 
        B: waarom ben jij thuis?!!!\n `)
    if (keuze7 === "a") {
        console.clear();
        vraag9()
    }

    else if (keuze7 === "b") {
        console.clear();
        vraag8()
    }
}
function vraag8() {
    console.clear();
    const keuze8 = readlineSync.question(`je vraagt hem waarom die thuis is 

        hij antwoord: ik had geen zin om mee te gaan met pap en mam...
        
        hij had pizza besteld en had niet verwacht dat de bezorger zou aanbellen
        
        wat doe je nu?
        
        A: pizza aan broertje geven en verder gaan slapen 
        B: zelf houden want anders vertel je alles aan mama!\n `)
    if (keuze8 === "a") {
        console.clear();
        einde1()
    }

    else if (keuze8 === "b") {
        console.clear();
        einde6()
    }
}
function vraag9() {
    console.clear();
    const keuze9 = readlineSync.question(`BOEM

        je slaat hem knock out!
        
        A: proberen wakker te maken 
        B: ambulance bellen \n
        `)
    if (keuze9 === "a") {
        console.clear();
        vraag10()
    }

    else if (keuze9 === "b") {
        console.clear();
        vraag11()
    }
}
function vraag10() {
    console.clear();
    const keuze10 = readlineSync.question(`je probeert hem wakker te maken 
        het werkt niet !
        
        A: weer wakker proberen te maken 
        B: ambulance bellen\n `)
    if (keuze10 === "a") {
        console.clear();
        vraag21()
    }

    else if (keuze10 === "b") {
        console.clear();
        vraag21()
    }
}

function vraag11() {
    console.clear();
    const keuze11 = readlineSync.question(`je bent de ambulance en de medewerker geeft je instucties

        A: niet luisteren en hopen dat ze optijd kunnen komen
        B: luisteren naar de medewerker en hem proberen wakker te maken \n
        `)
    if (keuze11 === "a") {
        console.clear();
        einde8()
    }

    else if (keuze11 === "b") {
        console.clear();
        einde7()
    }
}
function vraag12() {
    console.clear();
    const keuze12 = readlineSync.question(`terwijl je naar de deur loopt staat je broerje daar ook opeens
        hij hoorde eigenlijk nu niet thuis te zijn!
        
        wat vraag je aan hem?
        
        A: waarom ben je thuis? 
        B: hoorde jij niet bij oma te zijn nu? \n`)
    if (keuze12 === "a") {
        console.clear();
        einde5()
    }

    else if (keuze12 === "b") {
        console.clear();
        einde5()
    }
}
function vraag13() {
    console.clear();
    const keuze13 = readlineSync.question(`de man doet zijn helm uit en zegt dat hij een bestelling heeft voor dit adress 
        nummer 30 zegt hij
        
        jij woont op nummer 28
        wat doe je nu?
        
        A: liegen tegen hem en de pizza houden 
        B: doorverwijzen naar de buren \n`)
    if (keuze13 === "a") {
        console.clear();
        einde5()
    }

    else if (keuze13 === "b") {
        console.clear();
        einde1()
    }
}
function vraag14() {
    console.clear();
    const keuze14 = readlineSync.question(`je loopt naar de raam en doet hem rustig open
        de man zegt nog niks
        
        wat zeg je tegen hem?
        
        A: hey kan ik u helpen?
        B: wat is er!??!\n`)
    if (keuze14 === "a") {
        console.clear();
        vraag13()
    }

    else if (keuze14 === "b") {
        console.clear();
        vraag13()
    }
}
function vraag15() {
    console.clear();
    const keuze15 = readlineSync.question(`je pakt voorzichtig een mes
        de man ziet je waarschijnlijk nog niet
        
        wat doe je nu?
        
        A: loop naar je raam en val de man aan 
        B: terug lopen en de voordeur goed op slot doen \n
        `)
    if (keuze15 === "a") {
        console.clear();
        einde3()
    }

    else if (keuze15 === "b") {
        console.clear();
        vraag12()
    }
}

function vraag16() {
    console.clear();
    const keuze16 = readlineSync.question(`de man blijft stil staan en ziet klopt heel heel hard op het raam

        wat nu?
        
        A: mes pakken 
        B: het raam open doen \n`)
    if (keuze16 === "a") {
        console.clear();
        vraag15()
    }

    else if (keuze16 === "b") {
        console.clear();
        vraag14()
    }
}
function vraag17() {
    console.clear();
    const keuze17 = readlineSync.question(`je loopt naar de koelkast en doet hem open
        terwijl je de deur open doet kijk je om je heen
        
        ER STAAT IEMAND VOOR HET RAAM
        wat doe je nu?
        
        A: je blijft staan 
        B: je rent weg naar bed en gaat daar slapen \n
        `)
    if (keuze17 === "a") {
        console.clear();
        vraag16()
    }

    else if (keuze17 === "b") {
        console.clear();
        einde4()
    }
}

function vraag18() {
    console.clear();
    const keuze18 = readlineSync.question(`het waait te hard om iets te kunnen horen
        je kijkt door het spiekgaatje en je ziet niks meer
        je wil naar bed maar je bent nu ondertussen klaarwakker
        
        wat doe je nu?
        
        A: een film film kijken in de woonkamer 
        B: naar de keuken een snack pakken \n
        `)
    if (random <= 3) {
        vraag7
    }

    else if (keuze18 === "a") {
        console.clear();
        vraag16()
    }

    else if (keuze18 === "b") {
        console.clear();
        einde2()
    }
}
function vraag19() {
    console.clear();
    const keuze19 = readlineSync.question(`je kijkt door het spiek gaatje
        het is te donker om goed te zien maar het klinkt als een man die iets roept
        
        wat doe je nu?
        
        A: je loop naar boven en roept kijkt uit het raam 
        B: je bukt en roept door de brievenbus \n
        `)
    if (keuze19 === "a") {
        console.clear();
        einde1()
    }

    else if (keuze19 === "b") {
        console.clear();
        vraag18()
    }
}

function vraag20() {
    console.clear();
    const keuze20 = readlineSync.question(`ambulance neemt niet op?!
        je broertje beweegt niet meer en lijkt dood
        
        wat nu?
        
        A: opnieuw bellen! 
        B: je tilt je broertje op en legt hem op de bank en wacht \n
        `)
    if (keuze20 === "a") {
        console.clear();
        vraag8()
    }

    else if (keuze20 === "b") {
        console.clear();
        vraag22()
    }
}
function vraag21() {
    console.clear();
    const keuze21 = readlineSync.question(`hij word nogsteeds niet wakker???
        hij ziet er helemaal wit uit en heeft geen hartslag!
        je word doodsbang dat jij alle schuld krijgt van dit
        
        wat doe je nu?
        
        A: je doet hem in een groot vuilniszak en brengt hem naar de tuin... 
        B: je sleept hem naar het riviertje achter het huis....\n `)
    if (keuze21 === "a") {
        console.clear();
        einde9()
    }

    else if (keuze21 === "b") {
        console.clear();
        einde9()
    }
}
function vraag22() {
    console.clear();
    const keuze22 = readlineSync.question(`je bent bij de koelkast maar je hoort geluiden buiten
        bijna alsof er iemand in je voortuin zit....
        
        wat doe je nu?
        
        A: even rondkijken om te zien of er iemand buiten is
        B: negeren en een snack uit de koelkast pakken \n`)
    if (keuze22 === "a") {
        console.clear();
        vraag17()
    }

    else if (keuze22 === "b") {
        console.clear();
        vraag17()
    }
}
function einde1() {

    console.clear()
    console.log(`het was gelukkig gewoon een pizza bezorger! -__-`)
    
}
function einde2() {
    console.clear()
    console.log(`de man had blijkbaar geen goed dag en zegt haalt je in
    hij steekt je neer en rent weg met de pizza
    het was dus gewoon een pizza bezorger?!!`)
    
}

function einde3() {
    console.clear()
    console.log(`de man had blijkbaar geen goed dag en slaat je knock out
    hij steekt je neer en rent weg met de pizza
    het was dus gewoon een pizza bezorger?!!
    `);
    
}

function einde4() {
    console.clear()
    console.log(`na lang liggen en geluiden horen val je in slaap en slaap je de hele nacht door`)
    
}

function einde5() {
    console.clear()
    console.log(`het was pizza voor je broertje die eigenlijk niet thuis hoorde te zijn nu!
    `)
    
}

function einde6() {
    console.clear()
    console.log(`Gratis pizzaaaa!!!`)
    
}

function einde7() {
    console.clear()
    console.log(`je broertje word wakker en vertelt dat hij stiekem thuis gebleven en had een pizza besteld`)
    
}

function einde8() {
    console.clear()
    console.log(`ambulance komt je broertje word wakker en vertelt dat hij stiekem thuis gebleven en had een pizza besteld`)
    
}

function einde9() {
    console.clear()
    console.log(`je broertje is dood en de volgende ochtend ben je weg
    je maakt een nieuw id en verhuist naar Kazachstan
    uiteindelijk na 10 jaar klopt de politie aan je deur
    ze houden je aan en je krijgt levenslang cellstraf
    `)
    
}




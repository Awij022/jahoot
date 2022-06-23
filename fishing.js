/* 
Installs Jahoot! - Fishing Addon in your browser.
How to use:
1. Install Jahoot! and this addon (do this in order)
2. Put the function "jahoot.fishing.check();" after every Jahoot question that you make.

Addon made by Awij126
Compatible with Jahoot 1.0+.
*/

alert("--Jahoot! Fishing Addon Install--\n\nDescription: Fishing for Jahoot!\nAuthor: Awij126\n\nPress ENTER to continue.\nClose this browser window to cancel.\n\nRequies Jahoot!");
jahoot.vars.fishing_money = 0;
jahoot.vars.fishing_bait = 1;
jahoot.vars.fishing_rank = "Newbie (x1 Profits)";
jahoot.fishing = {
    reset: function() {
        jahoot.vars.score = 0;
        jahoot.vars.isCorrect = 0;
        jahoot.vars.fishing_money = 0;
        jahoot.vars.fishing_bait = 1;
        jahoot.vars.fishing_rank = "Newbie (x1 Profits)";
    },
    list: {
        bait1: [
            "a Dusty Penny!",
            "some Fish Bones!",
            "a soggy Pretzel!",
            "some Seaweed!",
            "a rusty Soda Can!",
            "a Sardine!",
            "a Sea Star!",
            "a Manta Ray!",
            "a silver Coin!",
            "a Sea Urchin!",
            "some Level 2 bait! 🐟",
            "some Level 2 bait! 🐟"
        ],
        bait2: [
            "a World War II Penny!",
            "an old Sock!",
            "a piece of Coral!",
            "some Plastic Rings!",
            "a Goldfish!",
            "a Jellyfish!",
            "a Jellyfish!",
            "a Rainbow Jellyfish!",
            "a Blobfish!",
            "a Magenta Blobfish!",
            "some level 3 bait! 🐠"
        ],
        bait3: [
            "some Cotton Swabs!",
            "an old Rock!",
            "a shiny Penny!",
            "a rusty Quarter!",
            "a Seal!",
            "a Tuna!",
            "a bunch of Shrimp!",
            "an Octopus!",
            "an Octopus!",
            "a Squid!",
            "a Great Squid!",
            "a rusty Gold Coin!",
            "some level 4 bait! 🐡",
            "some level 4 bait! 🐡"
        ],
        bait4: [
            "some level 5 bait! 🦈"
        ]
    },
    listValues: {
        bait1: [
            1,
            Math.floor(Math.random()*1),
            Math.floor(Math.random()*1),
            Math.floor(Math.random()*1)+1,
            Math.floor(Math.random()*2),
            Math.floor(Math.random()*5)+1,
            Math.floor(Math.random()*5)+1,
            Math.floor(Math.random()*25)+5,
            Math.floor(Math.random()*100)+10,
            Math.floor(Math.random()*500)+50,
            Math.floor(Math.random()*1000)+125,
            0,
            0
        ],
        bait2: [
            3,
            Math.floor(Math.random()*3)+2,
            Math.floor(Math.random()*7)+1,
            Math.floor(Math.random()*10),
            Math.floor(Math.random()*75)+50,
            Math.floor(Math.random()*250)+125,
            Math.floor(Math.random()*250)+125,
            Math.floor(Math.random()*1000)+250,
            Math.floor(Math.random()*2500)+500,
            Math.floor(Math.random()*5000)+1000,
            0
        ],
        bait3: [
            Math.floor(Math.random()*2)+1,
            Math.floor(Math.random()*5)+1,
            Math.floor(Math.random()*10)+5,
            Math.floor(Math.random()*25)+15,
            Math.floor(Math.random()*100)+50,
            Math.floor(Math.random()*250)+75,
            Math.floor(Math.random()*750)+100,
            Math.floor(Math.random()*1250)+100,
            Math.floor(Math.random()*1250)+100,
            Math.floor(Math.random()*3000)+250,
            Math.floor(Math.random()*5000)+300,
            Math.floor(Math.random()*10000)+500,
            0,
            0            
        ],
        bait4: [
            0
        ]
    },
    check: function(){
        if (jahoot.vars.isCorrect == 1) {
            if (jahoot.vars.fishing_bait == 1) {
                num = Math.floor(Math.random()*11);
                fish = jahoot.fishing.list.bait1[num];
                fishVal = jahoot.fishing.listValues.bait1[num];
            }
            if (jahoot.vars.fishing_bait == 2) {
                num = Math.floor(Math.random()*11);
                fish = jahoot.fishing.list.bait2[num];
                fishVal = jahoot.fishing.listValues.bait2[num];
            }
            if (jahoot.vars.fishing_bait == 3) {
                num = Math.floor(Math.random()*13);
                fish = jahoot.fishing.list.bait3[num];
                fishVal = jahoot.fishing.listValues.bait3[num];
            }
            if (jahoot.vars.score >= 300) {
                fishVal *= 5;
                jahoot.vars.fishing_rank = "Fishy God (x5 Profits)";
            } else if (jahoot.vars.score >= 150) {
                fishVal *= 3;
                jahoot.vars.fishing_rank = "Expert (x3 Profits)";
            } else if (jahoot.vars.score >= 75) {
                fishVal *= 2;
                jahoot.vars.fishing_rank = "Intermediate (x2 Profits)";
            }
            if (fish != null) {
                if (fish == jahoot.fishing.list.bait1[10||11] || fish == jahoot.fishing.list.bait2[10] || fish == jahoot.fishing.list.bait3[12||13]) {
                    jahoot.vars.fishing_bait += 1;
                    alert("🎣 You found "+fish+"\nRank up your fishing with this!\nTotal Money: $"+jahoot.vars.fishing_money+"\nRank: "+jahoot.vars.fishing_rank);                    
                } else {
                    jahoot.vars.fishing_money += parseInt(fishVal);
                    alert("🎣 You caught "+fish+"\n\nValue: $"+fishVal+"\nTotal Money: $"+jahoot.vars.fishing_money+"\nRank: "+jahoot.vars.fishing_rank);
                }
            } else {
                alert("❌ Sorry, but there seem to be no fish here.\n\nThis addon is in BETA stage and will\nhave more content soon.\nFor now, close your browser window.\n\n🐟 Fishing Addon for Jahoot! (beta v2.0)")
            }
            fish = null;
            delete fishVal;
        }
        if (jahoot.vars.isCorrect == "0") {
            alert("❌ You lost your fish!\nBetter luck next time :)");
        }
    },
    info: {
        author: "Awij126",
        description: "An addon to Jahoot! that adds fishing."
    }
}
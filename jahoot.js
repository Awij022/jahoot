/* Installs Jahoot! in your browser. If embedding this file in your HTML page, put <meta charset="UTF-8"> in your page.
   Otherwise emojis won't render properly :(

   How to store and use the program in your browser:
   1. Press Ctrl+Shift+I
   2. Go to Application, then LocalStorage (and click one of the urls that pop up; url has to match the url in your search bar)
   3. Make a new key named "jahoot.app" (obviously in the "Key" section).
   4. Enter the code provided below in the "Value" section next to "jahoot.app".
   5. Go to Console and type eval(localStorage.getItem("jahoot.app"))
   6. Use Jahoot's API to make quizzes (or even mods) after installing! It's fully customizable!
   7. Remember to install (read step #5) every time you enter your browser.

   P.S.: Credit already exists within the functions in this code.
   Jahoot's made for devs, and made by devs :)
*/

alert("--Jahoot! Install--\n\nDescription: A Kahoot-related game\nAuthor: Awij126\n\n✅ Press ENTER to continue if this emoji shows correctly.\nClose this browser window to cancel.");
jahoot = {
    reset: function(){
        jahoot.vars.isCorrect = 0;
        jahoot.vars.score = 0;
    },
    vars: {
        isCorrect: 0,
        score: 0
    },
    question: {
        quiz: function(q,a1,a2,a3,a4,cl,ca) {
            ans = cl.toUpperCase();
            userInput = prompt(
                q+"\n🟥 "+a1+"\n🟦 "+a2+"\n🟨 "+a3+"\n🟩 "+a4
            );
        
            if (userInput.toUpperCase() === cl || userInput.toUpperCase() === ca) {
                jahoot.vars.isCorrect = 1;
                jahoot.vars.score += 1;
                alert("Correct answer!"+"\n\nScore: "+jahoot.vars.score);
            }
            if (userInput.toUpperCase() != cl && userInput.toUpperCase() != ca) {
                jahoot.vars.isCorrect = 0;
                if (ans == "A") {
                    alert("Incorrect answer!\nCorrect answer was: "+a1+" [A]"+"\n\nScore: "+jahoot.vars.score);
                }
                if (ans == "B") {
                    alert("Incorrect answer!\nCorrect answer was: "+a2+" [B]"+"\n\nScore: "+jahoot.vars.score);
                }
                if (ans == "C") {
                    alert("Incorrect answer!\nCorrect answer was: "+a3+" [C]"+"\n\nScore: "+jahoot.vars.score);
                }
                if (ans == "D") {
                    alert("Incorrect answer!\nCorrect answer was: "+a4+" [D]"+"\n\nScore: "+jahoot.vars.score);
                }
            }
            delete userInput;
            delete ans;
        },
        poll: function(q,a1,a2,a3,a4) {
            var continuePoll = 1;
            userInput = prompt(
                q+"\n🟥 "+a1+"\n🟦 "+a2+"\n🟨 "+a3+"\n🟩 "+a4
            );
            ans = userInput.toUpperCase();
            if (ans != "A" && ans != "B" && ans != "C" && ans != "D") {
                alert("Incorrect answer!\nRemember to type in A, B, C or D as your answer."+"\n\nScore: "+jahoot.vars.score);
                jahoot.vars.isCorrect = 0;
                continuePoll = 0;
            }
            if (continuePoll == 1) {
                jahoot.vars.score += 1
                jahoot.vars.isCorrect = 0;
                statement = "Thanks for your feedback!\nChosen letter: "+userInput.toUpperCase()+"\n\nScore: "+jahoot.vars.score;
                if (userInput.toUpperCase() == "A"){statement += "\nChosen answer: "+a1};
                if (userInput.toUpperCase() == "B"){statement += "\nChosen answer: "+a2};
                if (userInput.toUpperCase() == "C"){statement += "\nChosen answer: "+a3};
                if (userInput.toUpperCase() == "D"){statement += "\nChosen answer: "+a4};
                alert(statement);
                delete statement;
            }
            delete userInput;
            delete continuePoll;
            delete ans;
        },
        true_false: function(q,cl) {
            userInput = prompt(
                q+"\n🟥 True\n🟦 False"
            );
    
            if (userInput.toUpperCase() === cl) {
                jahoot.vars.score += 1;
                jahoot.vars.isCorrect = 1;
                alert("Correct answer!"+"\n\nScore: "+jahoot.vars.score);
            }
            if (userInput.toUpperCase() != cl) {
                jahoot.vars.isCorrect = 0;
                if (cl.toUpperCase == "A") {
                    alert("Incorrect answer!\nCorrect answer was: True [A]"+"\n\nScore: "+jahoot.vars.score);
                }
                if (cl.toUpperCase == "B") {
                    alert("Incorrect answer!\nCorrect answer was: False [B]"+"\n\nScore: "+jahoot.vars.score);
                }
            }
            delete userInput;
        },
        written: function(q,a) {
            userInput = prompt(q+"\n\nThis is a written answer.");
            if (userInput.toLowerCase() === a.toLowerCase()) {
                jahoot.vars.score += 1;
                alert("Correct answer!"+"\n\nScore: "+jahoot.vars.score);
            }
            if (userInput.toLowerCase() != a.toLowerCase()) {
                alert("Incorrect answer!\nCorrect answer was: "+a+"\n\nScore: "+jahoot.vars.score);
            }
            delete userInput;
        }
    },
    info: {
        author: "Awij126",
        description: "A Kahoot-related game."
    }
}

/*
Okay... here's how to create mods:
  - Store all variables in jahoot.vars
  - Check if answer is correct using jahoot.vars.isCorrect
          and the score using jahoot.vars.score
  - Make a function that improves gameplay or something else

Note:
  - LocalStorage is NOT used in this code. There is an old development version that uses this though.
*/

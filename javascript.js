<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="assets/style.css" rel="stylesheet" />
            <title>Quiz App</title>
        </head>
        <body>
            <h1 class="title">Welcome to the quiz app!</h1>

            <div id="main_area">
                <div id="question_container" class="hide">

                    <h1 id="question">question text goes here</h1>

                    <div id="answer-buttons" class="btn-grid"></div>
                    <section class="pair1">
                        <button id="choice1" class="answer-box">Answer 1</button>
                        <button id="choice2" class="answer-box">Answer 2</button>
                    </section>
                    <section class="pair2">
                        <button id="choice3" class="answer-box">Answer 3</button>
                        <button id="choice4" class="answer-box">Answer 4</button>
                    </section>
                </div>

                <section class="selectors">
                    <button id="start" class="start-button">Start</button>
                    <button id="next" class="next-button">Next</button>
                </section>

                <section class="time">
                    <div class="time_text">Time remaining</div>
                    <div class="time_number">75</div>
                </section>
            </div>

            <script src="javascript2.js"></script>
        </body>
    </html>

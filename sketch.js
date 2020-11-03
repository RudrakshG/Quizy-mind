    var back_img;
    var let,let_img;
    var oneinf,oneinf_img;
    var during;
    var question1,question1_img;
    var q1op1;
    var q1op2,q1op3,q1op4;
    var c1_img,c1;
    var C1_img,info1;
    var question3,ques3_img;
    var ques2wrong,ques2wr_img,ques2c,ques2c_img;
    var wrong,wrong_img;
    var Question2,Ques2_image;

    function preload()
    {
      back_img=loadImage("First background.png");
     // during=loadImage("During game background.png");
      oneinf_img=loadImage("information_page.png");
      question1_img=loadImage("Q1.PNG");
      c1_img=loadImage("c1.PNG");
      //C1_img=loadImage("information of first question.PNG");
      wrong_img=loadImage("Wrong.PNG");
      Ques2_image=loadImage("question 2.PNG");
      ques2wr_img=loadImage("Wrong2 inf.PNG");
      ques2c_img=loadImage("op@ques2 correct.PNG");
      ques3_img=loadImage("question 3.PNG");
    }

    function setup() {
      canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
      //Create the Bodies Here.
    this.button=createButton("Let's Play");
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    

    }

      
      
    


    function draw() {
      rectMode(CENTER);
      background(back_img);
     // background(rgb(198,135,103));
      //image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1);
      this.button.mousePressed(()=>{
        this.button.hide();
        //this.greeting.html("Hello ");
        oneinf=createSprite(displayWidth/2 + 30, displayHeight/2);
        oneinf.addImage("info",oneinf_img);
        this.StartQuiz=createButton("Start Quiz");
        this.StartQuiz.position(displayWidth/1.4 + 30, displayHeight/1.3);

        this.StartQuiz.mousePressed(()=>{
          oneinf.visible=false;
          this.StartQuiz.hide();
          question1=createSprite(displayWidth/2 + 30,displayHeight/2);
          question1.addImage("question1",question1_img);
          this.q1o1=createButton("A.De-oxyribonuclieo acid");
          this.q1o1.position(displayWidth/2.9 + 10, displayHeight/1.7);
          this.q1o2=createButton("B.Da-oxyribonuclieo antifoam")
          this.q1o2.position(displayWidth/1.8 + 10, displayHeight/1.7);

          this.q1o2.mousePressed(()=>{
           wrong=createSprite(displayWidth/2 + 30,displayHeight/2);
           wrong.addImage("Wrong",wrong_img);
           this.q1o1.hide();
           this.q1o2.hide();
           question1.visible=false;
           this.next1=createButton("NEXT");
           this.next1.position(displayWidth/1.4 + 10, displayHeight/1.3);
            
           this.next1.mousePressed(()=>{
             Question2=createSprite(displayWidth/2 + 30,displayHeight/2);
             Question2.addImage("Question2",Ques2_image);
             wrong.visible=false;
             this.next1.hide();
             this.q2o1=createButton("A. Solar energy");
             this.q2o1.position(displayWidth/2.9 + 10, displayHeight/1.7);

             this.q2o2=createButton("B.Earth’s magnetic field");
             this.q2o2.position(displayWidth/1.8 + 10, displayHeight/1.7);
             this.q2o2.mousePressed(()=>{
               this.q2o1.hide();
               this.q2o2.hide();
               ques2c=createSprite(displayWidth/2 + 30,displayHeight/2);
               ques2c.addImage("Correct2",ques2c_img);
               Question2.visible=false;
               this.next6=createButton("NEXT");
               this.next6.position(displayWidth/1.5 + 10, displayHeight/1.6);
             })

             this.q2o1.mousePressed(()=>{
               this.q2o1.hide();
               this.q2o2.hide();
               Question2.visible=false;
               ques2wrong=createSprite(displayWidth/2 + 30,displayHeight/2);
                ques2wrong.addImage("Wrong2",ques2wr_img);
                this.next5=createButton("NEXT");
                this.next5.position(displayWidth/1.5 + 10, displayHeight/1.6);

                this.next5.mousePressed(()=>{
                  this.next5.hide();
                  ques2wrong.hide();
                  question3=createSprite(displayWidth/2 + 30,displayHeight/2);
               question3.addImage("Question 3",ques3_img);
                })
             })

             
           })

          })

          this.q1o1.mousePressed(()=>{
            c1=createSprite(displayWidth/2 + 30,displayHeight/2);
            c1.addImage("correct1",c1_img);
 
            question1.visible=false;
            this.q1o1.hide();
            this.q1o2.hide();

            //this.button4=createButton("PRESS HERE FOR MORE INFORMATION");
            //this.button4.position(displayWidth/1.8 + 10, displayHeight/1.7)

           
              this.next2=createButton("NEXT");
              this.next2.position(displayWidth/1.5 + 10, displayHeight/1.6);

              this.next2.mousePressed(()=>{
                Question2=createSprite(displayWidth/2 + 30,displayHeight/2);
             Question2.addImage("Question2",Ques2_image);
             this.next2.hide();
             c1.visible=false;
             this.c1q2o1=createButton("A. Solar energy");
             this.c1q2o1.position(displayWidth/2.9 + 10, displayHeight/1.7);

              this.c1q2o2=createButton("B.Earth’s magnetic field");
             this.c1q2o2.position(displayWidth/1.8 + 10, displayHeight/1.7);
            
             this.c1q2o2.mousePressed(()=>{
              this.c1q2o2.hide();
              this.c1q2o1.hide();
              Question2.visible=false;
              ques2c=createSprite(displayWidth/2 + 30,displayHeight/2);
              ques2c.addImage("Correct2",ques2c_img);
              this.next4=createButton("NEXT");
              this.next4.position(displayWidth/1.5 + 10, displayHeight/1.6);
          
            })
            
             this.c1q2o1.mousePressed(()=>{
              this.c1q2o1.hide();
              this.c1q2o2.hide();
              Question2.visible=false;
              ques2wrong=createSprite(displayWidth/2 + 30,displayHeight/2);
               ques2wrong.addImage("Wrong2",ques2wr_img);
               this.next7=createButton("NEXT");
               this.next7.position(displayWidth/1.5 + 10, displayHeight/1.6);

               this.next7.mousePressed(()=>{
               question3=createSprite(displayWidth/2 + 30,displayHeight/2);
               question3.addImage("Question 3",ques3_img);
              this.next7.hide();
              ques2wrong.visible=false;
              this.q3o1=createButton("A.3,285,334 sq.km");
              this.q3o1.position(displayWidth/2.9 + 10, displayHeight/1.8);

              this.q3o2=createButton("A.3,287,263 sq.km");
              this.q3o2.position(displayWidth/1.8 + 10, displayHeight/1.8);
               })
            })
              
             })

         })
        


        })
      
      
    })

    drawSprites();
  }




<script>
    export let image;
    export let alt;
    export let currentStep;
    export let i;
    export let text;
        
    </script>
    
    
    <div class = "step-cont" class:active={currentStep === i}>
        <!-- image placerholder!!! -->
        <div class = "step-text">
            {@html text}
        </div>
        <div class = "step-img">
            <!-- <img class="step-image" src={image} alt={alt}/> -->
        </div>
       
    </div>
    
    <style>
        .step-cont{
            display: flex;
            flex-direction: row;
            padding: 3%;
            margin-left: 5%;
            margin-right: 5%;
            width: 100%;
            height: 90vh;
            margin-bottom: 20vh;
            z-index: 20;
            text-align: center;
        }
    
        .step-text{
            /* padding: 2%; */
            text-align: left;
            font-size: 1.15rem;
            /* letter-spacing: 1.4; */
            width: 65%;
            height: inherit;
            z-index: 99;
            margin-left: 32%;
            /* margin-left: 4% */
            color: #333
        }

       
    
        .step-img{
            width: 60%;
            position: relative;
            text-align: center;
            z-index: 5;
        }
    
        .step-image{
            width: 70%;
            border-radius: .5rem;
            margin-right: 0%;
            z-index: 5;
        }
    
      .active {
        /* background-color: lightgrey; */
        /* color: black; */
      }


  @media (max-width: 840px){
    .step-text{
            /* padding: 2%; */
            text-align: left;
            font-size: 1.15rem;
            /* letter-spacing: 1.4; */
            width: 105%;
            height: inherit;
            z-index: 99;
            margin-left: 30%;
            /* margin-left: 4% */
        }
  }


  @media (max-width: 680px){
      .step-text{
            /* padding: 2%; */
            text-align: left;
            font-size: 1.15rem;
            /* letter-spacing: 1.4; */
            width: 100vw;
            height: inherit;
            z-index: 99;
            margin-left: 30%;
            /* margin-left: 4% */
            color : #333;
        }

  }


  @media (max-width: 640px){

    .step-text{
            /* padding: 2%; */
            text-align: left;
            font-size: 1.15rem;
            /* letter-spacing: 1.4; */
            width: 150vw;
            height: inherit;
            z-index: 99;
            margin-left: 10%;
            /* margin-left: 4% */
            color : #333;
        opacity: .9;
        }

  }


      
    </style>
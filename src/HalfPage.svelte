<script>
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
        padding: 5%;
        height: 90vh;
        margin-bottom: 20vh;
        z-index: 99;
    }

    .step-text{
        /* padding: 2%; */
        text-align: left;
        font-size: 1.15rem;
        letter-spacing: 1.4;
        width: 36%;
        /* height: inherit; */
	z-index: 99;
        /* margin-left: 4% */
    }

    .step-img{
        width: 50%;
        position: relative;
        text-align: center;
    }

    .step-image{
        width: 70%;
        border-radius: .5rem;
        margin-right: 0%;
    }

  .active {
    /* background-color: lightgrey; */
    /* color: black; */
  }


  @media (max-width: 640px) {

    .step-img{
        display: none;
    }


    .step-text{
            /* padding: 2%; */
            text-align: left;
            font-size: 1.15rem;
            /* letter-spacing: 1.4; */
            width: 60vw;
            height: inherit;
            display: flexbox;
            margin-left: auto;
            margin-right: auto;
            z-index: 99;
            /* margin-left: 8%; */
            /* margin-left: 4% */
            background-color: white;
            padding: 15px;
            color: #333;
            opacity: .9;
        }

        .step-cont{
            height: inherit;
        }

  }

  
</style>
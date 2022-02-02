<script>
  export let image;
  export let alt;
  // export let value;
  export let currentStep;
  export let i;
  export let text;
</script>

<div class="title-content" class:active={currentStep === i}>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="title-img"
    src="./media/kiosk_1.jpg"
    alt="An image of a kiosk, with Mandarin characters and 'Welcome to Chinatown' in English on it. The top third of the image is artistically burnt out."
  />
  <div class="title-text">
    <h1 class="the">THE</h1>
    <h1>Chinatown</h1>
    <h1>Crowd</h1>
    <h2 class="subtitle"><b>By Annie Fu</b></h2>
    <p class="subtitle">
      {@html text}
    </p>
  </div>
  <div class="title">
    <img id="title-img" src={image} {alt} />
  </div>
</div>

<style>
  .the {
    font-size: 2rem;
  }

  h1 {
    margin-top: 0rem;
    margin-bottom: 0rem;
    font-size: 8rem;
  }

  .title {
    height: 90vh;
  }

  #title-img {
    /* max-height: 90vh; */
    width: 60%;
    margin-left: 30%;
    visibility: visible;
    display: block;
    margin-top: 2rem;
  }

  .title-text {
    font-size: 4rem;
    margin-left: 4%;
    width: 35%;
    min-width: 30%;
    margin-top: 4rem;
  }

  .title-content {
    display: flex;
    flex-direction: row;
    text-align: left;
    margin: 0 5% 5% 5%;
    /* padding-left: 20vw; */
  }

  .subtitle {
    line-height: 1.6;
    font-family: neuzeit-grotesk, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 1.2rem;
    min-width: 40%;
    width: 29vw;
  }

  .title-img {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 1200px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 7rem;
    }

    .subtitle {
        width: 40vw;
        min-width: 40%;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 6rem;
    }

    .subtitle {
        min-width: 80%;
    }
  }

  @media (max-width: 840px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 5rem;
    }

    .subtitle {
        margin-top: 2rem;
        min-width: 80%;
        width: 70vw;
    }
  }

  @media (max-width: 780px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 4.5rem;
    }

    .subtitle {
        min-width: 80%;
    }
  }

  @media (max-width: 700px) {
    h1 {
      margin-top: 0rem;
      margin-bottom: 0rem;
      font-size: 6rem;
    }

    #title-img {
      /* max-height: 90vh; */
      visibility: hidden;
      display: none;
    }

    .title-content {
      flex-direction: column;
    }

    .title-text {
      font-size: 2rem;
      margin-left: 0%;
      width: 100%;
      min-width: 100%;
      margin-top: 4rem;
      position: relative;
    }

    .title-img {
      visibility: visible;
      display: block;
      max-width: 80vw;
      position: relative;
    }
  }

  /* .active {
        background-color: lightgrey;
        color: black;
      } */
</style>

<script>
  // Import the scrollytelling module
  import Scrolly from "./Scrolly.svelte";
  import HalfPage from "./HalfPage.svelte";
  import Half2Page from "./Half2Page.svelte";
  import FullPage from "./FullPage.svelte";
  import TitlePage from "./TitlePage.svelte";


//   mobile layouts;

import MobileTitle from "./MobileTitle.svelte";

  import { fade, fly } from "svelte/transition";

  // Import tweened, for animations
  import { tweened } from "svelte/motion";

  // Initialize the step variable
  let currentStep = 0;

  const images = [
    "./media/kiosk_1.jpg",
    "./media/first.jpeg",
    "./media/street_newedit.png",
    "./media/chinatown5.jpeg",
    "./media/chungs1.jpg",
    "./media/chungs3.jpg",
    "./media/chungs_2.jpg",
    "./media/chungsstreet.jpeg",
    "./media/chungs_2000s.jpeg",
    "./media/chungs_roof.jpg",
    "./media/onleong_shanghai.jpg",
    "./media/shanghai_sign.jpg",
    "./media/street3.jpg",
    "./media/lion.jpeg",
    "./media/welcome_kiosk.jpg",
	"",
	"./media/flyer.png",
    "./media/lion.jpeg",
	""

  ];

  const alts = [
    "A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ",

    "A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ",
  ];

  const texts = [
    "In Midtown Detroit, the blocks surrounding the Cass Corridor and Peterboro Street intersection contain the only recognizable remnants of a once-promising Chinatown.",
    "<p> Detroit’s Chinatown first flourished in the 1920s, " +
      "from the blocks between Third Avenue, Bagley Street, and Porter Street, writes" +
      " author and activist Helen Zia in “Asian American Dreams: The Emergence of an " +
      "American People.” <br/><br/> First led by a group of prominent Chinese business-owning families including the Yee, Chin, and Chung families," +
      " a wave of immigrants settled into the area and opened restaurants, grocery stores, and even a Chinese school in those first decades.</p>",

    "<p style='background-color: white; padding: 15px'>Today, the original blocks of Chinatown <br/> no longer exist.  <br/><br/>A portion of the John C. Lodge Freeway, " +
      "a parking garage, and a parking lot of the MGM Grand Casino stand in their place.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" +
      "<p style='background-color: white; padding: 15px'>The creation of the freeway coincided with the relocation of old Chinatown to Cass" +
      " Corridor in 1963, when generations of Chinese residents and their associated businesses" +
      " faced displacement as part of the Detroit Housing Commission’s “slum clearance”" +
      " initiative, Zia writes. <br/><br/>Chelsea Zuzindlak, an attorney and former curator at the " +
      "Detroit Historical Museum, shed light on the razing in an interview for Hour" +
      " in March 2009: <b> “Ask any person who lived there, and they’ll tell you it was " +
      "anything but a slum,” </b> she said. <b> “It was kept up.”</b></p></br></br></br></br></br></br></br>",

    "<p style='background-color: white; padding: 15px'>In fact, according to Emiko Ohnuki-Tierney, professor of anthropology at the University of Wisconsin-Madison, Chinatown signified " +
      "home and a sense of community so distinctive that longtime residents were nicknamed <b>“the Chinatown crowd.”</b></p><br/>",

    "<p style='background-color: white; padding: 15px'>At the time of the clearance announcement, the general feeling amongst the residents was that the" +
      " destruction of their Chinatown, despite a planned relocation, would mean the end of their ethnic community. ",

    "<p style='background-color: white;'>Facing no other options, cornerstone businesses of the community, including the famous Chung’s Chop Suey restaurant and the On Leong Chinese Merchants Association, led the transition to the new area.</p><br/><br/>",
    "<p style='background-color: white; padding: 15px'>The relocated neighborhood celebrated a brief period of success.</p> " +
      "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>However, a series of crimes shook up the community in the mid-70s: on " +
      "August 5, 1976, community leader Tommie Lee was murdered in a hold-up of his" +
      " restaurant, Bow Wah. </p>" +
      "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>A few years later, in 1982, 27-year-old Vincent Chin was murdered in " +
      "a hate crime. Rooted in anti-Asian sentiment due to the increasing " +
      "success of the Japanese auto industry, the murder served as the catalyst " +
      "for many of the remaining residents to abandon the area.</p>",

    "<p>By November 1989, only 100 " +
      "Chinese residents remained in Chinatown, according to an Argus-Press article published at the time.<br/><br/> “If they had left Chinatown where it was, it probably would’ve developed into a Greektown,“ said then-co-owner of Chung’s restaurant, Philip Chung.<br/><br/> Citing Detroit’s booming entertainment and cultural district Greektown as a reference point for what Chinatown could have been, Chung said, <b> “we never saw this area have a hey-day, but we saw it go from not-too-bad to worse.” </b></p> ",
    "<p>The Chin and Chung families operated Chung’s Chop Suey for over a half-century, said Curtis Chin, documentary filmmaker and last familial heir of the restaurant. " +
      "Beginning when Henry Chung and Chin’s great-grandfather moved to the area in the midst of the 1920’s growth, their successors and multiple " +
      "generations of families composed the lifeblood of Chung’s. <br/><br/>" +
      " The restaurant was among the 32 displaced from the original Chinatown in the 1960s: an American-Cantonese hybrid joint known for its signature, now regional staple dish; almond boneless chicken," +
      " as well as the “best egg rolls in town.“ <br/><br/>" +
      "Its decades-long operation witnessed the many eras of the neighborhood, serving lunch rushes and housing meetings.</p>",
    "<p style='background-color: white; padding: 15px'>After over 60 years in business, Chung’s was the last Chinatown business to close in 2000. The restaurant’s impact on Detroit remains evident in even the simplest of ways: almond boneless chicken continues to appear on restaurant menus all throughout the city.</p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>As of November 2020, the roof remains intact, but veins of infrastructure have begun to blister out of the building’s skin. The signage frame and plumbing extend and hang from the composition, brittle to the touch. </p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Last in the news, Brenna Houck reported in Eater Detroit that restaurant mogul Tom Brady had purchased the space for two new restaurants in 2018. The structure shows no signs of recent maintenance or development since the transfer in ownership, apart from the removal of a Vincent Chin memorial mural from the building’s North side.</p>",
	"<p>Further down Cass Corridor, just beyond the Chung’s lot, the building that On Leong headquarters and Shanghai Cafe once shared still stands.<br/><br/> Through the relocation, the On Leong Chinese Merchants Association remained a leading force for the community, tying together families of immigrant business owners, and the Shanghai Cafe offered another supply of late-night comfort food.</p>",
	"<p>Though the characteristic rectangular pane windows have been boarded up and the entirety of the facade painted brown, the sign for the Shanghai Cafe remains posted, with faint markings inviting visitors to free parking in the rear lot.</p>",
	"<p style='background-color: white; padding: 15px'>The same Shanghai Cafe sign appears in its original white paint in the center of this archived photograph from the Detroit Free Press archives, tucked behind a silver post. </p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>When the new Chinatown opened in 1963, the facades of Shanghai Cafe, On Leong, and Chung’s saw parades and lion dances celebrating the beginning of a new community.</p>",
	"<p style='background-color: white; padding: 15px'>The Free Press reported “500 chinese merchants came to Detroit from all parts of the United States to join the convention and to congratulate the Detroit Chinese on their achievement; <b>the opening of the new Chinatown.”</b></p> ",
	"<p style='background-color: white; padding: 15px'>Just under two decades later, during a period of escalating crime rates and flight to the suburbs, reporter Sally Smith wrote a Free Press article about the “Welcome to Chinatown” kiosk in April of 1980:</p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'><q><i>Despite the red banners on the street corners, and the shops with all the right names—Wing Lee Lung Chinese Vegetable Co., Yee Yuen, Yun Hop, and Bow Wah’s Chop Suey—the sign that says ‘Welcome to Detroit’s Chinatown’ seems mostly a bleak attempt to force a sense of liveliness on a fragile reality.</i></q></p>"+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Perhaps a bleak attempt, but an attempt nonetheless. The remaining relic in Chinatown has seen both better and worse days throughout the past half-century. After a bout of graffiti marred the original lettering in 2016, it was restored to the current form. I couldn’t help but think about Smith's quote.</p> "+
	"<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Amidst all the emptied and fading buildings in the area, revitalizing a sign welcoming people to something that no longer exists indeed feels futile. But also recklessly auspicious. <br/><br/> It feels as if people haven’t completely forgotten about Chinatown and what it means to Detroit, despite the surrounding reality stating otherwise.</p>",
	"<p>On November 17th, 2020, the Detroit City Council Historic Designation Advisory Board held a community meeting titled the “People and Places of the Cass Corridor,” calling for citizens to “learn more about the Cass Corridor architectural, cultural, and ethnic survey and ways to get involved!”</p>",
	"<p>When I set out to find more information on the meeting, all I found was the event flyer, which featured three vibrant side-by-side images. The first, a clean-cut skyscraper downtown. The second, a lyric from the 1966 Youngbloods classic “Get Together”: “smile on your brother / everybody get together.” <br/>The third? A black and white photo of a crowd, gathered around a dancing lion: the 1963 re-opening celebration of Detroit’s Chinatown.</p>",

	"<p></p>"
	

];

  const types = [
    "title",
    "half",
    "full",
    "full",
    "full",
    "half-short",
    "full",
    "half",
    "half",
    "full",
	"half-short",
	"half",
	"full",
	"full",
	"full",
	"full",
	"half",
	"full"
  ];

  const steps = [
    "step",
    "step",
    "step-long1",
    "step",
    "step",
    "step",
    "step-long2",
    "step",
    "step",
    "step-long3",
    "step",
    "step",
    "step-long3",
    "step-long1",
    "step-long4",
    "step",
    "step",
	"step"
  ];
</script>

<main>

<div class="desktop">
  <div class="image-div">
    {#key currentStep}
      {#each texts as paragraph, i}
        <div class="img-container">
          <img
            id={i + 1}
            class="{types[i + 1]} fade-in"
            class:activeImg={currentStep === i + 1}
            in:fly={{ y: -50, duration: 100 }}
            out:fly={{ y: 50, duration: 100 }}
            src={images[i + 1]}
            alt={alts[i + 1]}
          />
        </div>
      {/each}
    {/key}
  </div>

  <div class="step-div">

	

    <Scrolly bind:value={currentStep}>
      <!-- for each paragraph, bind a currentStep value -->
      {#each texts as paragraph, i}
        <div class={steps[i]} id={i} class:active={currentStep === i}>
          <!-- {@html text} -->
          {#if types[i] == "title"}
            <TitlePage
              image={images[i]}
              alt={alts[i]}
              {currentStep}
              text={texts[i]}
              {i}
            />
          {/if}
          {#if types[i] == "half"}
            <HalfPage
              image={images[i]}
              alt={alts[i]}
              text={texts[i]}
              {currentStep}
              {i}
            />
          {:else if types[i] == "half-short"}
            <HalfPage
              image={images[i]}
              alt={alts[i]}
              text={texts[i]}
              {currentStep}
              {i}
            />
          {/if}
          {#if types[i] == "half2"}
            <Half2Page
              image={images[i]}
              alt={alts[i]}
              text={texts[i]}
              {currentStep}
              {i}
            />
          {/if}
          {#if types[i] == "full"}
            <FullPage
              image={images[i]}
              alt={alts[i]}
              text={texts[i]}
              {currentStep}
              {i}
            />
          {/if}
        </div>
      {/each}
      <!-- </div> -->
	  <p>Thank you so much for reading. This was researched, reported, and coded by Annie Fu. If you have any questions or comments, please reach out to me at <a href='mailto:annieccfu@gmail.com'>annieccfu@gmail.com</a>.</p><br/><br/><br/><br/>


      <!-- {@debug currentStep} -->
    </Scrolly>
	<div>

	</div>
  </div>
</div>

</main>

<style>
  main {
    text-align: center;
    padding: 0.5em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #642020;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .step {
    /* height: 90vh; */
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: 18rem;
    z-index: 99;
  }

  .step-long1 {
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: 18rem;
    z-index: 99;
    height: 320vh;
  }

  .step-long2 {
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: 18rem;
    z-index: 99;
    height: 420vh;
  }


  .step-long3 {
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: 18rem;
    z-index: 99;
    height: 380vh;
  }


  .step-long4 {
    display: flex;
    place-items: center;
    justify-content: center;
    margin-bottom: 18rem;
    z-index: 99;
    height: 650vh;
  }

  .step-content {
    background: whitesmoke;
    color: #ccc;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    transition: background 500ms ease, color 500ms ease;
    z-index: 99;
  }

  .step-div {
    position: relative;
    z-index: 99;
  }

  .half {
    width: 40vw;
    margin-left: 38%;
    position: sticky;
    max-height: 92vh;
    margin-top: 1.5rem;
    border-radius: .5rem;
  }

  .half2 {
    width: 40vw;
    margin-left: 0%;
    position: sticky;
    max-height: 92vh;
    margin-top: 1.5rem;
    border-radius: .5rem;
  }

  .half-short {
    width: 40vw;
    margin-left: 38%;
    margin-top: 10vh;
    position: sticky;
    border-radius: .5rem;
  }

  /* full and short */
  .full {
	min-width: 55vw;
    max-width: 98vw;
    max-height: 96vh;
    text-align: center;
    z-index: 1;
    margin-left: -4%;
  }

  .title {
  }

  .image-div {
    text-align: left;
    position: fixed;
    z-index: 99;
    /* top: 3vh; */
    /* background-color: red; */
  }

  .img-container {
    width: 100vw;
    visibility: hidden;
    max-height: 90vh;
    /* position: relative; */
    position: absolute;
    z-index: 1;
    text-align: center;
  }

  .activeImg {
    visibility: visible;
    transition: fade;
    transition-duration: 1000;
  }

  .fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.3s;
  }

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  @media (min-width: 640px) {
    main {
      max-width: none;
    }

	/* full and short */
	
  }
</style>

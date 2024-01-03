<script setup>
import GridView from './views/GridView.vue'
</script>

<template>
  <div class="container">
    <form class="mt-5">
      <fieldset disabled>
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Marketing Planner"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="UI/UX Content Planner"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="HR/Legal Manager"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="UI/UX Content Writer"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="UI/UX Designer"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="HR/Legal Manager"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </form>

    <div>
      <h2 class="mt-3" style="color: green; margin-left: 2rem">
        Marketing Planner
      </h2>
      <h3 class="mt-4" style="margin-left: 2rem">
        <strong>Job Description :</strong>
      </h3>
      <ul class="mt-4 p" style="margin-left: 4rem">
        <li>
          Monitor competition to identify new industry trends and opportunities
          for innovation
        </li>
        <li>
          Develop marketing strategies based on customer preferences, business
          objectives, and available resources
        </li>
        <li>
          Conduct market research to identify potential customers and assess
          their needs, interests, and preferences
        </li>
        <li>
          Work with design teams to develop marketing materials such as
          brochures, ads, and presentations
        </li>
        <li>
          Create an advertising budget that reflects the company’s priorities
          while remaining within the parameters set by upper management
        </li>
        <li>
          Develop an effective communications strategy for each campaign using
          several different channels, including social media, email, push
          notification, print ads
        </li>
        <li>
          Create a detailed timeline of all marketing activities, including
          production schedules, deadlines for materials delivery, and event
          dates and locations
        </li>
        <li>
          Provide feedback to superiors regarding the effectiveness of new
          campaigns and recommend adjustments
        </li>
      </ul>

      <h3 class="mt-4" style="margin-left: 2rem"><strong>Skill :</strong></h3>
      <ul class="mt-4 p" style="margin-left: 4rem">
        <li>Minimum bachelor degree in Marketing Management;</li>
        <li>
          Minimum 3-5 years experience as Marketing Manager/Director in any
          marketplace industry;
        </li>
        <li>Good time management and project management skill;</li>
        <li>Creative communication skill in both verbal and design</li>
        <li>Multi-language abilities in verbal and non-verbal</li>
      </ul>

      <div class="sendJob">
        <h3 class="mt-4 mb-4" style="margin-left: 2rem">
          <strong>Send Your JOb Aplication :</strong>
        </h3>

        <form class="container" action="">
          <div class="row">
            <div class="col-6">
              <div class="mb-3" style="margin-left: 1rem">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style="font-size: 1.2rem"
                  ><strong>Your Name</strong></label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                />
              </div>
              <div class="mb-3" style="margin-left: 1rem">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style="font-size: 1.2rem"
                  ><strong>Email address</strong></label
                >
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style="font-size: 1.2rem"
                  ><strong>Mobile Number</strong></label
                >
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Number"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label"
                  style="font-size: 1.2rem"
                  ><strong>Write your message here...</strong></label
                >
                <input
                  type="text"
                  class="form-control text-secondary"
                  id="exampleFormControlInput1"
                  placeholder="Write your message here"
                />
              </div>
            </div>
          </div>

          <div class="pb-5" style="margin-left: 1.2rem">
            <h5 class="mt-2" style="margin-left: 1rem">File</h5>
            <div class="row">
              <div class="col-3" style="margin-left: 1.5rem;">
                <img src="../public/logo/file.PNG" alt="file" style="border-radius: 1rem;"/>
              </div>
            </div>
            <button type="button" class="btn btn-secondary mt-3">
              Send Mesaage
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="mt-5 text-center">
    <h1>Halaman GridView</h1>
    <GridView />
    </div>
</template>

<style scoped>
.form-control::placeholder {
  color: green; /* Warna placeholder untuk semua input */
}

.p {
  text-indent: 1em; /* Atur indentasi teks */
}
</style>



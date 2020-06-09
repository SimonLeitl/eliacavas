<template>
    <section class="section section-lg">

        <div class="row row-grid">
           <div class="col col-sm-5" id="kontakt-links">
                <div class="row row-grid justify-content-center">Links
                </div>
            </div>

          <div class="col col-sm-7 bg-secondary">
              <div class="mb-3">

              </div>
              <div class="row">
                  <div class="col-lg-4 col-sm-6">
                      <base-input alternative
                                  placeholder="Name">

                      </base-input>
                      <base-input alternative
                                  placeholder="Email"
                                  addon-left-icon="">
                      </base-input>
                  </div>
                  <div class="col-lg-4 col-sm-6">
                      <base-input alternative
                                  placeholder="Nachname">
                      </base-input>
                      <base-input alternative
                                  placeholder="Telefon"
                                  addon-right-icon="">
                      </base-input>
                  </div>


              </div>
              <div class="row">
                  <div class="col-lg-8" rows="5">
                      <base-input alternative
                                  placeholder="Nachricht" >
                      </base-input>
                  </div>

              </div>
              <div class="row">
                  <div class="col">
                      <base-button>absenden</base-button>
                  </div>

              </div>
            </div>

        </div>


    </section>
</template>

<script>
    export default {
        name: "Kontakt"
    }
</script>

<style scoped>

</style>
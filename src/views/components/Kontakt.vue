<template>
    <section class="section section-lg">

        <div class="row row-grid">
           <div class="col col-sm-5" id="kontakt-links">
                <div class="row row-grid justify-content-center">
                    <h3 class="text-secondary">Jetzt Strategiegespräch vereinbaren</h3>
                </div>
            </div>

          <div class="col col-sm-7 bg-secondary">
              <div class="mb-3">
                <h3>Kontakt</h3>
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
                      <base-input>
                          <textarea class="form-control form-control-alternative" name="name" rows="6"
                                    cols="80" placeholder="Type a message..."></textarea>
                      </base-input>
                  </div>

              </div>
              <div class="form-check" style="margin-bottom:15px;">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                      Ich akzeptiere ...
                  </label>
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
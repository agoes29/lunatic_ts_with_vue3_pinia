<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    ref="modalEle"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mx-5" id="menu-modal">
          <!-- <slot name="body" /> -->
          <ul class="list-group border-0">
            <li class="list-group-item my-3 border-0">
              <a href="#" class="text-dark"
                ><icon icon="fas fa-gauge" class="me-3" />Dashboard</a
              >
            </li>
            <li class="list-group-item my-3 border-0">
              <a href="#news" class="text-dark"
                ><icon icon="fas fa-right-from-bracket" class="me-3" />Sign
                Out</a
              >
            </li>
          </ul>
          <div class="container border-0 my-3">
            <p>
              <a
                class="text-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span class="fi fi-gb me-3"></span>English
              </a>
            </p>
            <div class="collapse lang-collapse" id="collapseExample">
              <div class="container rounded-2 card py-3">
                <li>
                  <a class="dropdown-item px-2 py-2" href="#"
                    ><span class="fi fi-id me-3"></span>Indonesia</a
                  >
                </li>
                <li>
                  <a class="dropdown-item px-2 py-2" href="#"
                    ><span class="fi fi-gb me-3"></span>English</a
                  >
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer my-3 border-0"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref} from "vue"
  import {Modal} from "bootstrap"

  let modalEle = ref(null) as any
  let thisModalObj = null as any
  onMounted(() => {
    thisModalObj = new Modal(modalEle.value)
  })
  function _show() {
    thisModalObj.show()
  }
  defineExpose({show: _show})
</script>
<style lang=""></style>

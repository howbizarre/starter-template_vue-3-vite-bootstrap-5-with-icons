<template>
    <div class="row align-items-md-stretch">
        <div class="col-md-6 mb-4">
            <div class="h-100 p-5 text-white bg-dark rounded-3">
                <h2>{{ msg }}</h2>
                <p>Before getting started with Bootstrap’s modal component, be sure to read the following as our menu options have recently changed.</p>
                <ul>
                    <li>
                        Modals are built with HTML, CSS, and JavaScript. They’re positioned over everything else in the document and remove scroll from the
                        <code class="highlighter-rouge">&lt;body&gt;</code>
                        so that modal content scrolls instead.
                    </li>
                    <li>Clicking on the modal “backdrop” will automatically close the modal.</li>
                    <li>Bootstrap only supports one modal window at a time. Nested modals aren’t supported as we believe them to be poor user experiences.</li>
                    <li>
                        Modals use
                        <code class="highlighter-rouge">position: fixed</code>
                        , which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You’ll likely run into issues when nesting a
                        <code class="highlighter-rouge">.modal</code>
                        within another fixed element.
                    </li>
                    <li>
                        Once again, due to
                        <code class="highlighter-rouge">position: fixed</code>
                        , there are some caveats with using modals on mobile devices.
                        <a href="https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile" target="_blank" rel="noopener noreferrer">See our browser support docs</a>
                        for details.
                    </li>
                    <li>
                        Due to how HTML5 defines its semantics,
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus" target="_blank" rel="noopener noreferrer">
                            the
                            <code class="highlighter-rouge">autofocus</code>
                            HTML attribute
                        </a>
                        has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:
                    </li>
                </ul>

                <button type="button" class="btn btn-outline-light" @click="modal.show()">Launch modal</button>
                <div class="modal fade" ref="infoModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title text-dark" id="infoModalLabel">How many clicks you've passed?!</h5>
                                <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <button @click="state.count++" class="btn btn-primary text-uppercase">You clicked me {{ state.count }} time{{ state.count === 1 ? "" : "s" }}</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" @click="modal.hide()">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 mb-4">
            <div class="p-5 bg-light border rounded-3 mb-4">
                <h2>Bootstrap Toast</h2>
                <p>Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems. They’re built with flexbox, so they’re easy to align and position.</p>

                <button type="button" class="btn btn-outline-secondary" @click="toast.show()">Show Toast</button>
                <div class="position-fixed bottom-0 end-0 p-3 emerge-11">
                    <div ref="bsToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header bg-info text-dark">
                            <i class="bi bi-hand-index me-1"></i>
                            <strong class="me-auto">Which finger?!</strong>
                            <small>Some times ago</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body bg-light">Hello, world! This is a toast message.</div>
                    </div>
                </div>
            </div>
            <div class="p-5 bg-light border rounded-3">
                <h2>Bootstrap Grid</h2>
                <p>
                    Bootstrap’s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with
                    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank" rel="noopener noreferrer">flexbox</a>
                    and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.
                </p>
                <div class="bd-example bd-example-row">
                    <div class="row">
                        <div class="col-12 col-lg-8">.col-12 .col-lg-8</div>
                        <div class="col-12 col-lg-4">.col-12 .col-lg-4</div>
                    </div>

                    <div class="row">
                        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                        <div class="col-12 col-md-4">.col-12 .col-md-4</div>
                    </div>

                    <div class="row">
                        <div class="col-6">.col-6</div>
                        <div class="col-6">.col-6</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { reactive } from "vue";
    import { Modal, Toast } from "bootstrap";

    export default {
        name: "Home",
        props: { msg: String },
        data() {
            return {
                state: reactive({ count: 0 }),
                modal: null,
                toast: null,
            };
        },
        mounted() {
            this.modal = new Modal(this.$refs.infoModal);
            this.toast = new Toast(this.$refs.bsToast);
        },
    };
</script>

<style lang="scss" scoped>
    $bl: rgb(39, 41, 43);
    $blc: rgba($bl, 0.03);
    $lblc: rgba($bl, 0.1);
    $dive: 0.75rem;

    .emerge-11 {
        z-index: 11;
    }

    .bd-example-row {
        .row {
            & > [class^="col-"] {
                padding-top: $dive;
                padding-bottom: $dive;
                background-color: $blc;
                border: 1px solid $lblc;
            }
        }
    }
</style>

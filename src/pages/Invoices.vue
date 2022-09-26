<template>
  <q-page
    class="row justify-center"
    :class="$q.screen.gt.xs ? 'q-pa-xl' : 'q-pa-md'"
  >
    <div class="col-sm-12 col-md-8">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Invoices" />
        <q-breadcrumbs-el
          label="edit invoice (INV-2022-010)"
          style="color: #999999"
        />
      </q-breadcrumbs>
      <q-page-container
        class="bg-white q-mt-sm"
        :class="$q.screen.gt.xs ? 'q-pa-lg' : 'q-pa-sm'"
        style="border-radius: 15px"
      >
        <q-list class="q-mb-md">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
              </q-avatar>
            </q-item-section>

            <q-item-section top class="col-2 gt-sm">
              <q-item-label class="q-mt-sm text-weight-bold text-capitalize"
                >Dipa Inhouse</q-item-label
              >
              <q-item-label caption lines="1">
                hello@dipainhouse.com
              </q-item-label>
            </q-item-section>

            <q-item-section side style="width: 100%">
              <q-item-label lines="1">
                <span class="text-grey-8"> Ihen Boulevard Street 101</span>
              </q-item-label>
              <q-item-label caption lines="1">
                Malong City, 65115
              </q-item-label>
              <q-item-label caption lines="1">
                East Java, Indonesia
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <q-card
          flat
          class="text-white"
          style="
            background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
            border-radius: 20px;
          "
        >
          <q-card-section>
            <div class="row">
              <div class="col-xs-12 col-sm-6">
                <div class="text-weight-medium q-mb-xs">Invoice Number</div>
                <div class="q-mb-xs text-weight-medium">INV-2022-010</div>
                <div class="q-mb-xs">
                  <span class="text-weight-medium">Issue Date:</span> 11 Jan
                  2022
                </div>
                <div>
                  <span class="text-weight-medium">Due Date</span>: 18 Jan 2022
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-6"
                :class="$q.screen.gt.xs ? 'text-right' : 'text-left q-mt-sm'"
              >
                <div class="text-weight-medium">Billed to</div>
                <div class="q-mb-xs">INV-2022-010</div>
                <div class="q-mb-xs">
                  <span class="text-weight-medium">Issue Date</span>: 11 Jan
                  2022
                </div>
                <div>
                  <span class="text-weight-medium">Due Date</span>: 18 Jan 2022
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="row q-mt-lg q-mb-md justify-between">
          <div>
            <div class="text-weight-bold">Item Detail</div>
            <div class="text-sm text-grey-8">Type Item for Hours item.</div>
          </div>

          <div>
            <q-btn
              color="grey-4"
              text-color="primary"
              glossy
              unelevated
              icon="camera_enhance"
              label="Customize"
              size="md"
            />
          </div>
        </div>
        <q-separator />
        <div class="row q-gutter-lg q-my-md">
          <div class="col-12 col-sm-5 text-grey-8">
            <div class="text-grey-8 q-mb-lg">Item Name</div>
            <q-input outlined v-model="itemName" bg-color="" />
          </div>
          <div class="col-12 col-sm-1 text-grey-8">
            <div class="text-grey-8 q-mb-lg">Hours</div>
            <q-input outlined v-model="hours" bg-color="" />
          </div>
          <div class="col-12 col-sm-1 text-grey-8">
            <div class="text-grey-8 q-mb-lg">Rate/hr</div>
            <q-input
              outlined
              v-model="rate"
              type="number"
              prefix="$"
              bg-color=""
            />
          </div>
          <div class="col-12 col-sm-1 text-grey-8">
            <div class="text-grey-8 q-mb-lg">Tax</div>
            <q-input
              outlined
              v-model="tax"
              type="number"
              prefix="$"
              bg-color=""
            />
          </div>
          <div class="col text-grey-8">
            <div class="text-grey-8 q-mb-lg">Line Total</div>
            <q-input
              outlined
              v-model="total"
              type="number"
              prefix="$"
              bg-color=""
              color="black"
            />
          </div>
        </div>

        <div class="row q-my-lg">
          <div class="col-12 col-sm-5">
            <q-input
              outlined
              v-model="description"
              autogrow
              label="Description"
            />
          </div>
        </div>
        <q-separator />
        <div class="row q-mt-md q-gutter-sm justify-between">
          <div class="col-12 col-sm-5 text-weight-bold">
            <div class="row">
              <div class="col">Payment Method</div>

              <div class="col">Select method</div>
            </div>
            <div class="row q-mt-sm">
              <q-card
                flat
                class="q-pa-md"
                style="background-color: #fcfcfc; border-radius: 15px"
              >
                <div class="row justify-between align-center q-mb-md">
                  <span class="text-body2 text-weight-bold">Wise Transfer</span>
                  <img
                    src="/public/images/wise-logo.png"
                    alt="wise-logo"
                    width="50"
                    height="15"
                  />
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Name:</span
                  >
                  <span class="text-weight-medium"> Barly Vallendito</span>
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Number:</span
                  >
                  <span class="text-weight-medium"> 9000 888 83334 3333</span>
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Routing Number:</span
                  >
                  <span class="text-weight-medium"> 084009519</span>
                </div>
              </q-card>
            </div>
          </div>
          <!-- <div class="col-1 text-grey-8">Hours</div> -->
          <div class="col-12 col-sm-3">
            <div class="row justify-between q-mb-md">
              <div class="col text-weight-bold">Sub Total</div>
              <div class="col text-right text-weight-bold">$42,000</div>
            </div>
            <div class="row justify-between q-mb-md">
              <div class="col text-grey-8">Discount</div>
              <div class="col-2 text-right text-weight-medium">$0.00</div>
            </div>
            <div class="row justify-between">
              <div class="col text-grey-8">Total Tax</div>
              <div class="col-2 text-right text-weight-medium">$0.00</div>
            </div>
            <q-separator class="q-mb-md q-mt-xl" />
            <div class="row justify-between">
              <div class="text-weight-bold">Total Amount</div>
              <div class="text-weight-bold">$4,800.00</div>
            </div>
          </div>
        </div>
      </q-page-container>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InvoicesPage',
  components: {},
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return {
      todos,
      meta,
      itemName: ref('Payment Project - Moonlight Mobile Design'),
      hours: ref(120),
      rate: ref(40),
      tax: ref(0),
      total: ref(42000),
      description: ref(''),
    };
  },
});
</script>

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
        <div class="row justify-between">
          <q-list class="q-mb-md">
            <q-item class="q-pl-none">
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section top class="col-12 col-sm-2">
                <q-item-label
                  class="q-mt-sm text-weight-bold text-capitalize"
                  >{{ customer?.name }}</q-item-label
                >
                <q-item-label caption>
                  {{ customer?.email }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div :class="$q.screen.lt.sm ? 'q-mb-md' : ''">
            <div>
              <span class="text-grey-8"> {{ customer?.address?.street }}</span>
            </div>
            <div class="text-grey-8">
              {{ customer?.address?.city }}
            </div>
            <div class="text-grey-8">
              {{ customer?.address?.state }}, {{ customer?.address?.country }}
            </div>
          </div>
        </div>

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
                <div class="q-mb-xs text-weight-medium">
                  {{ invoice?.invoiceNumber }}
                </div>
                <div class="q-mb-xs">
                  <span class="text-weight-medium">Issue Date:</span>
                  {{ invoice?.issuedDate }}
                </div>
                <div>
                  <span class="text-weight-medium">Due Date</span>:
                  {{ invoice?.dueDate }}
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-6"
                :class="$q.screen.gt.xs ? 'text-right' : 'text-left q-mt-sm'"
              >
                <div class="text-weight-medium">Billed to</div>
                <div class="q-mb-xs">{{ invoice?.billingAddress?.name }}</div>
                <div class="q-mb-xs">
                  <span class="text-weight-medium">{{
                    invoice?.billingAddress?.company
                  }}</span>
                </div>
                <div>
                  <span class="text-weight-medium"
                    >{{ invoice?.billingAddress?.city }},
                    {{ invoice?.billingAddress?.country }}</span
                  >
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <div class="row q-mt-lg q-mb-md justify-between align-center">
          <div>
            <div class="text-weight-bold">Item Detail</div>
            <div class="text-sm text-grey-8">Type Item for Hours item.</div>
          </div>

          <div>
            <q-btn
              color="grey-4"
              text-color="primary"
              unelevated
              label="Customize"
              no-caps
              size="md"
            />
          </div>
        </div>
        <q-separator />
        <div class="row q-my-sm q-gutter-lg" v-if="$q.screen.gt.xs">
          <div class="col-12 col-sm-4 text-grey-8">
            <div class="text-grey-8">Item Name</div>
          </div>
          <div class="col-4 col-sm-1 text-grey-8">
            <div class="text-grey-8">Hours</div>
          </div>
          <div class="col-4 col-sm-1 text-grey-8">
            <div class="text-grey-8">Rate/hr</div>
          </div>
          <div class="col-4 col-sm-1 text-grey-8">
            <div class="text-grey-8">Tax</div>
          </div>
          <div class="col text-grey-8">
            <div class="text-grey-8">Line Total</div>
          </div>
        </div>
        <q-separator v-if="$q.screen.gt.xs" />

        <div v-for="item in items" :key="item.id">
          <div>
            <div
              class="row q-my-md"
              :class="$q.screen.gt.xs ? 'q-gutter-lg' : 'q-gutter-xs'"
            >
              <div class="col-12 col-sm-4 text-grey-8">
                <q-input
                  outlined
                  :label="$q.screen.lt.sm ? 'Name' : ''"
                  v-model="item.name"
                  bg-color=""
                />
              </div>
              <div class="col-4 col-sm-1 text-grey-8">
                <q-input
                  outlined
                  v-model="item.hours"
                  bg-color=""
                  :label="$q.screen.lt.sm ? 'Hours' : ''"
                />
              </div>
              <div class="col-4 col-sm-1 text-grey-8">
                <q-input
                  outlined
                  :label="$q.screen.lt.sm ? 'Rate' : ''"
                  v-model="item.rate"
                  type="number"
                  prefix="$"
                  bg-color=""
                />
              </div>
              <div class="col-4 col-sm-1 text-grey-8">
                <q-input
                  outlined
                  :label="$q.screen.lt.sm ? 'Tax' : ''"
                  v-model="item.tax"
                  type="number"
                  prefix="$"
                  bg-color=""
                />
              </div>
              <div class="col text-grey-8">
                <q-input
                  outlined
                  :label="$q.screen.lt.sm ? 'Total' : ''"
                  v-model="item.total"
                  type="number"
                  prefix="$"
                  bg-color=""
                  color="black"
                />
              </div>
              <div class="col text-grey-8">
                <q-btn
                  class="q-mt-sm"
                  unelevated
                  round
                  icon="add"
                  color="primary"
                ></q-btn>
              </div>
            </div>
            <q-separator />
          </div>
        </div>

        <div class="row q-my-lg">
          <div class="col-12 col-sm-4">
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
          <div class="col-12 col-sm-6 text-weight-bold">
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
                    src="/images/wise-logo.png"
                    alt="wise-logo"
                    width="50"
                    height="15"
                  />
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Name:
                  </span>
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.accountName }}</span
                  >
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Number:
                  </span>
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.accountNumber }}</span
                  >
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Routing Number:
                  </span>
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.routingNumber }}</span
                  >
                </div>
              </q-card>
            </div>
          </div>
          <!-- <div class="col-1 text-grey-8">Hours</div> -->
          <div class="col-12 col-sm-4">
            <div class="row justify-between q-mb-md">
              <div class="col text-weight-bold">Sub Total</div>
              <div class="col text-right text-weight-bold">${{ total }}</div>
            </div>
            <div class="row justify-between q-mb-md">
              <div class="col text-grey-8">Discount</div>
              <div class="col-2 text-right text-weight-medium">
                ${{
                  discount.toLocaleString('en', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                }}
              </div>
            </div>
            <div class="row justify-between">
              <div class="col text-grey-8">Total Tax</div>
              <div class="col-2 text-right text-weight-medium">$0.00</div>
            </div>
            <q-separator class="q-mb-md q-mt-xl" />
            <div class="row justify-between">
              <div class="text-weight-bold">Total Amount</div>
              <div class="text-weight-bold">${{ total }}</div>
            </div>
          </div>
        </div>
      </q-page-container>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Invoice, Customer, InvoiceItem } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InvoicesPage',
  components: {},
  data() {
    return {
      invoice: [] as unknown as Invoice,
      customer: [] as unknown as Customer,
      items: [
        { id: 1, name: '', hours: 0, rate: 0, tax: 0, total: 0 },
      ] as unknown as InvoiceItem[],
      description: '',
      discount: 0,
    };
  },

  computed: {
    total() {
      const sum = this.invoice?.items?.reduce(
        (prev, curr) => curr?.total + prev,
        0
      );

      const options = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };

      return (sum - this.discount)?.toLocaleString('en', options);
    },
  },
  mounted() {
    fetch('/api/invoices/1')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.invoice = json.invoice;
        this.items = json?.invoice?.items;

        fetch('/api/customers/' + json.invoice.customerId)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            this.customer = json.customer;
          });
      });
  },
  setup() {
    // let invoice = ref<Invoice>();
    // let customer = ref<Customer>();
    // fetch('/api/invoices/1')
    //   .then((res) => res.json())
    //   .then((json) => {
    //     invoice.value = json.invoice;
    //     fetch('/api/customers/' + json.invoice.customerId)
    //       .then((res) => res.json())
    //       .then((json) => {
    //         customer.value = json.customer;
    //       });
    //   });
    // return {
    //   invoice,
    //   customer,
    // };
  },
});
</script>

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
              <q-item-label class="q-mt-sm text-weight-bold text-capitalize">{{
                customer?.name
              }}</q-item-label>
              <q-item-label caption lines="1">
                {{ customer?.email }}
              </q-item-label>
            </q-item-section>

            <q-item-section side style="width: 100%">
              <q-item-label lines="1">
                <span class="text-grey-8">
                  {{ customer?.address?.street }}</span
                >
              </q-item-label>
              <q-item-label caption lines="1">
                {{ customer?.address.city }}
              </q-item-label>
              <q-item-label caption lines="1">
                {{ customer?.address?.state }}, {{ customer?.address?.country }}
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

        <div class="row q-mt-lg q-mb-md justify-between">
          <div>
            <div class="text-weight-bold">Item Detail</div>
            <div class="text-sm text-grey-8">Type Item for Hours item.</div>
          </div>

          <div>
            <q-btn
              color="grey-4"
              text-color="primary"
              unelevated
              icon="camera_enhance"
              label="Customize"
              size="md"
            />
          </div>
        </div>
        <q-separator />
        <div
          v-for="item in invoice?.items"
          :key="item.id"
          class="row q-gutter-lg q-my-md"
        >
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
                    src="/images/wise-logo.png"
                    alt="wise-logo"
                    width="50"
                    height="15"
                  />
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Name:</span
                  >
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.accountName }}</span
                  >
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Account Number:</span
                  >
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.accountNumber }}</span
                  >
                </div>
                <div class="q-mb-sm">
                  <span class="text-grey-8 text-weight-light"
                    >Routing Number:</span
                  >
                  <span class="text-weight-medium">
                    {{ invoice?.paymentMethod?.routingNumber }}</span
                  >
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
import { Invoice, Customer } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InvoicesPage',
  components: {},
  setup() {
    let invoice = ref<Invoice>();
    let customer = ref<Customer>();
    let hours = ref(120);
    let rate = ref(0);
    let tax = ref(0);
    let total = ref(0);

    fetch('/api/invoices/1')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        invoice.value = json.invoice;

        fetch('/api/customers/' + json.invoice.customerId)
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            customer.value = json.customer;
          });
      });
    return {
      invoice,
      customer,
      itemName: ref('Payment Project - Moonlight Mobile Design'),
      hours,
      rate,
      tax,
      total,
      description: ref(''),
    };
  },
});
</script>

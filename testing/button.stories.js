import Vue from 'vue';
import PayPalCheckoutButton from '../src/index';

export default { title: 'PayPal Checkout Button' }

export const asAComponent = () => ({
    components: { PayPalCheckoutButton },
    template: '<paypal-checkout-button client-id="AXcUUVS0yJDtfnq-27i5E7vTxnE9Hfhbp4tV_qkR6TMzyFK7xj9JZrqIsBqG15UrBOUv0XND2Zt91xAO" currency="AUD" order-id="024141" amount="10">' 
        + '</paypal-checkout-button>'
  });
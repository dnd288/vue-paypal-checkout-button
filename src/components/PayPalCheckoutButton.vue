<template>
    <div />
</template>

<script>
export default {
    props: ['clientId', 'currency', 'orderId', 'amount', 'options'],
    methods: {
        createOrder(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    custom_id: this.orderId,
                    amount: {
                        value: this.amount
                    }
                }]
            })
        },
        async onApprove(data, actions) {
            const response = await actions.order.capture()
            this.$emit('payment-completed', response)
        },
        loadScript(loaded) {
            const paypalScript = document.createElement('script')
            paypalScript.setAttribute(
                'src',
                this.getSdk()
            )
            paypalScript.async = true
            paypalScript.defer = true
            paypalScript.onload = loaded
            document.head.appendChild(paypalScript)
        },
        getSdk() {
            var url = `https://www.paypal.com/sdk/js?client-id=${this.clientId}`
                    + `&currency=${this.currency}`
            if (this.options) {
                if (this.options.disableFunding) {
                    url += `&disable-funding=${this.options.disableFunding}`
                }
                if (this.options.disableCard) {
                    url += `&disable-card=${this.options.disableCard}`
                }
                if (this.options.debug) {
                    url += `&debug=${this.options.debug}`
                }
            }
            return url
        },
        generateButton() {
            const paypal = window.paypal
            const button = Object.assign({
                createOrder: this.createOrder,
                onApprove: this.onApprove
            });
            paypal.Buttons(button).render(this.$el)
        }
    },
    mounted() {
        this.loadScript(this.generateButton)
    },
}
</script>
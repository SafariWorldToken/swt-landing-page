<template>
  <div>$SWT: 0.00 </div>
</template>

<script>
import {ref, onMounted, computed} from 'vue'
import { useStore } from 'vuex'

export default {
    name: "GetSafariworldBalance",

    setup() {
        const userSwt = ref(0)
        const store = useStore()
        const setSwt = (swt) => store.commit('setSwt', swt)
        const userSwtValue = () => {
            const userAddress = store.state.address
            const url = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x40e8b78546fc1f38758799858742950654e7364b&address=${userAddress}&apikey=FBKX1IXSK3R5SWMXD36M1MCNTK7SJYS52W`;
            fetch(url)
            .then((response) => {
                return response.json();
            }).then((data) => {
            const swt = data.result / 1e18
            const result = swt.toFixed(2);
            const num = result - result % 1;
            setSwt(num)
            const internationalNumberFormat = new Intl.NumberFormat('en-US')
            userSwt.value = internationalNumberFormat.format(num)

            
            return userSwt;
            
            })
            .catch( (error) => {
                userSwt.value  = error;
                return userSwt;
            });
        }

        onMounted(() => {
            userSwtValue()
            })
        return {
            userSwt,
            swt: computed(() => store.state.swt)
        }
        
    }
}
</script>

<style scoped>

</style>
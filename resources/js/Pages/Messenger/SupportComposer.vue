<template>
<div class=" z-30 relative bg-white">
    <input 
        v-model="message" 
        @keydown.enter="send"  
        type="text"  
        class="pl-4 pr-16 py-2 border border-orange-500 focus:outline-none w-full text-xl text-gray-600"
    placeholder="Start typing  :)" >
    <button @click="send" class="absolute right-1 bottom-1 top-1 text-orange-400 bg-white hover:text-orange-600  px-2  w-auto transistion-color duration-100 focus:outline-none">Send</button>
</div>
</template>

<script>
    export default {
        data() {
            return {
                message: '',
                sending:false,
            };
        },
        methods: {
            send(e) {
                e.preventDefault();
                
                if (this.message == '') {
                    return;
                }

                let formData = new FormData(); 
                formData.append("message", this.message || '');
                self.$inertia.post(route('support.store'), formData,{
                    preserveState: true,
                    preserveScroll: true,                
                    onStart: () => this.sending = true,
                    onFinish: () => this.sending = false,
                    onSuccess: () => {
                        if (Object.keys(this.$page.errors).length === 0) {
                            this.message = ''
                        }
                    },             
                });


                // axios.post(route('support.store'), { 
                //     text: this.message
                // })                

                // this.$emit('send', this.message);
                // this.message = '';
            }
        }
    }
</script>

<style scoped>
.composer textarea {
    width: 96%;
    margin: 10px;
    resize: none;
    border-radius: 3px;
    border: 1px solid lightgray;
    padding: 6px;
}
</style>


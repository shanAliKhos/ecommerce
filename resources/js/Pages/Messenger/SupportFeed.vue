<template>
      <div class=" z-30 flex flex-col bg-gray-200 px-2 chat-services overflow-auto pb-3 pt-3" ref="feed">
        <div v-for="(mes,index) in messages" :key="index"  :class="(mes.to==$page.user.id)?Received:Sent">
            {{mes.text}}
        </div>
      </div>
</template>

<script>
    export default {
        props: {
            // contact: {
            //     type: Object
            // },
            messages: {
                type: Array,
                required: true
            }
        },
        methods: {
            scrollToBottom() {
                setTimeout(() => {
                    this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
                }, 50);
            }
        },
        watch: {
            // contact(contact) {
            //     this.scrollToBottom();
            // },
            messages(messages) {
                this.scrollToBottom();
            }
        },
        computed:{
            Received(){
                return 'chat bg-white text-gray-700 p-2 self-start my-2 rounded-md shadow mr-3 mt-3';
            },
            Sent(){
                return 'message bg-green-500 text-white p-2 self-end my-2 rounded-md shadow ml-3 mt-3';
            },
        },        
        mounted() {
            this.scrollToBottom();
        },
    }
</script>

<style  scoped>
.feed {
    background: #f0f0f0;
    height: 100%;
    max-height: 470px;
    overflow: scroll;

    ul {
        list-style-type: none;
        padding: 5px;

        li {
            &.message {
                margin: 10px 0;
                width: 100%;

                .text {
                    max-width: 200px;
                    border-radius: 5px;
                    padding: 12px;
                    display: inline-block;
                }

                &.received {
                    text-align: right;

                    .text {
                        background: #ffffff;
                    }
                }

                &.sent {
                    text-align: left;

                    .text {
                        background: #90e0b2;
                    }
                }
            }
        }
    }
}
</style>


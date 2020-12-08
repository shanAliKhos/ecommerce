<template>   
<div class="fixed bottom-0 right-0 flex flex-col items-end z-30 w-auto">
    <div class="chat-modal mr-5 flex flex-col mb-5 shadow-lg  w-full  z-0">
      <!-- close button -->
      <div class=" z-30  close-chat bg-red-500 hover:bg-red-600 text-white mb-1 w-10 flex justify-center items-center px-2 py-1 rounded self-end cursor-pointer">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
          <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
        </svg>
      </div>
      <!-- admin profile -->
      <div class=" z-30 flex justify-between items-center text-white p-2 bg-orange-500 border shadow-lg mr-5 w-full">
        <div class="flex items-center">
          <img src="https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png" alt="picture" class="rounded-full w-8 h-8 mr-1">
          <h2 class="font-semibold tracking-wider">HartDev</h2>
        </div>
        <div class="flex items-center justify-center relative">
          <small class="mr-1 uppercase ">online</small>
          <span class="flex h-3 w-3 absolute right-14">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span> 
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-400 border-2 border-gray-200"></span>
          </span>
          <!-- <div class="rounded-full w-2 h-2 bg-green-400 border-2 border-white"></div> -->
        </div>
      </div>
      <!-- chats -->
 
        
        <SupportFeed :messages="messages" />

      <!-- send message -->

        <SupportComposer />

    </div>
    <div class="z-30 show-chat mx-10 mb-6 mt-4 text-orange-500 hover:text-orange-400 flex justify-center items-center cursor-pointer ">
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-chat-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
      </svg>
    </div>
</div> 
</template>

<script> 
import SupportComposer from './SupportComposer';
import SupportFeed from './SupportFeed';
export default {
    components:{
      SupportFeed,
      SupportComposer,
    },
    data() {
        return {
            message:null,
            messages:this.$page.Support,
            sending:false,
        }
    },
 
    methods: {
        // sendMessage(text) {

            // const self= this;
            // if (!text) {
            //     return;
            // } 
            // let formData = new FormData();
            // formData.append("text", self.message || '');  

 
            // axios.post(route('support.store'), { 
            //     text: text
            // })
        // },
        // startConversation() {
            // const self= this;
            // axios.get(route('support.index'))
            // this.updateUnreadCount(contact, true);
        // },      
        scrollToBottom() {
            setTimeout(() => {
                this.$refs.feed.scrollTop = this.$refs.feed.scrollHeight - this.$refs.feed.clientHeight;
            }, 50);
        },    
        saveNewMessage(message) {
            this.messages.push(message);
        },        
        hanleIncoming(message) { 
          
            this.saveNewMessage(message);
            return;
            // this.updateUnreadCount(message.from_contact, false);
        },         
    },

  
 
    mounted () {
        const self = this;

        Echo.private(`messages.${this.$page.user.id}`)
            .listen('NewMessage', (e) => {
            self.hanleIncoming(e.message);
        });
        
        const chatModal = document.querySelector('.chat-modal');
        const chatServices = document.querySelector('.chat-services');
        const showChat = document.querySelector('.show-chat');
        const closeChat = document.querySelector('.close-chat');
  
        showChat.addEventListener('click', function (){

          // self.startConversation()
          chatModal.classList.add('show')
          showChat.classList.add('hidden')
          setTimeout(() => {
              chatServices.classList.add('expand')
          }, 500);
        });

        closeChat.addEventListener('click',function () {
          setTimeout(() => {
              showChat.classList.remove('hidden')
          }, 820);
          chatServices.classList.remove('expand')
          setTimeout(() => {
          chatModal.classList.remove('show')
          }, 500);
        }); 
 
    },
 
}
</script>

<style scoped>
  .chat-services{
      transition: .5s;
      max-height: 0;
    }
    .chat-services.expand{
      max-height: 350px;
    }
    .message {
      max-width: 250px;
    }

    .chat-modal{
      transition: .5s;
      opacity: 0;
      transform: translateX(500px);
    }

    .chat-modal.show{
      opacity: 1;
      transform: translateX(0);
    }

    @keyframes animateModal {
      from{
        transform: translateX(200px) opacity(0);
      }
      to{
        transform: translateX(0) opacity(1);
      }
    }
  
</style>
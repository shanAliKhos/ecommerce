<template>
    <div class="chat-app">
        <ContactsList :contacts="contacts" @selected="startConversationWith"/>
        <Conversation :contact="selectedContact" :messages="messages" @new="saveNewMessage"/>
    </div>
</template>

<script>
import AppLayout from './../Ecomerce/shared/AppLayout'   
import Conversation from './Conversation';
import ContactsList from './ContactsList';

export default {
    layout: AppLayout,     
    components: {
        Conversation, 
        ContactsList,
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selectedContact: null,
            messages: [],
            contacts: []
        };
    }, 
    methods: {
        startConversationWith(contact) {
            this.updateUnreadCount(contact, true);

            axios.get(`/conversation/${contact.id}`)
                .then((response) => {
                    this.messages = response.data;
                    this.selectedContact = contact;
                })
        },
        saveNewMessage(message) {
            this.messages.push(message);
        },
        hanleIncoming(message) {
            if (this.selectedContact && message.from == this.selectedContact.id) {
                this.saveNewMessage(message);
                return;
            }

            this.updateUnreadCount(message.from_contact, false);
        },
        updateUnreadCount(contact, reset) {
            this.contacts = this.contacts.map((single) => {
                if (single.id !== contact.id) {
                    return single;
                }

                if (reset)
                    single.unread = 0;
                else
                    single.unread += 1;

                return single;
            })
        }
    },
    mounted() {
  
        // Echo.private(`messages.${this.user.id}`)
        //     .listen('NewMessage', (e) => {
        //     this.hanleIncoming(e.message);
        // });

        axios.get('/contacts') 
            .then((response) => {
            this.contacts = response.data;
        });
    },    
}
</script> 
<style   scoped>
.chat-app {
    display: flex;
}
</style>

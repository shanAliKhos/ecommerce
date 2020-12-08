<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use App\Events\NewMessage;
use Inertia\Inertia;


class ContactsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');  
    }
    
    public function index()
    {
        return Inertia::render('Messenger/MessengerApp');
    }

    public function get()
    {  
        $contacts = User::where('id', '!=', auth()->id())->get();

        // get a collection of items where sender_id is the user who sent us a message
        // and messages_count is the number of unread messages we have from him
        $unreadIds = Message::select(\DB::raw('`from` as sender_id, count(`from`) as messages_count'))
            ->where('to', auth()->id())
            ->where('read', false)
            ->groupBy('from')
            ->get();

        // add an unread key to each contact with the count of unread messages
        $contacts = $contacts->map(function($contact) use ($unreadIds) {
            $contactUnread = $unreadIds->where('sender_id', $contact->id)->first();

            $contact->unread = $contactUnread ? $contactUnread->messages_count : 0;

            return $contact;
        });


        return response()->json($contacts);
    }

    public function getMessagesFor($id)
    { 
        // mark all messages with the selected contact as read
        Message::where('from', $id)->where('to', auth()->id())->update(['read' => true]);

        // get all messages between the authenticated user and the selected user
        $messages = Message::where(function($q) use ($id) {
            $q->where('from', auth()->id());
            $q->where('to', $id);
        })->orWhere(function($q) use ($id) {
            $q->where('from', $id);
            $q->where('to', auth()->id());
        })
        ->get();

        return response()->json($messages);
    }

    public function send(Request $request)
    {  
        $message = Message::create([
            'from' => Auth()->id(),
            'to' => $request->contact_id,
            'text' => $request->text
        ]);
        broadcast(new NewMessage($message));
        return response()->json($message);
    }


    public function SupportMessegesend(Request $request)
    {  

        $User = new User;
        $Admin = $User->where('is_admin',true)->first();
 
        $to = $Admin->id;

        $message = Message::create([
            'from' => Auth()->id(),
            'to' => $to,
            'text' => $request->text
        ]);
        broadcast(new NewMessage($message));
        
        return response()->json($message);
    }


    public function SupportMesseges()
    { 
     
        $User = new User;
        $Admin = $User->where('is_admin',true)->first();
        $id = $Admin->id;
        // mark all messages with the selected contact as read
        Message::where('from', $id)->where('to', $id)->update(['read' => true]);

        // // get all messages between the authenticated user and the selected user
        // $messages = Message::where(function($q) use ($id) {
        //     $q->where('from', auth()->id());
        //     $q->where('to', $id);
        // })->orWhere(function($q) use ($id) {
        //     $q->where('from', $id);
        //     $q->where('to', auth()->id());
        // })
        // ->get();
 
        // return response()->json($messages);
        return back();
    }


    
}

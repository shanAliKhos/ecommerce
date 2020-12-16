<?php

namespace Database\Seeders;
use App\Models\Setting;

use Illuminate\Database\Seeder;

class SettingsTableSeeder extends Seeder
{
    /**
     * @var array
     */
    protected $settings = [
        [
            'key'                       =>  'site_name',
            'value'                     =>  'e shop',
        ],
        [
            'key'                       =>  'site_title',
            'value'                     =>  'e shop',
        ],
        [
            'key'                       =>  'default_email_address',
            'value'                     =>  'shanalikhoso12@gmail.com',
        ],
        [
            'key'                       =>  'phone',
            'value'                     =>  '00923053170601',
        ],
        [
            'key'                       =>  'currency_code',
            'value'                     =>  'USD',
        ],
        [
            'key'                       =>  'currency_symbol',
            'value'                     =>  '$',
        ],
        [
            'key'                       =>  'site_logo',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'site_favicon',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'footer_copyright_text',
            'value'                     =>  'COPYRIGHT @ shanalikhoso12@gmail.com',
        ],
        [
            'key'                       =>  'seo_meta_title',
            'value'                     =>  'ecommerce shopping website',
        ],
        [
            'key'                       =>  'seo_meta_description',
            'value'                     =>  'ecommerce shopping website',
        ],
        [
            'key'                       =>  'social_facebook',
            'value'                     =>  'https://www.facebook.com/',
        ],
        [
            'key'                       =>  'social_twitter',
            'value'                     =>  'https://twitter.com/?lang=en',
        ],
        [
            'key'                       =>  'social_instagram',
            'value'                     =>  'https://www.instagram.com/',
        ],
        [
            'key'                       =>  'social_linkedin',
            'value'                     =>  'https://pk.linkedin.com/',
        ],
        [
            'key'                       =>  'google_analytics',
            'value'                     =>  'google_analytics',
        ],
        [
            'key'                       =>  'facebook_pixels',
            'value'                     =>  'facebook_pixels',
        ],
        [
            'key'                       =>  'stripe_payment_method',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'stripe_key',
            'value'                     =>  'stripe_key',
        ],
        [
            'key'                       =>  'stripe_secret_key',
            'value'                     =>  'stripe_secret_key',
        ],
        [
            'key'                       =>  'paypal_payment_method',
            'value'                     =>  '',
        ],
        [
            'key'                       =>  'paypal_client_id',
            'value'                     =>  'paypal_client_id',
        ],
        [
            'key'                       =>  'paypal_secret_id',
            'value'                     =>  'paypal_secret_id',
        ],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->settings as $index => $setting)
        {
            $result = Setting::create($setting);
            if (!$result) {
                $this->command->info("Insert failed at record $index.");
                return;
            }
        }
        $this->command->info('Inserted '.count($this->settings). ' records');
    }
}

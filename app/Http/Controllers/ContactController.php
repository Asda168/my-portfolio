<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Handle a portfolio contact form submission and push it to Telegram.
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $name = $request->string('name')->toString();
        $email = $request->string('email')->toString();
        $message = $request->string('message')->toString();

        $this->notifyTelegram($name, $email, $message);

        Inertia::flash('toast', [
            'type' => 'success',
            'message' => "Thanks, {$name}! Your message has been sent.",
        ]);

        return back();
    }

    /**
     * Push the submitted message to the configured Telegram chat.
     */
    protected function notifyTelegram(string $name, string $email, string $message): void
    {
        $token = config('services.telegram.bot_token');
        $chatId = config('services.telegram.chat_id');

        if (! $token || ! $chatId) {
            Log::warning('Telegram contact notification skipped: bot not configured.', [
                'name' => $name,
                'email' => $email,
                'message' => $message,
            ]);

            return;
        }

        $text = sprintf(
            "<b>New Portfolio Contact</b>\n\n<b>Name:</b> %s\n<b>Email:</b> %s\n\n%s",
            e($name),
            e($email),
            e($message),
        );

        $response = Http::asForm()->post("https://api.telegram.org/bot{$token}/sendMessage", [
            'chat_id' => $chatId,
            'text' => $text,
            'parse_mode' => 'HTML',
        ]);

        if ($response->failed()) {
            Log::error('Failed to deliver Telegram contact notification.', [
                'status' => $response->status(),
                'body' => $response->body(),
                'name' => $name,
                'email' => $email,
            ]);
        }
    }
}
